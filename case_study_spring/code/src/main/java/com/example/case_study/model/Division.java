package com.example.case_study.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Set;

@Entity
public class Division {

    @Id
    private int divisionId;
    private String divisionName;

    @OneToMany(mappedBy = "division", cascade = CascadeType.ALL)
    private Set<Employee> division;

    public Division() {
    }


    public int getDivisionId() {
        return divisionId;
    }

    public void setDivisionId(int divisionId) {
        this.divisionId = divisionId;
    }

    public String getDivisionName() {
        return divisionName;
    }

    public void setDivisionName(String divisionName) {
        this.divisionName = divisionName;
    }

    public Set<Employee> getDivision() {
        return division;
    }

    public void setDivision(Set<Employee> division) {
        this.division = division;
    }
}
