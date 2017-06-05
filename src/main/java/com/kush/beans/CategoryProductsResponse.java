package com.kush.beans;

import java.io.Serializable;
import java.util.List;

public class CategoryProductsResponse implements Serializable {

	private static final long serialVersionUID = 7192688312148624055L;
	
	private String productSubCat;
	private List<Product> productsInfo;

	public String getProductSubCat() {
		return productSubCat;
	}

	public void setProductSubCat(String productSubCat) {
		this.productSubCat = productSubCat;
	}

	public List<Product> getProductsInfo() {
		return productsInfo;
	}

	public void setProductsInfo(List<Product> productsInfo) {
		this.productsInfo = productsInfo;
	}

}
