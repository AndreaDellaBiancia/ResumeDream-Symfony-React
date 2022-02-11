<?php

namespace App\Form;

use App\Entity\PersonalData;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\NotBlank;

class PersonalDataType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('first_name', TextType::class, [
                'constraints' => [new NotBlank()],
            ])
            ->add('last_name', TextType::class, [
                'constraints' => [new NotBlank()],
            ])
            ->add('city', TextType::class, [
                'constraints' => [new NotBlank()],
            ])
            ->add('address', TextType::class)
            ->add('birth_date',  DateTimeType::class, [
                // prevents rendering it as type="date", to avoid HTML5 date pickers
                'html5' => false,
                'input' => 'datetime_immutable',
                'widget' => 'single_text',
                'format' => 'yyyy-MM-dd',
            ])
            ->add('email',  EmailType::class, [
                'constraints' => [
                    // We make sure that we have received an email
                    new Email(),
                    new NotBlank(),
                ],
            ])
            ->add('phone_nb', IntegerType::class )
            ->add('picture', FileType::class, [
                'mapped' => false,
                'required' => false,
            ])
            ->add('linkedin', TextType::class)
            ->add('content', TextType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => PersonalData::class,
        ]);
    }
}
