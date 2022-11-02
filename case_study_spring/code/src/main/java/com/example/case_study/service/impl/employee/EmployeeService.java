package com.example.case_study.service.impl.employee;

import com.example.case_study.model.Employee;
import com.example.case_study.repository.employee.IEmployeeRepository;
import com.example.case_study.service.iemployee.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService implements IEmployeeService {

    @Autowired
    private IEmployeeRepository iEmployeeRepository;

    @Override
    public List<Employee> findAll() {
        return iEmployeeRepository.findAll();
    }

    @Override
    public Page<Employee> findByName(String name, String phone, String idCard, Pageable pageable) {
        return iEmployeeRepository.searchByName(name, phone, idCard, pageable);
    }

    @Override
    public Employee findById(int id) {
        return iEmployeeRepository.findById(id);
    }

    @Override
    public void save(Employee employee) {
        iEmployeeRepository.save(employee);
    }

    @Override
    public void update(Employee employee) {
        iEmployeeRepository.save(employee);
    }

    @Override
    public void remove(int id) {
        iEmployeeRepository.deleteById(id);
    }
}
