package com.example.case_study.dto;

import com.example.case_study.model.CustomerType;


import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;


public class CustomerDto {

    private int id;

    @NotBlank(message = "Trường này không được để trống !!!")
    @Pattern(regexp = "^(([\\p{Lu}][\\p{Ll}]{1,8})(\\s([\\p{Lu}]|[\\p{Lu}][\\p{Ll}]{1,10})){0,5})| *$",
            message = "Tên phải đúng định dạng mỗi chữ cái đầu phải viết in hoa!!!")
    private String customerName;

    @NotBlank(message = "Trường này không được để trống !!!")
    private String birthday;

//    @NotBlank(message = "Trường này không được để trống !!!")
    private int gender;

    @NotBlank(message = "Trường này không được để trống !!!")
    @Pattern(regexp = "^(\\d{10})| *$",message = "CMND phải đúng định dạng 10 số !!!")
    private String idCard;

    @NotBlank(message = "Trường này không được để trống !!!")
    @Pattern(regexp = "^(((\\(\\+84\\-\\))|0)(90|91)[0-9]{7})| *$",message = "Số điện thoại phải đúng định dạng 10 số!!!")
    private String phone;

    @Email(message = "Định dạng Email sai, hãy nhập đúng Email !!!")
    @NotBlank(message = "Trường này không được để trống !!!")
    private String email;

    @NotBlank(message = "Trường này không được để trống!!!")
    private String address;
    private CustomerType customerType;

    public CustomerDto() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public int getGender() {
        return gender;
    }

    public void setGender(int gender) {
        this.gender = gender;
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public CustomerType getCustomerType() {
        return customerType;
    }

    public void setCustomerType(CustomerType customerType) {
        this.customerType = customerType;
    }
}
