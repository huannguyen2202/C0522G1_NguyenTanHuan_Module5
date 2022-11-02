package com.example.case_study.repository.facility;

import com.example.case_study.model.Facility;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface IFacilityRepository extends JpaRepository<Facility, Integer> {

    Facility findById(int id);

    //
//    @Query(value = "select * from facility where is_delete = 0 ", nativeQuery = true)
//    Page<Facility> findAll(Pageable pageable);
    @Query(value = "select * " +
            "from facility " +
            "where name like %:keyword1% " +
            "and is_delete=0", nativeQuery = true)
    Page<Facility> searchByName(@Param("keyword1") String name, Pageable pageable);

    @Modifying
    @Query(value = "update facility set is_delete = 1 where id = :idDelete", nativeQuery = true)
    void deleteLogical(@Param("idDelete") int id);
}
