<?php
namespace App\Entity;
use App\Repository\TemplateRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
/**
 * @ORM\Entity(repositoryClass=TemplateRepository::class)
 */
class Template
{
    /**
     * @Groups({"landingPage"})
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;
    /**
     * @Groups({"landingPage"})
     * @ORM\Column(type="string", length=255)
     */
    private $name;
    /**
     * @Groups({"landingPage"})
     * @ORM\Column(type="string", length=255)
     */
    private $style_url;
    /**
     * @Groups({"landingPage"})
     * @ORM\Column(type="datetime_immutable")
     */
    private $createdAt;
    /**
     * @Groups({"landingPage"})
     * @ORM\Column(type="datetime_immutable", nullable=true)
     */
    private $updatedAt;
    /**
     * @Groups({"landingPage"})
     * @ORM\OneToMany(targetEntity=Cv::class, mappedBy="template", orphanRemoval=true)
     */
    private $cvs;
    public function __construct()
    {
        $this->cvs = new ArrayCollection();
        $this->createdAt = new \DateTimeImmutable();
    }
    public function getId(): ?int
    {
        return $this->id;
    }
    public function getName(): ?string
    {
        return $this->name;
    }
    public function setName(string $name): self
    {
        $this->name = $name;
        return $this;
    }
    public function getStyleUrl(): ?string
    {
        return $this->style_url;
    }
    public function setStyleUrl(string $style_url): self
    {
        $this->style_url = $style_url;
        return $this;
    }
    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }
    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;
        return $this;
    }
    public function getUpdatedAt(): ?\DateTimeImmutable
    {
        return $this->updatedAt;
    }
    public function setUpdatedAt(?\DateTimeImmutable $updatedAt): self
    {
        $this->updatedAt = $updatedAt;
        return $this;
    }
    /**
     * @return Collection|Cv[]
     */
    public function getCvs(): Collection
    {
        return $this->cvs;
    }
    public function addCv(Cv $cv): self
    {
        if (!$this->cvs->contains($cv)) {
            $this->cvs[] = $cv;
            $cv->setTemplate($this);
        }
        return $this;
    }
    public function removeCv(Cv $cv): self
    {
        if ($this->cvs->removeElement($cv)) {
            // set the owning side to null (unless already changed)
            if ($cv->getTemplate() === $this) {
                $cv->setTemplate(null);
            }
        }
        return $this;
    }
}