package com.kush.controller;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kush.api.service.ProductService;
import com.kush.beans.Category;
import com.kush.beans.CategoryResponse;
import com.kush.beans.Product;
import com.kush.beans.ProductResponse;
import com.kush.beans.ProductType;
import com.kush.beans.RequestData;
import com.kush.common.StatusCode;
import com.kush.beans.CategoryProductsResponse;

/**
 * Controller handles HTTP request related to Home Page of application
 * @author kush
 */
@RequestMapping("/product")
@RestController
public class ProductController {
	
	final static Logger logger = Logger.getLogger(ProductController.class);
	
	@Autowired
	private ProductService productService;
	
	@RequestMapping(value="/getCategories", method=RequestMethod.GET,
			produces = {MediaType.APPLICATION_JSON_VALUE})
	public CategoryResponse getCategoriesType() {
		CategoryResponse response = new CategoryResponse();
		List<Category> catType = null;
		try {
			catType = productService.getCategoryType();
			response.setCode(StatusCode.SUCCESS);
			response.setCodeDesc("Success");
		} catch(Exception e) {
			logger.error("productService Info is null");
			response.setCode(StatusCode.CATEGORY_INFO_ERROR);
			response.setCodeDesc("Categories Not found");
		}
		response.setCategory(catType);
		return response;
	}
	
	@RequestMapping(value="/getCategoryProductsInfo", method=RequestMethod.POST,
			produces = {MediaType.APPLICATION_JSON_VALUE},
			consumes = {MediaType.APPLICATION_JSON_VALUE})
	public CategoryProductsResponse getCategoryProductsInfo(@RequestBody RequestData requestData) {
		CategoryProductsResponse response = new CategoryProductsResponse();
		List<Product> productsInfo = productService.getCategoryProductsInfo(requestData.getProductId());
		response.setProductsInfo(productsInfo);
		response.setProductSubCat(requestData.getSubCat());
		return response;
	}
	
	@RequestMapping(value="/getProductInfo", method=RequestMethod.GET,
			produces = {MediaType.APPLICATION_JSON_VALUE})
	public ProductResponse getProductDesc(@RequestParam("productId") int pid) {
		ProductResponse response = new ProductResponse();
		ProductType productInfo = productService.getProductInfo(pid);
		response.setProductInfo(productInfo);
		return response;
	}
	
}
