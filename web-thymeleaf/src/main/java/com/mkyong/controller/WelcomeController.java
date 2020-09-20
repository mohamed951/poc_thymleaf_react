package com.mkyong.controller;

import com.mkyong.model.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Arrays;
import java.util.List;

@Controller
public class WelcomeController {

    // inject via application.properties
    @Value("${welcome.message}")
    private String message;

    private User user;

    @GetMapping("/")
    @CrossOrigin(origins = "http://localhost:3000")
    public String main(@ModelAttribute User user, Model model) {
        model.addAttribute("user", user);
        return "multipage"; //view
    }

    @GetMapping("/user")
    @CrossOrigin(origins = "http://localhost:3000")
    public String user(Model model) {
        model.addAttribute("user", user);
        return "userPage"; //view
    }

    @PostMapping("/users")
    @CrossOrigin(origins = "http://localhost:3000")
    public String postUser(@ModelAttribute User user) throws Exception {
        System.out.println(user);
        this.user = user;
        return "redirect:/user";
    }
}