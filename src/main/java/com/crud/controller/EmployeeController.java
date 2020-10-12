package com.crud.controller;

import com.crud.exception.ResourceNotFoundException;
import com.crud.model.Employee;
import com.crud.repository.EmployeeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/v1/employee")
public class EmployeeController {

    Logger logger = LoggerFactory.getLogger(EmployeeController.class);

    @Autowired
    private EmployeeRepository employeeRepository;


    @GetMapping("/get")
    public ResponseEntity<Employee> getEmployeeById(@RequestParam Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Can't Find Employee By ID: " + id));
        return ResponseEntity.ok(employee);
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

    @PostMapping("/add")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    @PutMapping("/update")
    public ResponseEntity<Employee> updateEmployee(@RequestParam Long id, @RequestBody Employee employeeDetails) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Can't Find Employee By ID: " + id));
        employee.setFirstName(employeeDetails.getFirstName());
        employee.setLastName(employeeDetails.getLastName());
        employee.setEmailId(employeeDetails.getEmailId());

        Employee updatedEmployee = employeeRepository.save(employee);
        return ResponseEntity.ok(updatedEmployee);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<Map<String, Boolean>> deleteEmployee(@RequestParam Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("Can't Find Employee By ID: " + id));
        employeeRepository.delete(employee);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }



}
