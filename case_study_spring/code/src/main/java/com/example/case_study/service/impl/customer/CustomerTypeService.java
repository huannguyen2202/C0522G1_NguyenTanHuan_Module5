package com.example.case_study.service.impl.customer;

import com.example.case_study.model.CustomerType;
import com.example.case_study.repository.customer.ICustomerTypeRepository;
import com.example.case_study.service.icustomer.ICustomerTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerTypeService implements ICustomerTypeService {

    @Autowired
    private ICustomerTypeRepository iCustomerTypeRepository;

    @Override
    public List<CustomerType> findAll() {
        return iCustomerTypeRepository.findAll();
    }
}
