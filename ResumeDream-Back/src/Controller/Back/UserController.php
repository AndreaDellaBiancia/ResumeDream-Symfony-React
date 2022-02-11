<?php

namespace App\Controller\Back;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/user", name="user_")
 */
class UserController extends AbstractController
{
    /**
     * @Route("/", name="browse")
     */
    public function browse(UserRepository $UserRepository): Response
    {
        return $this->render('back/user/browse.html.twig', [
            'users' => $UserRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="add")
     */
    public function add(Request $request, EntityManagerInterface $entityManager, UserPasswordHasherInterface $passwordHasher, UserRepository $userRepository): Response
    {
        //Creation of a form to register a new user using the UserType and the User entity 
        $user = new User();
        $form = $this->createForm(UserType::class, $user, ['csrf_protection' => false]);
        $form->handleRequest($request);

        // We check if the form is valid
        if ($form->isSubmitted() && $form->isValid()) {   

            $email = $form->get('email')->getData();

            $emailExist = $userRepository->findBy(['email' => $email]);
            //We check if $emailExist is empty (no email found in the database)
            if ($emailExist == null) {

            //If the email is not in the database we can add it

                $passwordHasher = $passwordHasher->hashPassword($user, $user->getPassword());
                $user->setPassword($passwordHasher);

                //We add the new User on the database
                $entityManager->persist($user);
                $entityManager->flush();
            } 
            //If the email already exist in the database we show an error message (L'email n'est pas valide)
            else {
                $errorMessages = [[
                    'message' => 'L\'email n\'est pas valide',      
                ]];

                return $this->renderForm('back/user/add.html.twig', [
                    'user' => $user,
                    'form' => $form,
                    'errors' => $errorMessages
                ]);
            }

            return $this->redirectToRoute('user_browse', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('back/user/add.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/{id}", name="read")
     */
    public function read(User $user): Response
    {
        return $this->render('back/user/read.html.twig', [
            'user' => $user,
        ]);
    }

    /**
     * @Route("/edit/{id}", name="edit")
     */
    public function edit(Request $request, User $user, EntityManagerInterface $entityManager, UserPasswordHasherInterface $userPasswordHasher): Response
    {
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            $password = $form->get('password')->getData();
            // $password vaut null si rien n'a été tapé
            if ($password != null) {
                $user->setUpdatedAt(new \DateTimeImmutable());
                $hashedPassword = $userPasswordHasher->hashPassword($user, $password);
                $user->setPassword($hashedPassword);
            }

            $entityManager->persist($user);
            $entityManager->flush();

            return $this->redirectToRoute('user_browse', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('back/user/edit.html.twig', [
            'user' => $user,
            'form' => $form,
        ]);
    }

    /**
     * @Route("/delete/{id}", name="delete")
     */
    public function delete(User $user, EntityManagerInterface $entityManager): Response
    {
        $entityManager->remove($user);
        $entityManager->flush();

        return $this->redirectToRoute('user_browse', [], Response::HTTP_SEE_OTHER);
    }
}
