package com.example.demo.dto;

public class MemberDto {
    private String memberId;
    private String password;
    private String address;

    // 기본 생성자
    public MemberDto() {}

    // 전체 생성자
    public MemberDto(String memberId, String password, String address) {
        this.memberId = memberId;
        this.password = password;
        this.address = address;
    }

    // Getter & Setter
    public String getMemberId() { return memberId; }
    public void setMemberId(String memberId) { this.memberId = memberId; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getAddress() { return address; }
    public void setAddress(String address) { this.address = address; }
}