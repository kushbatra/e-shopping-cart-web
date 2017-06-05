package com.kush.beans;

import java.io.Serializable;

public class ProductResponse implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	private ProductType productInfo;

	public ProductType getProductInfo() {
		return productInfo;
	}

	public void setProductInfo(ProductType productInfo) {
		this.productInfo = productInfo;
	}
	
}
