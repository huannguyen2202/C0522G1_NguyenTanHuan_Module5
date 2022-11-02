package com.example.case_study.service.impl.employee;

import com.example.case_study.model.EducationDegree;
import com.example.case_study.repository.employee.IEducationDegreeRepository;
import com.example.case_study.service.iemployee.IEducationDegreeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EducationDegreeService implements IEducationDegreeService {

    @Autowired
    private IEducationDegreeRepository iEducationDegreeRepository;

    @Override
    public List<EducationDegree> findAll() {
        return iEducationDegreeRepository.findAll();
    }
}
