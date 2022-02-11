<?php

namespace App\Repository;

use App\Entity\WorkExperience;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method WorkExperience|null find($id, $lockMode = null, $lockVersion = null)
 * @method WorkExperience|null findOneBy(array $criteria, array $orderBy = null)
 * @method WorkExperience[]    findAll()
 * @method WorkExperience[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class WorkExperienceRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, WorkExperience::class);
    }

    // /**
    //  * @return WorkExperience[] Returns an array of WorkExperience objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?WorkExperience
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    /**
     * @return WorkExperience[] Returns an array of WorkExperience objects
     */
    public function findAllByUserId($userId)
    {

        return $this->createQueryBuilder('work_experience')
            ->join('work_experience.user', 'user')
            ->addSelect('work_experience')
            ->andWhere('work_experience.user = :userId')
            ->setParameter('userId', $userId)
            ->getQuery()
            ->getResult();
    }
}
