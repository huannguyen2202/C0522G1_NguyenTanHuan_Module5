package com.example.case_study.repository.customer;

import com.example.case_study.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface ICustomerRepository extends JpaRepository<Customer, Integer> {


    @Modifying
    @Query(value = "update customer set is_delete= 1 where id = :keywordId", nativeQuery = true)
    void deleteById(@Param("keywordId") int id);

    @Query(value = "select * " +
            "from customer " +
            "where customer_name like %:keywordName% " +
            "and phone like %:keywordPhone% " +
            "and address like %:keywordAddress% " +
            "and is_delete=0", nativeQuery = true)
    Page<Customer> searchByName(@Param("keywordName") String name,
                                @Param("keywordPhone") String phone,
                                @Param("keywordAddress") String address, Pageable pageable);

    @Query(value = "select * from customer where customer_name like %:search% and is_delete = 0", nativeQuery = true)
    Page<Customer> apiSearch(@Param("search") String search, Pageable pageable);
}


