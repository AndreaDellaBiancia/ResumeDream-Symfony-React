<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Form\UserType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\TemplateRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

/**
 * @Route("/api/v1/")
 */
class MainController extends AbstractController
{

    private $manager;

    public function __construct(EntityManagerInterface $manager)
    {
        $this->manager = $manager;
    }
    /**
     * @Route("", name="api_main", methods={"GET"}))
     */
    public function landingPage(TemplateRepository $templateRepository): Response
    {
        //Get the first 5 templates and store them in $homeTemplates 
        $homeTemplates = $templateRepository->findBy([], ['id' => 'ASC'], 5);
        //We return an object that contains the 5 templates 
        return $this->json($homeTemplates, 200, [], [
            'groups' => ['landingPage']
        ]);
    }

    /**
     * @Route("inscription", name="register", methods={"POST"})
     */
    public function register(Request $request, UserPasswordHasherInterface $passwordHasher, UserRepository $userRepository)
    {
        //Creation of a form to register a new user using the UserType and the User entity 
        $user = new User();
        $form = $this->createForm(
            UserType::class,
            $user,
            ['csrf_protection' => false]
        );

        //Recuperate the JSON data received from the client 
        //Decoding the JSON to obtain an associative array
        $jsonArray = json_decode($request->getContent(), true);

        // We associate the associative array with the form
        $form->submit($jsonArray);

        // We check if the form is valid
        if ($form->isValid()) {
          
            $email = $form->get('email')->getData();

            $emailExist = $userRepository->findBy(['email' => $email]);
            //We check if $emailExist is empty (no email found in the database)
            if ($emailExist == null) {

                $passwordHasher = $passwordHasher->hashPassword($user, $user->getPassword());
          
                $user->setPassword($passwordHasher);
                $user->setRoles(["ROLE_USER"]);
                
                //We add the new User on the database
                $this->manager->persist($user);
                $this->manager->flush();

                $errorMessages = [];
                foreach ($form->getErrors(true) as $error) {
                    $errorMessages[] = [
                        'message' => $error->getMessage(),
                        'property' => $error->getOrigin()->getName(),
                    ];
                };

                //A Response object is returned
                return $this->json($user, 201, [], [
                    'groups' => ['user_read'],
                ]);
            }
            //If the email already exist in the database we show an error message (L'email n'est pas valide)
            else {
                $errorMessages = [[
                    'message' => 'L\'email n\'est pas valide',
                ]];
                return $this->json($errorMessages, 400);
            }

        }

        //We create an empty array in which we add an associative array
        //with all the error messages for each field of the form
        //with the name of the property concerned by the error
        $errorMessages = [];
        foreach ($form->getErrors(true) as $error) {
            $errorMessages[] = [
                'message' => $error->getMessage(),
                'property' => $error->getOrigin()->getName(),
            ];
        }

        //We return an array with the error message
        return $this->json($errorMessages, 400);
    }
}
