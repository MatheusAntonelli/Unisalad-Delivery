package com.unisalad.Unisalad.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.unisalad.Unisalad.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{
	
	
}
