package com.example.case_study.service.impl.facility;


import com.example.case_study.model.RentType;
import com.example.case_study.repository.facility.IRentTypeRepository;
import com.example.case_study.service.ifacility.IRentTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RentTypeService implements IRentTypeService {

    @Autowired
    private IRentTypeRepository iRentTypeRepository;

    @Override
    public List<RentType> findAll() {
        return iRentTypeRepository.findAll();
    }
}
