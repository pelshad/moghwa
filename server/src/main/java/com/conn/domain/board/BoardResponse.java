package com.conn.domain.board;

import lombok.Getter;
import lombok.Setter;

import java.util.HashMap;

@Getter
@Setter
public class BoardResponse {
    HashMap<String, ?> data = new HashMap<>();
    private String result;
}
