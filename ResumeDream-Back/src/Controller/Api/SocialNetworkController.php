<?php

namespace App\Controller\Api;

use App\Entity\SocialNetwork;
use App\Form\SocialNetworkType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;

/**
 * @Route("/api/v1/mon-espace/profil/reseaux-sociaux", name="api_social_network_")
 */
class SocialNetworkController extends AbstractController
{
    
    /**
     * @IsGranted("ROLE_USER")
     * @Route("", name="browse",  methods={"GET"})
     */
    public function browse(): Response
    {
        return $this->json($this->getUser()->getSocialNetwork(), 200, [], [
            'groups' => ['social-network']
        ]);
    }

    /**
     * @IsGranted("ROLE_USER")
     * @Route("/{id}", name="read", methods={"GET"})
     */
    public function read(SocialNetwork $socialNetwork): Response
    {
        return $this->json($socialNetwork, 200, [], [
            'groups' => ['social-network']
        ]);
    }

    /**
     * @IsGranted("ROLE_USER")
     * @Route("", name="add", methods={"POST"})
     */
    public function add(EntityManagerInterface $manager, Request $request)
    {
        $socialNetwork = new SocialNetwork();
        $form = $this->createForm(SocialNetworkType::class, $socialNetwork, ['csrf_protection' => false]);

        $json = $request->getContent();

        $jsonArray = json_decode($json, true);

        $form->submit($jsonArray);

        if ($form->isValid()) {

            $education = $socialNetwork->setUser($this->getUser());
            $manager->persist($socialNetwork);
            $manager->flush();

            // Une méthode de controleur doit toujours retourner un objet Response
            return $this->json($socialNetwork, 201, [], [
                'groups' => ['social-network'],
            ]);
        }

        $errorMessages = (string) $form->getErrors(true);

        return $this->json($errorMessages, 400);
    }

    /**
     * @IsGranted("ROLE_USER")
     * @Route("/{id}", name="edit", methods={"PUT", "PATCH"})
     */
    public function edit(SocialNetwork $socialNetwork, EntityManagerInterface $manager, Request $request)
    {
        $form = $this->createForm(SocialNetworkType::class, $socialNetwork, ['csrf_protection' => false]);

        $json = $request->getContent();
        $jsonArray = json_decode($json, true);

        $form->submit($jsonArray);

        if ($form->isValid()) {

            $socialNetwork->setUpdatedAt(new \DateTimeImmutable());
            $manager->flush();

            return $this->json($socialNetwork, 200, [], [
                'groups' => ['social-network'],
            ]);
        }

        $errorMessages = (string) $form->getErrors(true);

        return $this->json($errorMessages, 400);
    }

    /**
     * @IsGranted("ROLE_USER")
     * @Route("/{id}", name="delete", methods={"DELETE"})
     */
    public function delete(SocialNetwork $socialNetwork, EntityManagerInterface $manager)
    {
        $manager->remove($socialNetwork);
        $manager->flush();

        return $this->json(null, 204);
    }
}
