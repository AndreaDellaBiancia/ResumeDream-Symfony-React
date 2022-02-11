<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;
/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 */
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    /**
     * @Groups({"user_read", "work_experience", "education", "language", "skill", "activity", "social-network"})
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups({"user_read"})
     * @ORM\Column(type="string", length=255)
     */
    private $nickname;

    /**
     * @Groups({"user_read"})
     * @ORM\Column(type="string", length=180, unique=true)
     */
    private $email;

    /**
     * @Groups({"user_read"})
     * @ORM\Column(type="json")
     */
    private $roles = [];

    /**
     * @Groups({"user_read"})
     * @var string The hashed password
     * @ORM\Column(type="string")
     */
    private $password;

   
    /**
     * @Groups({"user_read"})
     * @ORM\Column(type="datetime_immutable")
     */
    private $createdAt;

    /**
     * @Groups({"user_read"})
     * @ORM\Column(type="datetime_immutable", nullable=true)
     */
    private $updatedAt;

    /**
     * @ORM\OneToOne(targetEntity=PersonalData::class, mappedBy="user", cascade={"persist", "remove"})
     */
    private $personalData;

    /**
     * @ORM\OneToMany(targetEntity=Skill::class, mappedBy="user", orphanRemoval=true)
     */
    private $skill;

    /**
     * @ORM\OneToMany(targetEntity=Activity::class, mappedBy="user", orphanRemoval=true)
     */
    private $activity;

    /**
     * @ORM\OneToMany(targetEntity=Education::class, mappedBy="user", orphanRemoval=true)
     */
    private $education;

    /**
     * @ORM\OneToMany(targetEntity=Language::class, mappedBy="user", orphanRemoval=true)
     */
    private $language;

    /**
     * 
     * @ORM\OneToMany(targetEntity=WorkExperience::class, mappedBy="user", orphanRemoval=true)
     */
    private $work_experience;

    /**
     * @ORM\OneToMany(targetEntity=SocialNetwork::class, mappedBy="user", orphanRemoval=true)
     */
    private $social_network;

    /**
     * @ORM\OneToMany(targetEntity=Cv::class, mappedBy="user", orphanRemoval=true)
     */
    private $cv;

    

    public function __construct()
    {
        $this->skill = new ArrayCollection();
        $this->activity = new ArrayCollection();
        $this->education = new ArrayCollection();
        $this->language = new ArrayCollection();
        $this->work_experience = new ArrayCollection();
        $this->social_network = new ArrayCollection();
        $this->cv = new ArrayCollection();
        $this->createdAt = new \DateTimeImmutable();
        $this->roles = ["ROLE_USER"];
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    /**
     * @deprecated since Symfony 5.3, use getUserIdentifier instead
     */
    public function getUsername(): string
    {
        return (string) $this->email;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        // guarantee every user at least has ROLE_USER
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Returning a salt is only needed, if you are not using a modern
     * hashing algorithm (e.g. bcrypt or sodium) in your security.yaml.
     *
     * @see UserInterface
     */
    public function getSalt(): ?string
    {
        return null;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function setUsername(string $username): self
    {
        $this->username = $username;

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

    public function getPersonalData(): ?PersonalData
    {
        return $this->personalData;
    }

    public function setPersonalData(?PersonalData $personalData): self
    {
        // unset the owning side of the relation if necessary
        if ($personalData === null && $this->personalData !== null) {
            $this->personalData->setUser(null);
        }

        // set the owning side of the relation if necessary
        if ($personalData !== null && $personalData->getUser() !== $this) {
            $personalData->setUser($this);
        }

        $this->personalData = $personalData;

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
            $skill->setUser($this);
        }

        return $this;
    }

    public function removeSkill(Skill $skill): self
    {
        if ($this->skill->removeElement($skill)) {
            // set the owning side to null (unless already changed)
            if ($skill->getUser() === $this) {
                $skill->setUser(null);
            }
        }

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
            $activity->setUser($this);
        }

        return $this;
    }

    public function removeActivity(Activity $activity): self
    {
        if ($this->activity->removeElement($activity)) {
            // set the owning side to null (unless already changed)
            if ($activity->getUser() === $this) {
                $activity->setUser(null);
            }
        }

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
            $education->setUser($this);
        }

        return $this;
    }

    public function removeEducation(Education $education): self
    {
        if ($this->education->removeElement($education)) {
            // set the owning side to null (unless already changed)
            if ($education->getUser() === $this) {
                $education->setUser(null);
            }
        }

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
            $language->setUser($this);
        }

        return $this;
    }

    public function removeLanguage(Language $language): self
    {
        if ($this->language->removeElement($language)) {
            // set the owning side to null (unless already changed)
            if ($language->getUser() === $this) {
                $language->setUser(null);
            }
        }

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
            $workExperience->setUser($this);
        }

        return $this;
    }

    public function removeWorkExperience(WorkExperience $workExperience): self
    {
        if ($this->work_experience->removeElement($workExperience)) {
            // set the owning side to null (unless already changed)
            if ($workExperience->getUser() === $this) {
                $workExperience->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|SocialNetwork[]
     */
    public function getSocialNetwork(): Collection
    {
        return $this->social_network;
    }

    public function addSocialNetwork(SocialNetwork $socialNetwork): self
    {
        if (!$this->social_network->contains($socialNetwork)) {
            $this->social_network[] = $socialNetwork;
            $socialNetwork->setUser($this);
        }

        return $this;
    }

    public function removeSocialNetwork(SocialNetwork $socialNetwork): self
    {
        if ($this->social_network->removeElement($socialNetwork)) {
            // set the owning side to null (unless already changed)
            if ($socialNetwork->getUser() === $this) {
                $socialNetwork->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Cv[]
     */
    public function getCv(): Collection
    {
        return $this->cv;
    }

    public function addCv(Cv $cv): self
    {
        if (!$this->cv->contains($cv)) {
            $this->cv[] = $cv;
            $cv->setUser($this);
        }

        return $this;
    }

    public function removeCv(Cv $cv): self
    {
        if ($this->cv->removeElement($cv)) {
            // set the owning side to null (unless already changed)
            if ($cv->getUser() === $this) {
                $cv->setUser(null);
            }
        }

        return $this;
    }

    public function getNickname(): ?string
    {
        return $this->nickname;
    }

    public function setNickname(string $nickname): self
    {
        $this->nickname = $nickname;

        return $this;
    }
}
