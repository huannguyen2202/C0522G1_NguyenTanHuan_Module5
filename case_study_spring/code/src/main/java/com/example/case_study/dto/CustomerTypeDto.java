package com.example.case_study.dto;

import com.example.case_study.model.Customer;


import java.util.Set;

public class CustomerTypeDto {

    private int customerTypeId;
    private String customerTypeName;
    private Set<Customer> customers;

    public CustomerTypeDto() {
    }

    public int getCustomerTypeId() {
        return customerTypeId;
    }

    public void setCustomerTypeId(int customerTypeId) {
        this.customerTypeId = customerTypeId;
    }

    public String getCustomerTypeName() {
        return customerTypeName;
    }

    public void setCustomerTypeName(String customerTypeName) {
        this.customerTypeName = customerTypeName;
    }

    public Set<Customer> getCustomers() {
        return customers;
    }

    public void setCustomers(Set<Customer> customers) {
        this.customers = customers;
    }
}
