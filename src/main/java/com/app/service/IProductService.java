package com.app.service;

import java.util.List;

import com.app.entities.Product;

public interface IProductService {
//		public abstract 
			List<Product> fetchAllProducts() ;
	
//		get a particular product 
			Product getProductById(int productId) ;
			
////      get table products from category			
//			List<Product> findByCategory();
			
//	      get BodyParts products from category	
			List<Product>findByCategoryBodyParts();
			
//	      get SafetyAccessories products from category	
			List<Product>findByCategorySafetyAccessories();
			
//        get Batteries products from category				
			List<Product>findByCategoryBatteries();
	
}
