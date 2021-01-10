package com.unisalad.Unisalad.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.unisalad.Unisalad.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{
	
	List<Product> findAllByOrderByNameAsc();
	
}
