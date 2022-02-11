<?php

namespace App\Form;

use App\Entity\WorkExperience;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\NotNull;

class WorkExperienceType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('company_name', TextType::class, [
                'constraints' => [new NotBlank()],
            ])
            // ->add('city', TextType::class)
            ->add('role', TextType::class, [
                'constraints' => [new NotBlank()],
            ])
            ->add('city', TextType::class)
            ->add('start_date', DateTimeType::class, [
                // prevents rendering it as type="date", to avoid HTML5 date pickers
                'required' => true,
                'html5' => false,
                'input' => 'datetime_immutable',
                'widget' => 'single_text',
                'format' => 'yyyy-MM-dd',
            ])
            ->add('end_date', DateTimeType::class, [
                // prevents rendering it as type="date", to avoid HTML5 date pickers
                'html5' => false,
                'input' => 'datetime_immutable',
                'widget' => 'single_text',
                'format' => 'yyyy-MM-dd',
            ])
            ->add('content', TextType::class)

            
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => WorkExperience::class,
        ]);
    }
}
