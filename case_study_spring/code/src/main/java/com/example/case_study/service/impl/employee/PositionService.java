package com.example.case_study.service.impl.employee;

import com.example.case_study.model.Position;
import com.example.case_study.repository.employee.IPositionRepository;
import com.example.case_study.service.iemployee.IPositionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PositionService implements IPositionService {
    @Autowired
    private IPositionRepository iPositionRepository;

    @Override
    public List<Position> findAll() {
        return iPositionRepository.findAll();
    }
}
