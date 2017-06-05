package com.kush.beans;

import java.io.Serializable;
import java.util.List;

public class CategoryResponse implements Serializable {

	private static final long serialVersionUID = 6987575166460714598L;
	
	private List<Category> category;

	public List<Category> getCategory() {
		return category;
	}

	public void setCategory(List<Category> category) {
		this.category = category;
	}
	
}