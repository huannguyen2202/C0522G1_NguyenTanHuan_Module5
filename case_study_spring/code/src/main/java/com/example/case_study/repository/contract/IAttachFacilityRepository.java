package com.example.case_study.repository.contract;

import com.example.case_study.model.AttachFacility;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAttachFacilityRepository extends JpaRepository<AttachFacility,Integer> {

    AttachFacility findById(int id);
}
