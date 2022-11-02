package com.example.case_study.repository.employee;


import com.example.case_study.model.Employee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface IEmployeeRepository extends JpaRepository<Employee, Integer> {

    @Modifying
    @Query(value = "update employee set is_delete= 1 where id = :keywordId", nativeQuery = true)
    void deleteById(@Param("keywordId") int id);

    @Query(value = "select * " +
            "from employee " +
            "where employee_name like %:keywordName% " +
            "and phone like %:keywordPhone% " +
            "and id_card like %:keywordIdCard% " +
            "and is_delete=0", nativeQuery = true)
    Page<Employee> searchByName(@Param("keywordName") String name,
                                @Param("keywordPhone") String phone,
                                @Param("keywordIdCard") String idCard, Pageable pageable);

    Employee findById(int id);
}
