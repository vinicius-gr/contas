package com.desafio.spring.util;

public class ContaException extends Exception {
	
	private static final long serialVersionUID = 1L;
	private String errorMessage;
 
	public String getErrorMessage() {
		return errorMessage;
	}
	
	public ContaException(String errorMessage) {
		super(errorMessage);
		this.errorMessage = errorMessage;
	}
	
	public ContaException() {
		super();
	}

}
