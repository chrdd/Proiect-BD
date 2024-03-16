package com.example.demo.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    private final StudentRepository studentRepository;
    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getStudents(){
        return studentRepository.findAll();
    }

    public void addNewStudent(Student student) {
        Optional<Student> studentOptional = studentRepository.findStudentByEmail(student.getEmail());
        if(studentOptional.isPresent()){
            throw new IllegalStateException("email taken");
        }
        studentRepository.save(student);
        System.out.println(student);
    }

    public void deleteStudent(Long studentId) {
        studentRepository.findById(studentId);
        boolean exists=studentRepository.existsById(studentId);
        if(!exists){
            throw new IllegalStateException("student with id "+studentId+" does not exists");
        }
        studentRepository.deleteById(studentId);
    }
    public Student updateStudent(Student student){
        return studentRepository.save(student);
    }
    public Student findStudentById(Long Id){
        Student student = studentRepository.findById(Id).orElseThrow(()->new IllegalStateException("Studentul cu ID-ul "+Id+" nu"));
        return student;
    }
}
