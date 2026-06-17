package com.example.studentapi;

import org.springframework.web.bind.annotation.*;

@RestController
public class StudentController {

    // 1. Welcome Message
    @GetMapping("/")
    public String welcome() {
        return "Welcome to Student Management REST API";
    }

    // 2. GET Request
    @GetMapping("/student")
    public Student getStudent() {
        return new Student(
                101,
                "Rahul Sharma",
                "Computer Science");
    }

    // 3. POST Request
    @PostMapping("/student")
    public String addStudent(@RequestBody Student student) {

        return "Student Added Successfully\n"
                + "ID: " + student.getId()
                + ", Name: " + student.getName()
                + ", Course: " + student.getCourse();
    }
}