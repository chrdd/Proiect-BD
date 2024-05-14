package com.example.demo.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/student")
@CrossOrigin(origins = "http://localhost:3000/")
public class StudentController {
    private final StudentService studentService;
    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Student>> getStudents(){
        List <Student> students = studentService.getStudents();
        return new ResponseEntity<>(students, HttpStatus.OK);
    }
    @PostMapping("/register")
    public void registerNewStudent(@RequestBody Student student) {
        studentService.addNewStudent(student);
    }
    


    @PutMapping(path="/update/{studentId}")
    public ResponseEntity<Student> updateStudent(@RequestBody Student student){
        Student updateStudent = studentService.updateStudent(student);
        return new ResponseEntity<>(updateStudent, HttpStatus.OK);
    }

    @GetMapping("/find/{studentId}")
    public ResponseEntity<Student> findStudentById(@PathVariable("studentId") Long studentId){
        Student student = studentService.findStudentById(studentId);
        return new ResponseEntity<>(student, HttpStatus.OK);
    }return new ResponseEntity<>(HttpStatus.OK);

    @DeleteMapping(path="/delete/{studentId}")
    public ResponseEntity<?> deleteStudent(@PathVariable("studentId") Long Id){
        studentService.deleteStudent(Id);

    }
}
