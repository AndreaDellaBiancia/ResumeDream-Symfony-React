<?php

namespace App\Controller\Api;

use App\Entity\Skill;
use App\Form\SkillType;
use App\Repository\SkillRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * @Route("/api/v1/mon-espace/profil/skill", name="api_skill_")
 */

class SkillController extends AbstractController
{
     /**
     * @IsGranted("ROLE_USER")
     * @Route("", name="browse",  methods={"GET"})
     */
    public function browse(SkillRepository $skillRepository): Response
    {
        //This code can be used to block access according to the role
        //If the user is logged in with the ROLE_USER, he can see the page correctly
        $this->denyAccessUnlessGranted('ROLE_USER', null, 'Unable to access this page!');

        $userId  = $this->getUser()->getId();

        return $this->json($skillRepository->findAllByUserId($userId), 200, [], [
            'groups' => ['skill']
        ]);
    }

    /**
     * @IsGranted("ROLE_USER")
     * @Route("/{id}", name="read", methods={"GET"})
     */
    public function read(Skill $skill): Response
    {
        return $this->json($skill, 200, [], [
            'groups' => ['skill']
        ]);
    }

    /**
     * @IsGranted("ROLE_USER")
     * @Route("", name="add", methods={"POST"})
     */
    public function add(EntityManagerInterface $manager, Request $request)
    {
        
        $skill = new Skill();
        $form = $this->createForm(SkillType::class, $skill, ['csrf_protection' => false]);

        
        $json = $request->getContent();
        
        $jsonArray = json_decode($json, true);

        // On associe le tableau associatif au formulaiire
        $form->submit($jsonArray);

        if ($form->isValid()) {

            $skill = $skill->setUser($this->getUser());
            $manager->persist($skill);
            $manager->flush();

            // Une méthode de controleur doit toujours retourner un objet Response
            return $this->json($skill, 201, [], [
                'groups' => ['skill'],
            ]);
        }

        $errorMessages = (string) $form->getErrors(true);
       
        return $this->json($errorMessages, 400);
    }

     /**
     * @IsGranted("ROLE_USER")
     * @Route("/{id}", name="edit", methods={"PUT", "PATCH"})
     */
    public function edit(Skill $skill, EntityManagerInterface $manager, Request $request)
    {
        $form = $this->createForm(SkillType::class, $skill, ['csrf_protection' => false]);

        $json = $request->getContent();
        $jsonArray = json_decode($json, true);

        $form->submit($jsonArray);

        if ($form->isValid()) {

            $skill->setUpdatedAt(new \DateTimeImmutable());
            $manager->flush();

            return $this->json($skill, 200, [], [
                'groups' => ['skill'],
            ]);
        }

        $errorMessages = (string) $form->getErrors(true);

        return $this->json($errorMessages, 400);
    }

     /**
     * @IsGranted("ROLE_USER")
     * @Route("/{id}", name="delete", methods={"DELETE"})
     */
    public function delete(Skill $skill, EntityManagerInterface $manager)
    {
        $manager->remove($skill);
        $manager->flush();

        return $this->json(null, 204);
    }

}
