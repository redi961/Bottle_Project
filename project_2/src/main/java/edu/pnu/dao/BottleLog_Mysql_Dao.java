package edu.pnu.dao;

import java.nio.file.Path;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class BottleLog_Mysql_Dao {
	private JdbcTemplate jdbcTemplate;
	
	public BottleLog_Mysql_Dao() {
		// TODO Auto-generated constructor stub
	}

	@Autowired
	public BottleLog_Mysql_Dao(JdbcTemplate jdbcTemplate) {
		super();
		this.jdbcTemplate = jdbcTemplate;
	}

	public void imageUpload(String saveName, String oriName,  Path path, String user_name ,String new_image_link) {
		Date time_date = new Date();
		String ori_image_link = path.toString();
		String sqlStr_1 = "insert into bottle_log(image_id, user_id, original_image_link, new_image_link, upload_date)"
				+ " values(?, ?, ?, ?, ?)";
		jdbcTemplate.update(sqlStr_1, oriName, user_name, ori_image_link, new_image_link, time_date);
	}
	
}
