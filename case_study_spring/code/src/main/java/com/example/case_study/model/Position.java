package com.example.case_study.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Set;

@Entity
public class Position {

    @Id
    private int positionId;
    private String positionName;

    @OneToMany(mappedBy = "position",cascade = CascadeType.ALL)
    private Set<Employee> employeePosition;

    public Position() {
    }


    public int getPositionId() {
        return positionId;
    }

    public void setPositionId(int positionId) {
        this.positionId = positionId;
    }

    public String getPositionName() {
        return positionName;
    }

    public void setPositionName(String positionName) {
        this.positionName = positionName;
    }

    public Set<Employee> getEmployeePosition() {
        return employeePosition;
    }

    public void setEmployeePosition(Set<Employee> employeePosition) {
        this.employeePosition = employeePosition;
    }
}
