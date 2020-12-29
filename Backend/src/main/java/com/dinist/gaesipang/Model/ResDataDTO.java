package com.dinist.gaesipang.Model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ResDataDTO {

    private String code;
    private String status;
    private String message;
    private Object item;
}
