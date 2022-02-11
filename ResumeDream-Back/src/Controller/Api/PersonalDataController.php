<?php

namespace App\Controller\Api;

use App\Entity\PersonalData;
use App\Form\PersonalDataType;
use App\Service\ImageUploader;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;

/**
 * @Route("/api/v1/mon-espace/profil/donnees-personelles", name="api_personal_data_")
 */
class PersonalDataController extends AbstractController
{
     /**
     * @IsGranted("ROLE_USER")
     * @Route("", name="browse",  methods={"GET"})
     */
    public function browse(): Response
    {
        return $this->json($this->getUser()->getPersonalData(), 200 , [], [
            'groups' => ['personal-data']
        ]);
    }

    /**
     * @IsGranted("ROLE_USER")
     * @Route("/{id}", name="read", methods={"GET"})
     */
    public function read(PersonalData $personalData): Response
    {

        return $this->json($personalData, 200, [], [
            'groups' => ['personal-data']
        ]);
    }

    /**
     * @IsGranted("ROLE_USER")
     * @Route("", name="add", methods={"POST"})
     */
    public function add(EntityManagerInterface $manager, Request $request, ImageUploader $imageUploader)
    {

        $personalData = new PersonalData();
        $form = $this->createForm(PersonalDataType::class, $personalData, ['csrf_protection' => false]);


        $json = $request->getContent();

        $jsonArray = json_decode($json, true);

        $form->submit($jsonArray);

        if ($form->isValid()) {

            $picture = $form->get('picture')->getData();

            if ($picture !== null) {
                
                $newFilename = $imageUploader->uploadPicture($picture, 'pictures_directory'); 
                 // updates the 'image' property to store the file name
                // instead of its contents
                $personalData->setPicture($newFilename);               
            }

            $personalData = $personalData->setUser($this->getUser());
            $manager->persist($personalData);
            $manager->flush();

            // Une méthode de controleur doit toujours retourner un objet Response
            return $this->json($personalData, 201, [], [
                'groups' => ['personal-data'],
            ]);
        }

        $errorMessages = (string) $form->getErrors(true);

        return $this->json($errorMessages, 400);
    }

    /**
     * @IsGranted("ROLE_USER")
     * @Route("/{id}", name="edit", methods={"PUT", "PATCH"})
     */
    public function edit(PersonalData $personalData, EntityManagerInterface $manager, Request $request, ImageUploader $imageUploader)
    {
        $form = $this->createForm(PersonalDataType::class, $personalData, ['csrf_protection' => false]);

        $json = $request->getContent();
        $jsonArray = json_decode($json, true);

        $form->submit($jsonArray);

        if ($form->isValid()) {

            $picture = $form->get('picture')->getData();

            $newFilename = $imageUploader->uploadPicture($picture, 'pictures_directory'); 
            // updates the 'image' property to store the file name
            // instead of its contents
            $personalData->setPicture($newFilename);               

            $personalData->setUpdatedAt(new \DateTimeImmutable());
            $manager->flush();

            return $this->json($personalData, 200, [], [
                'groups' => ['personal-data'],
            ]);
        }

        $errorMessages = (string) $form->getErrors(true);

        return $this->json($errorMessages, 400);
    }

    /**
     * @IsGranted("ROLE_USER")
     * @Route("/{id}", name="delete", methods={"DELETE"})
     */
    public function delete(PersonalData $personalData, EntityManagerInterface $manager)
    {
        $manager->remove($personalData);
        $manager->flush();

        return $this->json(null, 204);
    }
}
