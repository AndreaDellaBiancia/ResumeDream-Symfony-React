<?php

namespace App\Service;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\String\Slugger\SluggerInterface;

class ImageUploader extends AbstractController
{
    private $slugger;

    public function __construct(SluggerInterface $slugger)
    {
        $this->slugger = $slugger;
    }


    public function uploadPicture($fileImage, $path): string
    {
        $originalFilename = pathinfo($fileImage->getClientOriginalName(), PATHINFO_FILENAME);
        // this is needed to safely include the file name as part of the URL
        $safeFilename = $this->slugger->slug($originalFilename);
        $newFilename = $safeFilename.'-'.uniqid().'.'.$fileImage->guessExtension();
        // Move the file to the directory where brochures are stored
        try {
            $fileImage->move(
                $this->getParameter($path),
                $newFilename
            );
        } catch (FileException $e) {
            echo "L\'image n\'a pas pu être enregistrée";
        }

        return $newFilename;
    }
}