package com.example.case_study.service.impl.employee;

import com.example.case_study.model.Division;
import com.example.case_study.repository.employee.IDivisionRepository;
import com.example.case_study.service.iemployee.IDivisionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DivisionService implements IDivisionService {

    @Autowired
    private IDivisionRepository iDivisionRepository;

    @Override
    public List<Division> findAll() {
        return iDivisionRepository.findAll();
    }
}
