package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entities.Product;
import com.app.service.IProductService;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
	@Autowired
	IProductService service ;
		
	@GetMapping
	public List<Product> getAllProduct(){
		return service.fetchAllProducts();
	}

	@GetMapping("details/{productId}")
	public Product detailsParticularProduct(@PathVariable int productId) {
		return service.getProductById(productId) ;
	}
	
	@GetMapping("/category/SafetyAccessories")
	public List<Product> getSafetyAccessoriesProduct(){
		return service.findByCategorySafetyAccessories();
	}
	
	@GetMapping("/category/BodyParts")
	public List<Product> getBodyPartsProduct(){
		return service.findByCategoryBodyParts();
	}
	
	@GetMapping("/category/Batteries")
	public List<Product> getBatteriesProduct(){
		return service.findByCategoryBatteries();
	}
		
}
