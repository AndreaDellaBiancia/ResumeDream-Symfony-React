<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20211203153004 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE activity (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, start_date DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', end_date DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', content LONGTEXT DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_AC74095AA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE cv (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, template_id INT DEFAULT NULL, personal_data_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_B66FFE92A76ED395 (user_id), INDEX IDX_B66FFE925DA0FB8 (template_id), INDEX IDX_B66FFE92B4D2A817 (personal_data_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE cv_work_experience (cv_id INT NOT NULL, work_experience_id INT NOT NULL, INDEX IDX_2645636DCFE419E2 (cv_id), INDEX IDX_2645636D6347713 (work_experience_id), PRIMARY KEY(cv_id, work_experience_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE cv_language (cv_id INT NOT NULL, language_id INT NOT NULL, INDEX IDX_45F49471CFE419E2 (cv_id), INDEX IDX_45F4947182F1BAF4 (language_id), PRIMARY KEY(cv_id, language_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE cv_activity (cv_id INT NOT NULL, activity_id INT NOT NULL, INDEX IDX_3D5BEC9ECFE419E2 (cv_id), INDEX IDX_3D5BEC9E81C06096 (activity_id), PRIMARY KEY(cv_id, activity_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE cv_education (cv_id INT NOT NULL, education_id INT NOT NULL, INDEX IDX_4792779ECFE419E2 (cv_id), INDEX IDX_4792779E2CA1BD71 (education_id), PRIMARY KEY(cv_id, education_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE cv_skill (cv_id INT NOT NULL, skill_id INT NOT NULL, INDEX IDX_D1393468CFE419E2 (cv_id), INDEX IDX_D13934685585C142 (skill_id), PRIMARY KEY(cv_id, skill_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE education (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, certificate VARCHAR(255) NOT NULL, school_name VARCHAR(255) DEFAULT NULL, start_date DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', end_date DATE DEFAULT NULL COMMENT \'(DC2Type:date_immutable)\', content LONGTEXT DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_DB0A5ED2A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE language (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, level VARCHAR(255) DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_D4DB71B5A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE personal_data (id INT AUTO_INCREMENT NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, address VARCHAR(255) DEFAULT NULL, birth_date DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', email VARCHAR(255) NOT NULL, phone_nb SMALLINT DEFAULT NULL, picture VARCHAR(255) DEFAULT NULL, linkedin VARCHAR(255) DEFAULT NULL, content LONGTEXT DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE role (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, role_string VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE skill (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, content LONGTEXT DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_5E3DE477A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE social_network (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, name VARCHAR(255) NOT NULL, link VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_EFFF5221A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE template (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, style_url VARCHAR(255) NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE work_experience (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, company_name VARCHAR(255) NOT NULL, city VARCHAR(255) DEFAULT NULL, role VARCHAR(255) NOT NULL, start_date DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', end_date DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', content LONGTEXT DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', updated_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_1EF36CD0A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE activity ADD CONSTRAINT FK_AC74095AA76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE cv ADD CONSTRAINT FK_B66FFE92A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE cv ADD CONSTRAINT FK_B66FFE925DA0FB8 FOREIGN KEY (template_id) REFERENCES template (id)');
        $this->addSql('ALTER TABLE cv ADD CONSTRAINT FK_B66FFE92B4D2A817 FOREIGN KEY (personal_data_id) REFERENCES personal_data (id)');
        $this->addSql('ALTER TABLE cv_work_experience ADD CONSTRAINT FK_2645636DCFE419E2 FOREIGN KEY (cv_id) REFERENCES cv (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE cv_work_experience ADD CONSTRAINT FK_2645636D6347713 FOREIGN KEY (work_experience_id) REFERENCES work_experience (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE cv_language ADD CONSTRAINT FK_45F49471CFE419E2 FOREIGN KEY (cv_id) REFERENCES cv (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE cv_language ADD CONSTRAINT FK_45F4947182F1BAF4 FOREIGN KEY (language_id) REFERENCES language (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE cv_activity ADD CONSTRAINT FK_3D5BEC9ECFE419E2 FOREIGN KEY (cv_id) REFERENCES cv (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE cv_activity ADD CONSTRAINT FK_3D5BEC9E81C06096 FOREIGN KEY (activity_id) REFERENCES activity (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE cv_education ADD CONSTRAINT FK_4792779ECFE419E2 FOREIGN KEY (cv_id) REFERENCES cv (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE cv_education ADD CONSTRAINT FK_4792779E2CA1BD71 FOREIGN KEY (education_id) REFERENCES education (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE cv_skill ADD CONSTRAINT FK_D1393468CFE419E2 FOREIGN KEY (cv_id) REFERENCES cv (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE cv_skill ADD CONSTRAINT FK_D13934685585C142 FOREIGN KEY (skill_id) REFERENCES skill (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE education ADD CONSTRAINT FK_DB0A5ED2A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE language ADD CONSTRAINT FK_D4DB71B5A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE skill ADD CONSTRAINT FK_5E3DE477A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE social_network ADD CONSTRAINT FK_EFFF5221A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE work_experience ADD CONSTRAINT FK_1EF36CD0A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user ADD role_id INT DEFAULT NULL, ADD personal_data_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649D60322AC FOREIGN KEY (role_id) REFERENCES role (id)');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649B4D2A817 FOREIGN KEY (personal_data_id) REFERENCES personal_data (id)');
        $this->addSql('CREATE INDEX IDX_8D93D649D60322AC ON user (role_id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649B4D2A817 ON user (personal_data_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE cv_activity DROP FOREIGN KEY FK_3D5BEC9E81C06096');
        $this->addSql('ALTER TABLE cv_work_experience DROP FOREIGN KEY FK_2645636DCFE419E2');
        $this->addSql('ALTER TABLE cv_language DROP FOREIGN KEY FK_45F49471CFE419E2');
        $this->addSql('ALTER TABLE cv_activity DROP FOREIGN KEY FK_3D5BEC9ECFE419E2');
        $this->addSql('ALTER TABLE cv_education DROP FOREIGN KEY FK_4792779ECFE419E2');
        $this->addSql('ALTER TABLE cv_skill DROP FOREIGN KEY FK_D1393468CFE419E2');
        $this->addSql('ALTER TABLE cv_education DROP FOREIGN KEY FK_4792779E2CA1BD71');
        $this->addSql('ALTER TABLE cv_language DROP FOREIGN KEY FK_45F4947182F1BAF4');
        $this->addSql('ALTER TABLE cv DROP FOREIGN KEY FK_B66FFE92B4D2A817');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649B4D2A817');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649D60322AC');
        $this->addSql('ALTER TABLE cv_skill DROP FOREIGN KEY FK_D13934685585C142');
        $this->addSql('ALTER TABLE cv DROP FOREIGN KEY FK_B66FFE925DA0FB8');
        $this->addSql('ALTER TABLE cv_work_experience DROP FOREIGN KEY FK_2645636D6347713');
        $this->addSql('DROP TABLE activity');
        $this->addSql('DROP TABLE cv');
        $this->addSql('DROP TABLE cv_work_experience');
        $this->addSql('DROP TABLE cv_language');
        $this->addSql('DROP TABLE cv_activity');
        $this->addSql('DROP TABLE cv_education');
        $this->addSql('DROP TABLE cv_skill');
        $this->addSql('DROP TABLE education');
        $this->addSql('DROP TABLE language');
        $this->addSql('DROP TABLE personal_data');
        $this->addSql('DROP TABLE role');
        $this->addSql('DROP TABLE skill');
        $this->addSql('DROP TABLE social_network');
        $this->addSql('DROP TABLE template');
        $this->addSql('DROP TABLE work_experience');
        $this->addSql('DROP INDEX IDX_8D93D649D60322AC ON user');
        $this->addSql('DROP INDEX UNIQ_8D93D649B4D2A817 ON user');
        $this->addSql('ALTER TABLE user DROP role_id, DROP personal_data_id');
    }
}
