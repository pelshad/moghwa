package com.conn.domain.comment;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommentGetRequest {
    private int bid;
    private int cid;
    private String tableName;
}
