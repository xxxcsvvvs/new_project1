package com.example.demo.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.TestUser;
import com.example.demo.repository.TestUserRepository;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/testuser")
@RequiredArgsConstructor
public class TestUserController {

    private final TestUserRepository testUserRepository;
    
    

    @GetMapping
    public ResponseEntity<List<TestUser>> getAllUsers() {
        List<TestUser> users = testUserRepository.findAll();
        System.out.println("DB에서 조회된 유저 수: " + users.size());
        users.forEach(u -> System.out.println(u.getId() + " - " + u.getName()));
        return ResponseEntity.ok(users);
    }
}
