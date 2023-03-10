package edu.pnu.domain;

public class BottleLog {
	private String image_id; // imgae name
	private String user_id; // user_email
	private String ori_image_link; // 원본 이미지 저장폴더
	private String new_image_link; // 모델 적용후 이미지 저장폴더

	public BottleLog() {
		// TODO Auto-generated constructor stub
	}

	public BottleLog(String image_id, String user_id, String ori_image_link, String new_image_link) {
		super();
		this.image_id = image_id;
		this.user_id = user_id;
		this.ori_image_link = ori_image_link;
		this.new_image_link = new_image_link;
	}

	@Override
	public String toString() {
		return "BottleLog [image_id=" + image_id + ", user_id=" + user_id + ", ori_image_link=" + ori_image_link
				+ ", new_image_link=" + new_image_link + "]";
	}

	public String getImage_id() {
		return image_id;
	}

	public void setImage_id(String image_id) {
		this.image_id = image_id;
	}

	public String getUser_id() {
		return user_id;
	}

	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}

	public String getOri_image_link() {
		return ori_image_link;
	}

	public void setOri_image_link(String ori_image_link) {
		this.ori_image_link = ori_image_link;
	}

	public String getNew_image_link() {
		return new_image_link;
	}

	public void setNew_image_link(String new_image_link) {
		this.new_image_link = new_image_link;
	}

}
