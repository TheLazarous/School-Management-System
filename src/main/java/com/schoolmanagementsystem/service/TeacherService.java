package com.schoolmanagementsystem.service;

import com.schoolmanagementsystem.model.Teacher;
import com.schoolmanagementsystem.repository.TeacherRepository;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class TeacherService {
    @Autowired
    TeacherRepository teacherRepository;

    public TeacherService(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    public List<Teacher> getTeachers() {
        return this.teacherRepository.findAll();
    }

    public void addNewTeacher(Teacher teacher) {
        this.teacherRepository.save(teacher);
    }
}
