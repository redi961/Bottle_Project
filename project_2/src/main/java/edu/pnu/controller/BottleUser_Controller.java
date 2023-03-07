package edu.pnu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import edu.pnu.domain.BottleUser;
import edu.pnu.service.BottleUser_Service;

// Requestparam, Reponsebody 등은 굳이 사용할 필요x, 파라미터 명이 다를경우 사용하는 편이 낫다.
@RestController
@RequestMapping("/bottle/user")
public class BottleUser_Controller {
	private BottleUser_Service bottleuser_Service;
	
	public BottleUser_Controller() {
		// TODO Auto-generated constructor stub
	}

	@Autowired
	public BottleUser_Controller(BottleUser_Service bottleuser_Service) {
		super();
		this.bottleuser_Service = bottleuser_Service;
	}
	
	// 회원가입
	@PostMapping("/signup")
	public String signup(@RequestBody BottleUser user) {
		int count = 0;
		count = bottleuser_Service.idCheck(user.getUser_id());
		if (count > 0) {
			return "중복된 아이디가 존재합니다.";
		} else{
			BottleUser login = bottleuser_Service.signup(user);
			if(login.getUser_id() == null) {
				return "회원가입에 실패하였습니다.";
			} else return "회원가입에 성공하셨습니다.";
		}
	}
	
	// 로그인
	@PostMapping("/login")
	public String login(@RequestBody BottleUser user) {
		boolean flag = bottleuser_Service.loginIdcheck(user.getUser_id());
		if (flag == false) {
			return "ID_error";
		} else if (flag == true) {
			BottleUser log = bottleuser_Service.login(user.getUser_id(), user.getUser_pass());
			if(log == null) {
				return "Pass_error";
			} 
		}
		String name = bottleuser_Service.nameDisplay(user.getUser_id());
		return name;
	}
	
	// 탈퇴
	@DeleteMapping("/withdrawal")
	public String withdrawal(String user_id, String user_pass) {
		BottleUser del = bottleuser_Service.withdrawal(user_id, user_pass);
		if(del.getUser_id() == null) {
			return "탈퇴에 문제가 발생했습니다.";
		} else return "탈퇴에 성공하셨습니다.";
	}
}