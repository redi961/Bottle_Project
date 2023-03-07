package edu.pnu.dao;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import edu.pnu.domain.BottleComplex;

@Repository
public class BottleComplex_Mysql_Dao {
	private JdbcTemplate jdbctemplate;

	public BottleComplex_Mysql_Dao() {
		// TODO Auto-generated constructor stub
	}

	@Autowired
	public BottleComplex_Mysql_Dao(JdbcTemplate jdbctemplate) {
		super();
		this.jdbctemplate = jdbctemplate;
	}

	public void writeload(String imageName, List<?> list) {
		Date time_date = new Date();
		String image_id = imageName;
		List<?> drinks = new ArrayList<>();
		List<BottleComplex> Beers = new ArrayList<>();
		drinks = list;

		int type = 100;
		for (Object drink : drinks) {
			String[] tokens = ((String) drink).replace("[", "").replace("]", "").split(", ");
			for (String token : tokens) {
				String[] pair = token.split(": ");
				String name = pair[0];
				int count = Integer.parseInt(pair[1]);
				System.out.println(name + ", " + type + ", " + count);
				Beers.add(new BottleComplex(imageName, type, count));
				String sqlStr = "insert into bottle_complex(image_id, No, load_date, count)"
						+ "values(?, ?, ?, ?)";
				jdbctemplate.update(sqlStr, image_id, type, time_date, count);
				type += 100;
			}
		}

	}

	public List<BottleComplex> jsonupload() {
		String sql = "select * from bottle_complex";
		
		return null;
	}
}