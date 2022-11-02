package com.example.case_study.service.impl.facility;

import com.example.case_study.model.Facility;
import com.example.case_study.repository.facility.IFacilityRepository;
import com.example.case_study.service.ifacility.IFacilityService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacilityService implements IFacilityService {

    @Autowired
    private IFacilityRepository iFacilityRepository;


    @Override
    public List<Facility> findAll() {
        return iFacilityRepository.findAll();
    }

    @Override
    public Page<Facility> findByNameAll(String name, Pageable pageable) {
        return iFacilityRepository.searchByName(name,pageable);
    }

    @Override
    public void save(Facility facility) {
        iFacilityRepository.save(facility);
    }

    @Override
    public Facility findById(int id) {
        return iFacilityRepository.findById(id);
    }

    @Override
    public Facility update(Facility facility) {
        return iFacilityRepository.save(facility);
    }

    @Override
    public void remove(int id) {
        iFacilityRepository.deleteLogical(id);
    }
}
