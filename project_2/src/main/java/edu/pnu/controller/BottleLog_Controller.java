package edu.pnu.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import edu.pnu.service.BottleLog_Service;

@RestController
@RequestMapping("/bottle/log")
public class BottleLog_Controller {
	private BottleLog_Service bottlelog_Service;

	public BottleLog_Controller() {
		// TODO Auto-generated constructor stub
	}

	@Autowired
	public BottleLog_Controller(BottleLog_Service bottlelog_Service) {
		super();
		this.bottlelog_Service = bottlelog_Service;
	}

	@PostMapping("/api/upload")
	public ResponseEntity<String> imageUpload(MultipartFile image) {
		// 기존 파일 명 그대로 가져오기
		String imageName = StringUtils.cleanPath(image.getOriginalFilename());

		try {
			// Path : 경로 지정 함수 -> 저장할 디렉토리와 파일명을 설정.
			Path path = Paths.get("C:/Users/user/Desktop/Bottle_Project-main/front_End/public/images/" + imageName);
			// 파일을 저장합니다.
			Files.copy(image.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
			// DB에 image저장경로 저장
			bottlelog_Service.imageUpload(imageName, path);
		} catch (IOException e) {
			e.printStackTrace();
		}

		// 저장된 이미지의 URL을 반환합니다.
		String imageUrl = "images/" + imageName;
		return ResponseEntity.ok().body(imageUrl);
	}

}
