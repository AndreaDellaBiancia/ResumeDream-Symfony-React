<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Form\UserType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
/**
 * @Route("/api/v1/mon-espace/profil/user", requirements={"id"="\d+"})
 */
class ProfileController extends AbstractController
{

    private $manager;

    public function __construct(EntityManagerInterface $manager)
    {
        $this->manager = $manager;
    }

    
    /**
     * @IsGranted("ROLE_USER")
     * @Route("/read", name="user_read", methods={"GET"})
     */
    public function read(): Response
    {
        $user = $this->getUser();
        //We return an object that contains the user's informations 
        //entered through the Annotation Groups, 
        //to serialise(choose) only a part of the properties of an object.
        return $this->json($user, 200, [], ['groups' => ['user_read']]);
    }


    /**
     * @IsGranted("ROLE_USER")
     * @Route("/edit", name="user_edit", methods={"PUT", "PATCH"})
     */
    public function edit(Request $request,UserPasswordHasherInterface $passwordHasher)
    {
        $user = $this->getUser();
       
        //Creation of a form to edit a new user using the UserType and the User entity 
        $form = $this->createForm(
            UserType::class,
            $user,
            ['csrf_protection' => false]
        );
        //We recover the modified form and transform it into a json array
        $jsonArray = json_decode($request->getContent(), true);

        // We associate the associative array with the form
        $form->submit($jsonArray);

        // We check if the form is valid
        if ($form->isValid()) {
            $passwordHasher = $passwordHasher->hashPassword($user, $user->getPassword());
            $user->setUpdatedAt(new \DateTimeImmutable());
            $user->setPassword($passwordHasher);

            $this->manager->flush();

            //A Response object is returned
            return $this->json($user, 200, [], [
                'groups' => ['user_read'],
            ]);
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
