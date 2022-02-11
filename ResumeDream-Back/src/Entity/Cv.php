<?php

namespace App\Entity;

use App\Repository\CvRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=CvRepository::class)
 */
class Cv
{
    /**
     * 
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="datetime_immutable")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime_immutable", nullable=true)
     */
    private $updatedAt;

   

    /**
     * @ORM\ManyToOne(targetEntity=Template::class, inversedBy="cvs")
     */
    private $template;

    /**
     * @Groups({"work_experience"})
     * @ORM\ManyToMany(targetEntity=WorkExperience::class, inversedBy="cvs")
     */
    private $work_experience;

    /**
     * @ORM\ManyToMany(targetEntity=Language::class, inversedBy="cvs")
     */
    private $language;

    /**
     * @ORM\ManyToMany(targetEntity=Activity::class, inversedBy="cvs")
     */
    private $activity;

    /**
     * @ORM\ManyToMany(targetEntity=Education::class, inversedBy="cvs")
     */
    private $education;

    /**
     * @ORM\ManyToMany(targetEntity=Skill::class, inversedBy="cvs")
     */
    private $skill;

    /**
     * @ORM\ManyToOne(targetEntity=PersonalData::class, inversedBy="cvs")
     */
    private $personal_data;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="cv")
     */
    private $user;

    public function __construct()
    {
        $this->work_experience = new ArrayCollection();
        $this->language = new ArrayCollection();
        $this->activity = new ArrayCollection();
        $this->education = new ArrayCollection();
        $this->skill = new ArrayCollection();
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

   

    public function getTemplate(): ?Template
    {
        return $this->template;
    }

    public function setTemplate(?Template $template): self
    {
        $this->template = $template;

        return $this;
    }

    /**
     * @return Collection|WorkExperience[]
     */
    public function getWorkExperience(): Collection
    {
        return $this->work_experience;
    }

    public function addWorkExperience(WorkExperience $workExperience): self
    {
        if (!$this->work_experience->contains($workExperience)) {
            $this->work_experience[] = $workExperience;
        }

        return $this;
    }

    public function removeWorkExperience(WorkExperience $workExperience): self
    {
        $this->work_experience->removeElement($workExperience);

        return $this;
    }

    /**
     * @return Collection|Language[]
     */
    public function getLanguage(): Collection
    {
        return $this->language;
    }

    public function addLanguage(Language $language): self
    {
        if (!$this->language->contains($language)) {
            $this->language[] = $language;
        }

        return $this;
    }

    public function removeLanguage(Language $language): self
    {
        $this->language->removeElement($language);

        return $this;
    }

    /**
     * @return Collection|Activity[]
     */
    public function getActivity(): Collection
    {
        return $this->activity;
    }

    public function addActivity(Activity $activity): self
    {
        if (!$this->activity->contains($activity)) {
            $this->activity[] = $activity;
        }

        return $this;
    }

    public function removeActivity(Activity $activity): self
    {
        $this->activity->removeElement($activity);

        return $this;
    }

    /**
     * @return Collection|Education[]
     */
    public function getEducation(): Collection
    {
        return $this->education;
    }

    public function addEducation(Education $education): self
    {
        if (!$this->education->contains($education)) {
            $this->education[] = $education;
        }

        return $this;
    }

    public function removeEducation(Education $education): self
    {
        $this->education->removeElement($education);

        return $this;
    }

    /**
     * @return Collection|Skill[]
     */
    public function getSkill(): Collection
    {
        return $this->skill;
    }

    public function addSkill(Skill $skill): self
    {
        if (!$this->skill->contains($skill)) {
            $this->skill[] = $skill;
        }

        return $this;
    }

    public function removeSkill(Skill $skill): self
    {
        $this->skill->removeElement($skill);

        return $this;
    }

    public function getPersonalData(): ?PersonalData
    {
        return $this->personal_data;
    }

    public function setPersonalData(?PersonalData $personal_data): self
    {
        $this->personal_data = $personal_data;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }
}
