package com.example.demo.resources;

import com.example.demo.domain.Product;
import com.example.demo.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by sudhiry on 4/30/18.
 */
@RestController
@RequestMapping("/iproducts")
public class ProductResource {

    private final ProductService productService;

    public ProductResource(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return this.productService.getAllProducts();
    }

    @GetMapping("{id}")
    public Product getProductById(@PathVariable int id){
        return this.productService.findProductByProductId(id);
    }

    @PostMapping
    public void save(Product product) {
        this.productService.save(product);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable int id){
        System.out.println("Deleting Product");
         this.productService.deleteProduct(id);
    }
}
