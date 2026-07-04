package com.example.slime;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class LoginController {

    @PostMapping("/login")
    public String login(@RequestParam String username, @RequestParam String password) {
        if ("user".equals(username) && "1234".equals(password)) {
            return "redirect:/slime.html";
        } else {
            return "redirect:/start.html";
        }
    }
}