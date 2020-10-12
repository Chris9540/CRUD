package com.crud.controller;

import com.crud.model.Employee;
import com.crud.repository.EmployeeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


import java.util.List;

@RestController
@RequestMapping("api/v1/employee")
public class EmployeeController {

    Logger logger = LoggerFactory.getLogger(EmployeeController.class);

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/all")
    public List<Employee> getAll() {
        return employeeRepository.findAll();
    }

    @GetMapping("/paged-list")
    public List<Employee> getPagedList(@RequestParam int page, @RequestParam int size ) {
        logger.debug("page: " + page + " || size: " + size);
        Pageable pageable = PageRequest.of(page, size);
        return employeeRepository.findAll(pageable).toList();
    }

    @GetMapping("/count")
    public long getCount() {
        return employeeRepository.count();
    }



}
