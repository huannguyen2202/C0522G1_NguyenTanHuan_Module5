package com.example.case_study.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class AttachFacility {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String nameAttach;
    private String cost;
    private String unit;
    private String status;

@OneToMany(mappedBy = "contract",cascade = CascadeType.ALL)
    private Set<ContractDetail> contractDetails;

    public AttachFacility() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNameAttach() {
        return nameAttach;
    }

    public void setNameAttach(String nameAttach) {
        this.nameAttach = nameAttach;
    }

    public String getCost() {
        return cost;
    }

    public void setCost(String cost) {
        this.cost = cost;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Set<ContractDetail> getContractDetails() {
        return contractDetails;
    }

    public void setContractDetails(Set<ContractDetail> contractDetails) {
        this.contractDetails = contractDetails;
    }
}
