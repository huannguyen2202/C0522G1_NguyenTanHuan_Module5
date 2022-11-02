package com.example.case_study.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String employeeName;
    private String birthday;
    private String idCard;
    private String phone;
    private String email;
    private double salary;
    private boolean isDelete;

    @ManyToOne
    @JoinColumn(name = "education_degree_id",referencedColumnName ="educationDegreeId")
    private EducationDegree educationDegree;

    @ManyToOne
    @JoinColumn(name = "position_id",referencedColumnName = "positionId")
    private Position position;

    @ManyToOne
    @JoinColumn(name="division_id",referencedColumnName = "divisionId")
    private Division division;

    @OneToMany(mappedBy = "employee",cascade = CascadeType.ALL)
    private Set<Contract> contractEmployee;

    public Employee() {
    }

    public Set<Contract> getContractEmployee() {
        return contractEmployee;
    }

    public void setContractEmployee(Set<Contract> contractEmployee) {
        this.contractEmployee = contractEmployee;
    }

    public boolean isDelete() {
        return isDelete;
    }

    public void setDelete(boolean delete) {
        isDelete = delete;
    }

    public Division getDivision() {
        return division;
    }

    public void setDivision(Division division) {
        this.division = division;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmployeeName() {
        return employeeName;
    }

    public void setEmployeeName(String employeeName) {
        this.employeeName = employeeName;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public String getIdCard() {
        return idCard;
    }

    public void setIdCard(String idCard) {
        this.idCard = idCard;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public EducationDegree getEducationDegree() {
        return educationDegree;
    }

    public void setEducationDegree(EducationDegree educationDegree) {
        this.educationDegree = educationDegree;
    }

    public Position getPosition() {
        return position;
    }

    public void setPosition(Position position) {
        this.position = position;
    }
}
