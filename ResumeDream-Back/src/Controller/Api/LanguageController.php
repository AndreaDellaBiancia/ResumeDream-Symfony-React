<?php

namespace App\Controller\Api;

use App\Entity\Language;
use App\Form\LanguageType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;

/**
 * @Route("/api/v1/mon-espace/profil/langue", name="api_language_")
 */
class LanguageController extends AbstractController
{
    /**
     * @IsGranted("ROLE_USER")
     * @Route("", name="browse",  methods={"GET"})
     */
    public function browse(): Response
    {
        return $this->json($this->getUser()->getLanguage(), 200, [], [
            'groups' => ['language']
        ]);
    }

    /**
     * @IsGranted("ROLE_USER")
     * @Route("/{id}", name="read", methods={"GET"})
     */
    public function read(Language $language): Response
    {

        return $this->json($language, 200, [], [
            'groups' => ['language']
        ]);
    }

    /**
     * @IsGranted("ROLE_USER")
     * @Route("", name="add", methods={"POST"})
     */
    public function add(EntityManagerInterface $manager, Request $request)
    {

        $language = new Language();
        $form = $this->createForm(LanguageType::class, $language, ['csrf_protection' => false]);


        $json = $request->getContent();

        $jsonArray = json_decode($json, true);

        $form->submit($jsonArray);

        if ($form->isValid()) {

            $education = $language->setUser($this->getUser());
            $manager->persist($education);
            $manager->flush();

            // Une méthode de controleur doit toujours retourner un objet Response
            return $this->json($language, 201, [], [
                'groups' => ['language'],
            ]);
        }

        $errorMessages = (string) $form->getErrors(true);

        return $this->json($errorMessages, 400);
    }

    /**
     * @IsGranted("ROLE_USER")
     * @Route("/{id}", name="edit", methods={"PUT", "PATCH"})
     */
    public function edit(Language $language, EntityManagerInterface $manager, Request $request)
    {
        $form = $this->createForm(LanguageType::class, $language, ['csrf_protection' => false]);

        $json = $request->getContent();
        $jsonArray = json_decode($json, true);

        $form->submit($jsonArray);

        if ($form->isValid()) {

            $language->setUpdatedAt(new \DateTimeImmutable());
            $manager->flush();

            return $this->json($language, 200, [], [
                'groups' => ['language'],
            ]);
        }

        $errorMessages = (string) $form->getErrors(true);

        return $this->json($errorMessages, 400);
    }

    /**
     * @IsGranted("ROLE_USER")
     * @Route("/{id}", name="delete", methods={"DELETE"})
     */
    public function delete(Language $language, EntityManagerInterface $manager)
    {
        $manager->remove($language);
        $manager->flush();

        return $this->json(null, 204);
    }
}
