<?php

namespace App\Controller\Api;

use App\Entity\WorkExperience;
use App\Form\WorkExperienceType;
use App\Repository\WorkExperienceRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * @Route("/api/v1/mon-espace/profil/work-experience", name="api_work_experience_")
 */
class WorkExperienceController extends AbstractController
{
    /**
     * @IsGranted("ROLE_USER")
     * @Route("", name="browse",  methods={"GET"})
     */
    public function browse(WorkExperienceRepository $workExperienceRepository): Response
    {
        $userId  = $this->getUser()->getId();
        
        return $this->json($workExperienceRepository->findAllByUserId($userId), 200, [], [
            'groups' => ['work_experience']
        ]);
    }

    /**
     * @IsGranted("ROLE_USER")
     * @Route("/{id}", name="read", methods={"GET"})
     */
    public function read(WorkExperience $workExperience): Response
    {  
        return $this->json($workExperience, 200, [], [
            'groups' => ['work_experience']
        ]);
    }

    /**
     * @IsGranted("ROLE_USER")
     * @Route("", name="add", methods={"POST"})
     */
    public function add(EntityManagerInterface $manager, Request $request)
    {
        $workExperience = new WorkExperience();
        $form = $this->createForm(WorkExperienceType::class, $workExperience, ['csrf_protection' => false]);

        
        $json = $request->getContent();
        
        $jsonArray = json_decode($json, true);

        // On associe le tableau associatif au formulaiire
        $form->submit($jsonArray);

        if ($form->isValid()) {

            $workExperience = $workExperience->setUser($this->getUser());
            $manager->persist($workExperience);
            $manager->flush();

            // Une méthode de controleur doit toujours retourner un objet Response
            return $this->json($workExperience, 201, [], [
                'groups' => ['work_experience'],
            ]);
        }

        $errorMessages = (string) $form->getErrors(true);
       
        return $this->json($errorMessages, 400);
    }

    /**
     * @IsGranted("ROLE_USER")
     * @Route("/{id}", name="edit", methods={"PUT", "PATCH"})
     */
    public function edit(WorkExperience $workExperience, EntityManagerInterface $manager, Request $request)
    {
        $form = $this->createForm(WorkExperienceType::class, $workExperience, ['csrf_protection' => false]);

        $json = $request->getContent();
        $jsonArray = json_decode($json, true);

        $form->submit($jsonArray);

        if ($form->isValid()) {
            
            $workExperience->setUpdatedAt(new \DateTimeImmutable());
            $manager->flush();

            return $this->json($workExperience, 200, [], [
                'groups' => ['work_experience'],
            ]);
        }

        $errorMessages = (string) $form->getErrors(true);

        return $this->json($errorMessages, 400);
    }

    /**
     * @IsGranted("ROLE_USER")
     * @Route("/{id}", name="delete", methods={"DELETE"})
     */
    public function delete(WorkExperience $workExperience, EntityManagerInterface $manager)
    {
        $manager->remove($workExperience);
        $manager->flush();

        return $this->json(null, 204);
    }
}
