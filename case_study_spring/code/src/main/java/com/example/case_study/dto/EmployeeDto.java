package com.example.case_study.dto;

import com.example.case_study.model.Division;
import com.example.case_study.model.EducationDegree;
import com.example.case_study.model.Position;

import javax.validation.constraints.*;


public class EmployeeDto {
    private int id;

    @NotBlank(message = "Trường này không được để trống !!!")
//    @Size(min=5,max = 100,message = "Trường Tên được giới hạn từ 5 - 100 kí tự")
    @Pattern(regexp = "^(([\\p{Lu}][\\p{Ll}]{1,8})(\\s([\\p{Lu}]|[\\p{Lu}][\\p{Ll}]{1,10})){0,5})| *$",
            message = "Tên phải đúng định dạng mỗi chữ cái đầu phải viết in hoa")
    private String employeeName;

    @NotBlank(message = "Trường này không được để trống !!!")
    private String birthday;


    @NotBlank(message = "Trường này không được để trống !!!")
    @Pattern(regexp = "^(\\d{10})| *$",message = "CMND phải đúng định dạng 10 số")
    private String idCard;

    @NotBlank(message = "Trường này không được để trống !!!")
    @Pattern(regexp = "^(((\\(\\+84\\-\\))|0)(90|91)[0-9]{7})| *$",message = "Số điện thoại phải đúng định dạng 10 số!!")
    private String phone;

    @Email(message = "Định dạng Email sai, hãy nhập đúng Email !!!")
    @NotBlank(message = "Trường này không được để trống !!!")
    private String email;

    @Min(value = 4500000,message = "Số lương tối thiểu là 4500000 ngàn")
    private double salary;

    private EducationDegree educationDegree;
    private Position position;
    private Division division;
    public EmployeeDto() {
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
