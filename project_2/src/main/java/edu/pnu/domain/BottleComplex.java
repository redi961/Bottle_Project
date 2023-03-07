package edu.pnu.domain;

public class BottleComplex {
	private String image_id;
	private int No;
	private int count;

	public BottleComplex() {
		// TODO Auto-generated constructor stub
	}

	public BottleComplex(String image_id, int no, int count) {
		super();
		this.image_id = image_id;
		No = no;
		this.count = count;
	}

	@Override
	public String toString() {
		return "BottleComplex [image_id=" + image_id + ", No=" + No + ", count=" + count + "]";
	}

	public String getImage_id() {
		return image_id;
	}

	public void setImage_id(String image_id) {
		this.image_id = image_id;
	}

	public int getNo() {
		return No;
	}

	public void setNo(int no) {
		No = no;
	}

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

}
