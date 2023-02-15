package com.schoolmanagementsystem.controler;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.schoolmanagementsystem.controler.document_management.message.ResponseMessage;
import com.schoolmanagementsystem.model.Subject;
import com.schoolmanagementsystem.service.DocumentService;
import com.schoolmanagementsystem.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(
        path = {"api/v1/subject"})
public class SubjectController {
   private final SubjectService subjectService;
    private final DocumentService documentService;
    ObjectMapper objectmapper = new ObjectMapper();

   @Autowired
    public SubjectController(SubjectService subjectService, DocumentService documentService) {
        this.subjectService = subjectService;
       this.documentService = documentService;
   }
    @GetMapping(
            path = {"getSubjects"}
    )
    public List<Subject> getSubjects() {
        return this.subjectService.getSubjects();
        }


    @RequestMapping(
            path = {"addSubject"},
            method = {RequestMethod.POST},
            consumes = {"multipart/form-data"}
    )
    public ResponseEntity<Object> addSubject(@RequestParam(required = true,value = "jsondata") String jsondata, @RequestParam(required = true,value = "file") MultipartFile file) throws IOException {
        Subject subject = (Subject) this.objectmapper.readValue(jsondata, Subject.class);
        this.subjectService.addNewSubject(subject);
        String ID = subject.getId().toString();
        String message = "";

        try {
            this.documentService.storeSubjectImage(file, ID);
            message = "Record Saved with Agreement file successfully : " + file.getOriginalFilename();
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
        } catch (Exception var8) {
            message = "Could not upload the file: " + file.getOriginalFilename() + "!";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }
    }

}
