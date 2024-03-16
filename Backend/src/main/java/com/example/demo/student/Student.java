package com.example.demo.student;

import jakarta.persistence.*;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.Period;

@Entity
@Table
public class Student implements Serializable {
    @Id
    @SequenceGenerator(
            name = "student_sequence",
            sequenceName = "student_sequence",
            allocationSize = 1)
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "student_sequence")
    @Column(nullable = false, updatable = false)
    private Long id;
    private String name;
    @Transient
    private Integer age;
    private String description;
    private LocalDate date;
    private String email;

    public Student() {
    }

    public Student(Long id, String name, String description, LocalDate date, String email) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.date = date;
        this.email = email;
    }

    public Student(String name, String description, LocalDate date, String email) {
        this.name = name;
        this.description = description;
        this.date = date;
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getAge() {
        return Period.between(this.date, LocalDate.now()).getYears();
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", age=" + age +
                ", description='" + description + '\'' +
                ", date=" + date +
                ", email='" + email + '\'' +
                '}';
    }
}
