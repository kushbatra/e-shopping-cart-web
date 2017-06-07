package com.kush.beans;

import java.io.Serializable;
import java.util.List;

public class CategoryResponse implements Serializable {

	private static final long serialVersionUID = 6987575166460714598L;
	
	private List<Category> category;
	private Integer code;
	private String codeDesc;

	public List<Category> getCategory() {
		return category;
	}

	public void setCategory(List<Category> category) {
		this.category = category;
	}

	public Integer getCode() {
		return code;
	}

	public void setCode(Integer code) {
		this.code = code;
	}

	public String getCodeDesc() {
		return codeDesc;
	}

	public void setCodeDesc(String codeDesc) {
		this.codeDesc = codeDesc;
	}
	
}