package com.kush.beans;

import java.io.Serializable;

public class RequestData implements Serializable {

	private static final long serialVersionUID = 3057721854257160284L;
	
	private String subCat;
	private int productId;
	
	public String getSubCat() {
		return subCat;
	}
	public void setSubCat(String subCat) {
		this.subCat = subCat;
	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}

}