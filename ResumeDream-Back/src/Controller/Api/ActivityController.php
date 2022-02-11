<?php

namespace App\Controller\Api;


use App\Entity\Activity;
use App\Form\ActivityType;
use App\Repository\ActivityRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;


/**
 * @Route("/api/v1/mon-espace/profil/activite", name="api_activity_")
 */
class ActivityController extends AbstractController
{
    /**
    * @IsGranted("ROLE_USER")
    * @Route("", name="browse",  methods={"GET"})
    */
    public function browse(ActivityRepository $activityRepository): Response
    {
        //This code can be used to block access according to the role
        //If the user is logged in with the ROLE_USER, he can see the page correctly
        $this->denyAccessUnlessGranted('ROLE_USER', null, 'Unable to access this page!');

        $userId = $this->getUser()->getId();

        return $this->json($activityRepository->findAllByUserId($userId), 200, [], [
            'groups' => ['activity']
        ]);
    }

    /**
     * @IsGranted("ROLE_USER")
     * @Route("/{id}", name="read", methods={"GET"})
     */
    public function read(Activity $Activity): Response
    {
        return $this->json($Activity, 200, [], [
            'groups' => ['activity']
        ]);
    }

    /**
     * @IsGranted("ROLE_USER")
     * @Route("", name="add", methods={"POST"})
     */
    public function add(EntityManagerInterface $manager, Request $request)
    {
        $activity = new Activity();
        $form = $this->createForm(ActivityType::class, $activity, ['csrf_protection' => false]);

        
        $json = $request->getContent();
        
        $jsonArray = json_decode($json, true);

        // On associe le tableau associatif au formulaiire
        $form->submit($jsonArray);

        if ($form->isValid()) {
            $activity = $activity->setUser($this->getUser());
            $manager->persist($activity);
            $manager->flush();

            // Une méthode de controleur doit toujours retourner un objet Response
            return $this->json($activity, 201, [], [
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
    public function edit(Activity $activity, EntityManagerInterface $manager, Request $request)
    {
        $form = $this->createForm(ActivityType::class, $activity, ['csrf_protection' => false]);

        $json = $request->getContent();
        $jsonArray = json_decode($json, true);

        $form->submit($jsonArray);

        if ($form->isValid()) {
            
            $activity->setUpdatedAt(new \DateTimeImmutable());
            $manager->flush();

            return $this->json($activity, 200, [], [
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
    public function delete(Activity $activity, EntityManagerInterface $manager)
    {
        $manager->remove($activity);
        $manager->flush();

        return $this->json(null, 204);
    }

}