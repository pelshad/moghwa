package com.conn.domain.comment;

import lombok.Getter;
import lombok.Setter;

import java.util.HashMap;

@Getter
@Setter
public class CommentResponse {
    HashMap<String, ?> data = new HashMap<>();
    private String result;
}
