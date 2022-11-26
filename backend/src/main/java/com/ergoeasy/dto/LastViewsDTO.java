package com.ergoeasy.dto;

import javax.validation.constraints.NotBlank;

public class LastViewsDTO {
	
	@NotBlank
	private String ghre;
	@NotBlank
	private String tipo;
	@NotBlank
	private String nomeAnalista;
	@NotBlank
	private String status;
	
	public String getGhre() {
		return ghre;
	}
	public void setGhre(String ghre) {
		this.ghre = ghre;
	}
	public String getTipo() {
		return tipo;
	}
	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	public String getNomeAnalista() {
		return nomeAnalista;
	}
	public void setNomeAnalista(String nomeAnalista) {
		this.nomeAnalista = nomeAnalista;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}

	
}
