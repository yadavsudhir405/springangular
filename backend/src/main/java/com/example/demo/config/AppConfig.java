package com.example.demo.config;

import com.example.demo.domain.Product;
import com.example.demo.service.ProductService;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

/**
 * Created by sudhiry on 4/30/18.
 */
@Configuration
public class AppConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer(){
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**")
                        .allowedOrigins("http://localhost:4200")
                        .allowedMethods("GET", "POST", "PUT", "DELETE")
                        .allowedHeaders("*");
            }
        };
    }

    @Bean
    CommandLineRunner commandLineRunner(ProductService productService) {
        return new CommandLineRunner() {
            @Override
            public void run(String... strings) throws Exception {
                List<Product> productList = getProductsFromFile();
                productList.stream().forEach(product -> {
                    productService.save(product);
                });
            }
        };
    }

    private List<Product> getProductsFromFile() {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            InputStream inputStream = AppConfig.class.getClassLoader().getResourceAsStream("products.json");

            return objectMapper.readValue(inputStream, objectMapper.getTypeFactory().constructCollectionType(List.class, Product.class));
        } catch (IOException e) {
            e.printStackTrace();
            System.out.println("Error While reading json file");
        }
        return Collections.emptyList();
    }
}
