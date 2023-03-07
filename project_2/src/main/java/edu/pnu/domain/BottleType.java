package edu.pnu.domain;

public class BottleType {
	private int No;
	private String name;

	public BottleType() {
		// TODO Auto-generated constructor stub
	}

	public BottleType(int no, String name) {
		super();
		No = no;
		this.name = name;
	}

	@Override
	public String toString() {
		return "Bottle_Type [No=" + No + ", name=" + name + "]";
	}

	public int getNo() {
		return No;
	}

	public void setNo(int no) {
		No = no;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
