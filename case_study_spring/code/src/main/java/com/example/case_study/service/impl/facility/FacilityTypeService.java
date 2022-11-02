package com.example.case_study.service.impl.facility;


import com.example.case_study.model.FacilityType;
import com.example.case_study.repository.facility.IFacilityTypeRepository;
import com.example.case_study.service.ifacility.IFacilityTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FacilityTypeService implements IFacilityTypeService {

    @Autowired
    private IFacilityTypeRepository iFacilityTypeRepository;

    @Override
    public List<FacilityType> findAll() {
        return iFacilityTypeRepository.findAll();
    }
}
