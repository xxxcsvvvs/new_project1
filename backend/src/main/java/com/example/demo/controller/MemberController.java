package com.example.demo.controller;

import com.example.demo.dto.MemberDto;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/member")
public class MemberController {

    @PostMapping("/register")
    public String registerMember(@RequestBody MemberDto member) {
        // 받은 데이터 로그로 출력 (테스트용)
        System.out.println("ID: " + member.getMemberId());
        System.out.println("PW: " + member.getPassword());
        System.out.println("주소: " + member.getAddress());

        return "회원 정보가 정상적으로 전달되었습니다.";
    }
}
