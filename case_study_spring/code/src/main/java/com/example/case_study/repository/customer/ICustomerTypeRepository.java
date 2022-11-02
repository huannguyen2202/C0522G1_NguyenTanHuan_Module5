package com.example.case_study.repository.customer;

import com.example.case_study.model.CustomerType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ICustomerTypeRepository extends JpaRepository<CustomerType,Integer> {
}
