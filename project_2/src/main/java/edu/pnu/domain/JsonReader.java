package edu.pnu.domain;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class JsonReader<T> {
	@JsonProperty("count")
	private List<T> count;
	@JsonProperty("url")
	private String url;

	public JsonReader() {
		// TODO Auto-generated constructor stub
	}

	public JsonReader(List<T> count, String url) {
		super();
		this.count = count;
		this.url = url;
	}

	@Override
	public String toString() {
		return "JsonReader [count=" + count + ", url=" + url + "]";
	}

	public List<?> getCount() {
		return count;
	}

	public void setCount(List<T> count) {
		this.count = count;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

}
