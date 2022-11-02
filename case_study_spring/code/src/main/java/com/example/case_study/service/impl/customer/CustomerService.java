package com.example.case_study.service.impl.customer;

import com.example.case_study.model.Customer;
import com.example.case_study.repository.customer.ICustomerRepository;
import com.example.case_study.service.icustomer.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerService implements ICustomerService {

    @Autowired
    private ICustomerRepository iCustomerRepository;

    @Override
    public Page<Customer> findAll(Pageable  pageable) {
        return iCustomerRepository.findAll(pageable);
    }

    @Override
    public Page<Customer> findSearch( String name,Pageable pageable) {
        return iCustomerRepository.apiSearch(name,pageable);
    }

    @Override
    public Page<Customer> findByName(String name,String phone,String address, Pageable pageable) {
        return iCustomerRepository.searchByName(name,phone,address, pageable);
    }

    @Override
    public Optional<Customer> findById(int id) {
        return iCustomerRepository.findById(id);
    }

    @Override
    public void save(Customer customer) {
        iCustomerRepository.save(customer);
    }

    @Override
    public void update(Customer customer) {
        iCustomerRepository.save(customer);
    }

    @Override
    public void remove(int id) {
        iCustomerRepository.deleteById(id);
    }

}
