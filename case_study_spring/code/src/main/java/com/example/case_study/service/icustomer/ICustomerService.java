package com.example.case_study.service.icustomer;

import com.example.case_study.model.Customer;
import jdk.nashorn.internal.runtime.options.Option;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;


public interface ICustomerService {

    Page<Customer> findAll(Pageable pageable);

    Page<Customer> findSearch(String name,Pageable pageable);

    Page<Customer> findByName(String name,String phone,String address, Pageable pageable);

   Optional<Customer> findById(int id);

    void save(Customer customer);

    void update(Customer customer);

    void remove(int id);
}
