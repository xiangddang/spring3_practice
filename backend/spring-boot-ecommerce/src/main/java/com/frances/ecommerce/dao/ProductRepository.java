package com.frances.ecommerce.dao;


import com.frances.ecommerce.entity.Product;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
