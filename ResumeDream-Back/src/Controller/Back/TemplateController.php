<?php

namespace App\Controller\Back;

use App\Entity\Template;
use App\Form\TemplateType;
use App\Repository\TemplateRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * @Route("/admin/template", name="template_")
 */
class TemplateController extends AbstractController
{
    /**
     * @IsGranted("ROLE_ADMIN")
     * @Route("", name="browse")
     */
    public function browse(TemplateRepository $templateRepository): Response
    {
        return $this->render('back/template/browse.html.twig', [
            'templates' => $templateRepository->findAll(),
        ]);
    }

    /**
     * @IsGranted("ROLE_ADMIN")
     * @Route("/add", name="add")
     */
    public function add(Request $request, EntityManagerInterface $entityManager): Response
    {
        $template = new Template();
        $form = $this->createForm(TemplateType::class, $template);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager->persist($template);
            $entityManager->flush();

            return $this->redirectToRoute('template_browse', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('back/template/add.html.twig', [
            'template' => $template,
            'form' => $form,
        ]);
    }

    /**
     * @IsGranted("ROLE_ADMIN")
     * @Route("/{id}", name="read")
     */
    public function read(Template $template): Response
    {
        return $this->render('back/template/read.html.twig', [
            'template' => $template,
        ]);
    }

    /**
     * @IsGranted("ROLE_ADMIN")
     * @Route("/{id}/edit", name="edit")
     */
    public function edit(Request $request, Template $template, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(TemplateType::class, $template);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $template->setUpdatedAt(new \DateTimeImmutable());
            $entityManager->flush();

            return $this->redirectToRoute('template_browse', [], Response::HTTP_SEE_OTHER);
        }

        return $this->renderForm('back/template/edit.html.twig', [
            'template' => $template,
            'form' => $form,
        ]);
    }

    /**
     * @IsGranted("ROLE_ADMIN")
     * @Route("/delete/{id}", name="delete")
     */
    public function delete(Template $template, EntityManagerInterface $entityManager): Response
    {
        $entityManager->remove($template);
        $entityManager->flush();

        return $this->redirectToRoute('template_browse', [], Response::HTTP_SEE_OTHER);
    }
}
