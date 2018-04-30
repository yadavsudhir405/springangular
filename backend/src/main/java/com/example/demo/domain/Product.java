package com.example.demo.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;

/**
 * Created by sudhiry on 4/30/18.
 */
@Entity
@Table( name = "products" )
@JsonIgnoreProperties(ignoreUnknown = true )
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private int productId;
    private  String productName;
    private String productCode;
    private String releaseDate;
    private int price;
    private String description;
    private double starRating;
    private String imageUrl;

    public Product() {
    }

    public Product(int productId, String productName, String productCode, String releaseDate, int price, String description, double starRating, String imageUrl) {
        this.productId = productId;
        this.productName = productName;
        this.productCode = productCode;
        this.releaseDate = releaseDate;
        this.price = price;
        this.description = description;
        this.starRating = starRating;
        this.imageUrl = imageUrl;
    }

    public int getProductId() {
        return productId;
    }

    public String getProductName() {
        return productName;
    }

    public Long getId() {
        return id;
    }

    public String getProductCode() {
        return productCode;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public int getPrice() {
        return price;
    }

    public String getDescription() {
        return description;
    }

    public double getStarRating() {
        return starRating;
    }

    public String getImageUrl() {
        return imageUrl;
    }
}
