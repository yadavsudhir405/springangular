package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by sudhiry on 5/1/18.
 */
@Controller
public class ViewController {

     @RequestMapping("/frontend/**")
     public String routeToSPA(){
         return "forward:/index.html";
     }
}
