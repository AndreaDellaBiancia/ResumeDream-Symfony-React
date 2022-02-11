<?php

namespace App\DataFixtures;

use Faker;
use App\Entity\Activity;
use App\Entity\Education;
use App\Entity\Language;
use App\Entity\PersonalData;
use App\Entity\Role;
use App\Entity\Skill;
use App\Entity\SocialNetwork;
use App\Entity\Template;
use App\Entity\User;
use App\Entity\WorkExperience;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;


class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $faker = Faker\Factory::create('fr_FR');


        for ($i = 0; $i < 10; $i++) {
           
            $activity = new Activity();
            $activity->setTitle($maxNbChars = 10);
            $activity->setStartDate((new \DateTimeImmutable()));
            $activity->setContent($faker->text($maxNbChars = 200));
            $activity->setCreatedAt((new \DateTimeImmutable()));

            $education = new Education();
            $education->setCertificate($faker->text($maxNbChars = 10));
            $education->setSchoolName($faker->text($maxNbChars = 10));
            $education->setStartDate((new \DateTimeImmutable()));
            $education->setContent($faker->text($maxNbChars = 200));
            $education->setCreatedAt((new \DateTimeImmutable()));

            $language = new Language();
            $language->setName($faker->text($maxNbChars = 10));
            $language->setLevel($faker->text($maxNbChars = 10));
            $language->setCreatedAt((new \DateTimeImmutable()));

            $PersonalData = new PersonalData();
            $PersonalData->setFirstName($faker->firstName);
            $PersonalData->setLastName($faker->lastName);
            $PersonalData->setCity($faker->city);
            $PersonalData->setAddress($faker->address);
            $PersonalData->setBirthDate((new \DateTimeImmutable()));
            $PersonalData->setEmail($faker->email);
            $PersonalData->setPhoneNb('0789654233');
            $PersonalData->setPicture($faker->image());
            $PersonalData->setLinkedin($faker->text($maxNbChars = 10));
            $PersonalData->setContent($faker->text($maxNbChars = 200));
            $PersonalData->setCreatedAt((new \DateTimeImmutable()));

            $Skill = new Skill();
            $Skill->setTitle($faker->text($maxNbChars = 10));
            $Skill->setContent($faker->text($maxNbChars = 200));
            $Skill->setCreatedAt((new \DateTimeImmutable()));

            $SocialNetwork = new SocialNetwork();
            $SocialNetwork->setName($faker->text($maxNbChars = 10));
            $SocialNetwork->setLink($faker->text($maxNbChars = 10));
            $SocialNetwork->setCreatedAt((new \DateTimeImmutable()));

            $WorkExperience = new WorkExperience();
            $WorkExperience->setCompanyName($faker->text($maxNbChars = 10));
            $WorkExperience->setCity($faker->city);
            $WorkExperience->setRole($faker->text($maxNbChars = 10));
            $WorkExperience->setStartDate((new \DateTimeImmutable()));
            $WorkExperience->setContent($faker->text($maxNbChars = 200));
            $WorkExperience->setCreatedAt((new \DateTimeImmutable()));

            $role = new Role();
            $role->setName($faker->name);
            $role->setRoleString('ROLE_USER');

            $template = new Template();
            $template->setName($faker->name());
            $template->setStyleUrl($faker->text($maxNbChars = 10));
            $template->setCreatedAt((new \DateTimeImmutable()));

            $user = new User();
            $user->setEmail($faker->email);
            $user->setPassword($faker->password);
            $user->setUsername($faker->name);
            $user->setCreatedAt((new \DateTimeImmutable()));

            $manager->persist($activity);
            $manager->persist($education);
            $manager->persist($language);
            $manager->persist($PersonalData);
            $manager->persist($Skill);
            $manager->persist($SocialNetwork);
            $manager->persist($WorkExperience);
            $manager->persist($role);
            $manager->persist($template);
            $manager->persist($user);
            
        }
        $PersonalData = new PersonalData();
            $PersonalData->setFirstName($faker->name);
            $PersonalData->setLastName($faker->name);
            $PersonalData->setCity($faker->city);
            $PersonalData->setAddress($faker->address);
            $PersonalData->setBirthDate((new \DateTimeImmutable()));
            $PersonalData->setEmail($faker->email);
            $PersonalData->setPhoneNb('0789654233');
            //$PersonalData->setPicture($faker->image());
            $PersonalData->setLinkedin($faker->text($maxNbChars = 10));
            $PersonalData->setContent($faker->text($maxNbChars = 200));
            $PersonalData->setCreatedAt((new \DateTimeImmutable()));

            $manager->persist($PersonalData);

        $manager->flush();
    }
}
