package com.example.demo.controller;

import com.example.demo.service.RedisService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/redis")
public class RedisTestController {

    private final RedisService redisService;

    public RedisTestController(RedisService redisService) {
        this.redisService = redisService;
    }

    // 저장
    @PostMapping("/save")
    public String save(@RequestParam String key, @RequestParam String value) {
        redisService.save(key, value);
        return "✅ 저장 완료: " + key + " = " + value;
    }

    // 조회
    @GetMapping("/get")
    public Object get(@RequestParam String key) {
        Object value = redisService.get(key);
        return value != null ? value : "❌ 데이터 없음";
    }

    // 삭제
    @DeleteMapping("/delete")
    public String delete(@RequestParam String key) {
        redisService.delete(key);
        return "🗑️ 삭제 완료: " + key;
    }
}
