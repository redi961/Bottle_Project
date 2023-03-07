package edu.pnu.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;

import edu.pnu.domain.BottleComplex;
import edu.pnu.domain.JsonReader;
import edu.pnu.service.BottleComplex_Service;
import edu.pnu.service.BottleLog_Service;

@RestController
@RequestMapping("/bottle/log")
public class BottleLog_Controller<T> {
	private BottleLog_Service bottlelog_Service;
	private BottleComplex_Service bottlecomplex_Service;

	public BottleLog_Controller() {
		// TODO Auto-generated constructor stub
	}

	@Autowired
	public BottleLog_Controller(BottleLog_Service bottlelog_Service, BottleComplex_Service bottlecomplex_Service) {
		super();
		this.bottlelog_Service = bottlelog_Service;
		this.bottlecomplex_Service = bottlecomplex_Service;
	}
	
//	@PostMapping("/api/upload")
//	public ResponseEntity<Path> imageUpload(MultipartFile image, String name) throws IOException {
//		// 기존 파일 명 그대로 가져오기
//		String imageName = StringUtils.cleanPath(image.getOriginalFilename());
//		RestTemplate restTemplate = new RestTemplate();
//		ObjectMapper mapper = new ObjectMapper();
//		System.out.println("name :: " + name);
//		Path tath = null;
//		String i = null;
//		String url = "http://127.0.0.1:5000/test";
//		try {
//			// Path : 경로 지정 함수 -> 저장할 디렉토리와 파일명을 설정.
//			Path path = Paths.get("../front_End/public/images/" + imageName);
//			String link = "?name=" + imageName + "&path=" + path.toString();
//			// 파일을 저장합니다.
//			Files.copy(image.getInputStream(), path);
//			System.out.println(url + link);
//			String response = restTemplate.getForObject(url + link, String.class);
//			System.currentTimeMillis();
//			@SuppressWarnings("unchecked")
//			JsonReader<T> read = mapper.readValue(response, JsonReader.class);			
//			System.out.println(read.getCount());
//			System.out.println(read.getCount().getClass().getName());
//			System.out.println(read.getUrl());
//			
//			i = read.getUrl();
//			tath = Paths.get(i);
//			
//			// DB에 image저장경로 저장
//			bottlelog_Service.imageUpload(imageName, path, name, read.getUrl());
//				
//			// DB에 복합테이블로 연결
//			bottlecomplex_Service.writeload(imageName, read.getCount());
//			
//		} catch (IOException e) {
//			e.printStackTrace();
//		}
//		// 저장된 이미지의 URL을 반환합니다.
//		String imageUrl = "images/" + imageName;
//		System.out.println(imageUrl);
//		return ResponseEntity.ok().body(tath);
//	}
	
	@PostMapping("/api/upload")
	public ResponseEntity<Path> imageUpload(MultipartFile image, String name) throws IOException {
		// 기존 파일 명 그대로 가져오기
		String ori_name = StringUtils.cleanPath(image.getOriginalFilename()); // image01.png
		
		String sv_name = String.valueOf(System.currentTimeMillis()) + '_' + ori_name; // 12314312354123_image01.png
		RestTemplate restTemplate = new RestTemplate();
		ObjectMapper mapper = new ObjectMapper();
		System.out.println("name :: " + name);
		Path tath = null;
		String i = null;
		String url = "http://127.0.0.1:5000/test";
		try {
			// Path : 경로 지정 함수 -> 저장할 디렉토리와 파일명을 설정.
			Path path = Paths.get("../front_End/public/images/" + sv_name);
			String link = "?name=" + sv_name + "&path=" + path.toString();
			// 파일을 저장합니다.
			Files.copy(image.getInputStream(), path);
			System.out.println(url + link);
			String response = restTemplate.getForObject(url + link, String.class);
			
			@SuppressWarnings("unchecked")
			JsonReader<T> read = mapper.readValue(response, JsonReader.class);			
			System.out.println(read.getCount());
			System.out.println(read.getCount().getClass().getName());
			System.out.println(read.getUrl());
			
			i = read.getUrl();
			tath = Paths.get(i);
			
			// DB에 image저장경로 저장
			bottlelog_Service.imageUpload(sv_name, ori_name, path, name, read.getUrl());
				
			// DB에 복합테이블로 연결
			bottlecomplex_Service.writeload(sv_name, read.getCount());
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		// 저장된 이미지의 URL을 반환합니다.
		String imageUrl = "images/" + sv_name;
		System.out.println(imageUrl);
		return ResponseEntity.ok().body(tath);
	}

	
	@PostMapping("/api/read")
	public ResponseEntity<List<BottleComplex>> jsonupload(){
		List<BottleComplex> data = bottlecomplex_Service.jsonupload();
		return new ResponseEntity<>(data, HttpStatus.OK);
	}
}
