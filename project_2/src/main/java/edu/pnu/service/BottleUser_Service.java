package edu.pnu.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import edu.pnu.dao.BottleUser_Mysql_Dao;
import edu.pnu.domain.BottleUser;

@Service
public class BottleUser_Service {
	private BottleUser_Mysql_Dao bottleuser_Dao;
	
	public BottleUser_Service() {
		// TODO Auto-generated constructor stub
	}

	@Autowired
	public BottleUser_Service(BottleUser_Mysql_Dao bottleuser_Dao) {
		super();
		this.bottleuser_Dao = bottleuser_Dao;
	}
	
	// 중복검사
	public int idCheck(String user_id) {
		int cnt = bottleuser_Dao.idCheck(user_id);
		return cnt;
	}
	
	// 회원가입
	public BottleUser signup(BottleUser user) {
		BottleUser us = bottleuser_Dao.signup(user);
		return us;
	}
	
	//로그인중 아이디 검사
	public boolean loginIdcheck (String user_id) {
		boolean flag = bottleuser_Dao.loginIdChecker(user_id);
		return flag;
	}
	
	// 로그인
	public BottleUser login(String user_id, String user_pass) {
		BottleUser us = bottleuser_Dao.login(user_id, user_pass);
		return us;
	}
	
	// 닉네임 표기
	public String nameDisplay(String user_id) {
		String name = bottleuser_Dao.nameDisplay(user_id);
		return name;
	}
	
	// 회원탈퇴
	public BottleUser withdrawal(String user_id, String user_pass) {
		BottleUser us = bottleuser_Dao.withdrawal(user_id, user_pass);
		return us;
	}

}