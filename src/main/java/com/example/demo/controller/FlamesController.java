package com.example.demo.controller;

import com.example.demo.service.FlamesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class FlamesController {

    @Autowired
    private FlamesService flamesService;

    @GetMapping("/")
    public String home() {
        return "index";
    }

    @PostMapping("/flames")
    public String flamesResult(@RequestParam String bn,
                               @RequestParam String gn,
                               Model model) {

        String result = flamesService.calculateFlames(bn, gn);
        model.addAttribute("result", result);

        String type = result.toLowerCase();
        model.addAttribute("type", type);

        return "index";
    }
}
