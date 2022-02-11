<?php

namespace App\Controller\Api;

use App\Entity\Education;
use App\Form\EducationType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;

/**
 * @Route("/api/v1/mon-espace/profil/formation", name="api_education_")
 */
class EducationController extends AbstractController
{
    /**
     * @IsGranted("ROLE_USER")
     * @Route("", name="browse",  methods={"GET"})
     */
    public function browse(): Response
    {
        return $this->json($this->getUser()->getEducation(), 200 , [], [
            'groups' => ['education']
        ]);
    }

    /**
     * @IsGranted("ROLE_USER")
     * @Route("/{id}", name="read", methods={"GET"})
     */
    public function read(Education $education): Response
    {
        return $this->json($education, 200, [], [
            'groups' => ['education']
        ]);
    }

    /**
     * @IsGranted("ROLE_USER")
     * @Route("", name="add", methods={"POST"})
     */
    public function add(EntityManagerInterface $manager, Request $request)
    {
        $education = new Education();
        $form = $this->createForm(EducationType::class, $education, ['csrf_protection' => false]);


        $json = $request->getContent();

        $jsonArray = json_decode($json, true);

        $form->submit($jsonArray);

        if ($form->isValid()) {

            $education = $education->setUser($this->getUser());
            $manager->persist($education);
            $manager->flush();

            // Une méthode de controleur doit toujours retourner un objet Response
            return $this->json($education, 201, [], [
                'groups' => ['education'],
            ]);
        }

        $errorMessages = (string) $form->getErrors(true);

        return $this->json($errorMessages, 400);
    }

    /**
     * @IsGranted("ROLE_USER")
     * @Route("/{id}", name="edit", methods={"PUT", "PATCH"})
     */
    public function edit(Education $education, EntityManagerInterface $manager, Request $request)
    {
        $form = $this->createForm(EducationType::class, $education, ['csrf_protection' => false]);

        $json = $request->getContent();
        $jsonArray = json_decode($json, true);

        $form->submit($jsonArray);

        if ($form->isValid()) {

            $education->setUpdatedAt(new \DateTimeImmutable());
            $manager->flush();

            return $this->json($education, 200, [], [
                'groups' => ['education'],
            ]);
        }

        $errorMessages = (string) $form->getErrors(true);

        return $this->json($errorMessages, 400);
    }

    /**
     * @IsGranted("ROLE_USER")
     * @Route("/{id}", name="delete", methods={"DELETE"})
     */
    public function delete(Education $education, EntityManagerInterface $manager)
    {
        $manager->remove($education);
        $manager->flush();

        return $this->json(null, 204);
    }
}
