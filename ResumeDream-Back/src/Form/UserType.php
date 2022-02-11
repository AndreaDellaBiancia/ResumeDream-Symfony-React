<?php

namespace App\Form;

use App\Entity\User;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class UserType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nickname', null, [
                'constraints' => [new NotBlank()],
            ])
            ->add('email', EmailType::class, [
                'constraints' => [
                    // We make sure that we have received an email
                    new Email(),
                    new NotBlank(),
                ],
            ])

            ->add('password', RepeatedType::class, [
                'type' => PasswordType::class,
                'first_options'  => ['label' => 'Mot de passe'],
                'second_options' => ['label' => 'Confirmez le mot de passe'],
                'invalid_message' => 'Les deux mots de passe doivent être identiques',
                'required' => false, // We allow of not to modify the password each time
                'mapped' => false,
                'constraints' => [
                    new Length([
                                    'min' => 6,
                                    'minMessage' => 'Le mot de passe doit contenir au moins 6 caractères.'
                                ]),
                            ],
                'help' => 'Veuillez entrer un mot de passe avec minimum 6 caractères',
            ])
            
             // We add an event listener that acts just before filling the $form fields in the controller
             ->addEventListener(FormEvents::PRE_SET_DATA, function(FormEvent $event) {
                
                //$event contains details of the event
                $user = $event->getData();
                $form = $event->getForm();

                // In case $user already exists, the field is not required
                // For the creation of a new User, we want to make this field required.
               
                // If the User's id is empty, we have to create a new User
                if ($user->getId() === null) {
                    // We remove the password field
                    $form->remove('password');
                    // We reset the password field with other options
                    $form->add('password', RepeatedType::class, [
                        'type' => PasswordType::class,
                        'first_options'  => ['label' => 'Mot de passe'],
                        'second_options' => ['label' => 'Confirmez le mot de passe'],
                        'invalid_message' => 'Les deux mots de passe doivent être identiques',
                        'required' => true, // We want to require a password to be entered when creating a User
                        'mapped' => true,
                        'constraints' => [
                            new NotBlank(), 
                        ]
                        ]);
                }
            })

            ->add('roles', ChoiceType::class, [
                'multiple' => false,
                'choices' => [
                    'Administrateur' => 'ROLE_ADMIN',
                    'Utilisateur' => 'ROLE_USER',
                ],
                'expanded' => true, // Checkbox types
            ])
            ;

            $builder->get('roles')->addModelTransformer(new CallbackTransformer(
            // The function that takes the data in the entity and transforms it into the type of the form
            function ($tagsAsArray) {
                // transform the array to a string
                return $tagsAsArray[0];
            },
            function ($tagsAsString) {
                // transform the string back to an array
                return [$tagsAsString];
            }
        ));

    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
