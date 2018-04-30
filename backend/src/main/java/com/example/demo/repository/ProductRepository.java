package com.example.demo.repository;

import com.example.demo.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

/**
 * Created by sudhiry on 4/30/18.
 */
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    Product findProductByProductId(int productId);

    void deleteAllByProductId(int productId);

}
