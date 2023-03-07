package edu.pnu.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.pnu.dao.BottleComplex_Mysql_Dao;
import edu.pnu.domain.BottleComplex;

@Service
public class BottleComplex_Service {
	private BottleComplex_Mysql_Dao bottlecomplex_Dao;

	public BottleComplex_Service() {
		// TODO Auto-generated constructor stub
	}

	@Autowired
	public BottleComplex_Service(BottleComplex_Mysql_Dao bottlecomplex_Dao) {
		super();
		this.bottlecomplex_Dao = bottlecomplex_Dao;
	}

	public void writeload(String imageName, List<?> list) {
		bottlecomplex_Dao.writeload(imageName, list);

	}

	public List<BottleComplex> jsonupload() {
		return bottlecomplex_Dao.jsonupload();
	}

}
