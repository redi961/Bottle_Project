package edu.pnu.domain;

public class BottleType {
	private Long No;
	private String soju;
	private String beer;
	private String whisky;
	private String wine;
	
	public BottleType() {
		// TODO Auto-generated constructor stub
	}

	public BottleType(Long no, String soju, String beer, String whisky, String wine) {
		super();
		No = no;
		this.soju = soju;
		this.beer = beer;
		this.whisky = whisky;
		this.wine = wine;
	}

	@Override
	public String toString() {
		return "BottleType [No=" + No + ", soju=" + soju + ", beer=" + beer + ", whisky=" + whisky + ", wine=" + wine
				+ "]";
	}

	public Long getNo() {
		return No;
	}

	public void setNo(Long no) {
		No = no;
	}

	public String getSoju() {
		return soju;
	}

	public void setSoju(String soju) {
		this.soju = soju;
	}

	public String getBeer() {
		return beer;
	}

	public void setBeer(String beer) {
		this.beer = beer;
	}

	public String getWhisky() {
		return whisky;
	}

	public void setWhisky(String whisky) {
		this.whisky = whisky;
	}

	public String getWine() {
		return wine;
	}

	public void setWine(String wine) {
		this.wine = wine;
	}
	
}
