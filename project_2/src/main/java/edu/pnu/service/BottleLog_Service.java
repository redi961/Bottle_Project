package edu.pnu.service;

import java.nio.file.Path;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.pnu.dao.BottleLog_Mysql_Dao;

@Service
public class BottleLog_Service {
	private BottleLog_Mysql_Dao bottlelog_Dao;

	public BottleLog_Service() {
		// TODO Auto-generated constructor stub
	}
	
	@Autowired
	public BottleLog_Service(BottleLog_Mysql_Dao bottlelog_Dao) {
		super();
		this.bottlelog_Dao = bottlelog_Dao;
	}

	public void imageUpload(String imageName, Path path) {
		bottlelog_Dao.imageUpload(imageName, path);
		
	}
	
}
