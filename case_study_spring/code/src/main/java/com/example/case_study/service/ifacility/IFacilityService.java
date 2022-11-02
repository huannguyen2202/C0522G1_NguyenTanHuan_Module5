package com.example.case_study.service.ifacility;

import com.example.case_study.model.CustomerType;
import com.example.case_study.model.Facility;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IFacilityService {

    List<Facility> findAll();

    Page<Facility> findByNameAll(String name,Pageable pageable);

    void save(Facility facility);

    Facility findById(int id);

    Facility update(Facility facility);

    void remove(int id);


}
