package com.example.case_study.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class EducationDegree {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int educationDegreeId;
    private String educationDegreeName;

    @OneToMany(mappedBy = "educationDegree",cascade = CascadeType.ALL)
    private Set<Employee> employeeEducation;

    public EducationDegree() {
    }


    public int getEducationDegreeId() {
        return educationDegreeId;
    }

    public void setEducationDegreeId(int educationDegreeId) {
        this.educationDegreeId = educationDegreeId;
    }

    public String getEducationDegreeName() {
        return educationDegreeName;
    }

    public void setEducationDegreeName(String educationDegreeName) {
        this.educationDegreeName = educationDegreeName;
    }

    public Set<Employee> getEmployeeEducation() {
        return employeeEducation;
    }

    public void setEmployeeEducation(Set<Employee> employeeEducation) {
        this.employeeEducation = employeeEducation;
    }
}
