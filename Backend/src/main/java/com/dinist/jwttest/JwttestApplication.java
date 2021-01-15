package com.dinist.jwttest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.web.config.PageableHandlerMethodArgumentResolverCustomizer;

@SpringBootApplication
public class JwttestApplication {

	public static void main(String[] args) {
		SpringApplication.run(JwttestApplication.class, args);
	}

}
