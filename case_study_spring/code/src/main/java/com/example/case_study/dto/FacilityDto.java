package com.example.case_study.dto;


import com.example.case_study.model.FacilityType;
import com.example.case_study.model.RentType;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

public class FacilityDto {
    private int id;

    @NotBlank(message = "Trường này không được để trống !!!")
    @Pattern(regexp = "^(([\\p{Lu}][\\p{Ll}]{1,8})(\\s([\\p{Lu}]|[\\p{Lu}][\\p{Ll}]{1,10})){0,5})| *$",
            message = "Tên phải đúng định dạng mỗi chữ cái đầu phải viết in hoa!!!")
    private String name;

    @NotBlank(message = "Trường này không được để trống !!!")
    private String area;

    @NotBlank(message = "Trường này không được để trống !!!")
    private String cost;

    @NotBlank(message = "Trường này không được để trống !!!")
    private String maxPeople;

    @NotNull(message = "Trường này không được để trống")
    private RentType rentType;

   @NotNull(message = "Trường này không được để trống")
    private FacilityType facilityType;

    @NotBlank(message = "Trường này không được để trống !!!")
    private String standardRoom;

    @NotBlank(message = "Trường này không được để trống !!!")
    private String descriptionOtherConvenience;

    @NotBlank(message = "Trường này không được để trống !!!")
    private String poolArea;

    @NotBlank(message = "Trường này không được để trống !!!")
    private String numberOfFloors;

    @NotBlank(message = "Trường này không được để trống !!!")
    private String facilityFree;


    public FacilityDto() {
    }

    public void setFacilityFree(String facilityFree) {
        this.facilityFree = facilityFree;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getCost() {
        return cost;
    }

    public void setCost(String cost) {
        this.cost = cost;
    }

    public String getMaxPeople() {
        return maxPeople;
    }

    public void setMaxPeople(String maxPeople) {
        this.maxPeople = maxPeople;
    }

    public RentType getRentType() {
        return rentType;
    }

    public void setRentType(RentType rentType) {
        this.rentType = rentType;
    }

    public FacilityType getFacilityType() {
        return facilityType;
    }

    public void setFacilityType(FacilityType facilityType) {
        this.facilityType = facilityType;
    }

    public String getStandardRoom() {
        return standardRoom;
    }

    public void setStandardRoom(String standardRoom) {
        this.standardRoom = standardRoom;
    }

    public String getDescriptionOtherConvenience() {
        return descriptionOtherConvenience;
    }

    public void setDescriptionOtherConvenience(String descriptionOtherConvenience) {
        this.descriptionOtherConvenience = descriptionOtherConvenience;
    }

    public String getPoolArea() {
        return poolArea;
    }

    public void setPoolArea(String poolArea) {
        this.poolArea = poolArea;
    }

    public String getNumberOfFloors() {
        return numberOfFloors;
    }

    public void setNumberOfFloors(String numberOfFloors) {
        this.numberOfFloors = numberOfFloors;
    }

    public String getFacilityFree() {
        return facilityFree;
    }

}
