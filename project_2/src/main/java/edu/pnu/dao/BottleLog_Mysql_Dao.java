package edu.pnu.dao;

import java.nio.file.Path;

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

	public void imageUpload(String image_id, Path path) {
		String ori_image_link = path.toString();
		String sqlStr_1 = "insert into bottle_log(image_id, user_id, ori_image_link, new_image_link)"
				+ " values(?, ?, ?, ?)";
		jdbcTemplate.update(sqlStr_1, image_id, null, ori_image_link, null);
	}
	
}
