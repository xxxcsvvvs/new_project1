package com.example.demo.controller;

import com.example.demo.service.RedisService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/redis")
public class RedisTestController {

    @Autowired
    private RedisTemplate<String, String> redisTemplate;

    @PostMapping("/save")
    public String saveData(@RequestParam("key") String key, @RequestParam("value") String value) {
        redisTemplate.opsForValue().set(key, value);
        return "✅ 저장 성공";
    }

    @GetMapping("/get")
    public String getData(@RequestParam("key") String key) {
        String value = redisTemplate.opsForValue().get(key);
        return value != null ? value : "값이 없습니다.";
    }

    @DeleteMapping("/delete")
    public String deleteData(@RequestParam("key") String key) {
        Boolean deleted = redisTemplate.delete(key);
        return Boolean.TRUE.equals(deleted) ? "🗑️ 삭제 성공" : "삭제 실패";
    }
}
