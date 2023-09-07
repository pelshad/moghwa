package com.conn.domain.board;

import lombok.Getter;

import java.time.LocalDate;

@Getter
public class BoardDBResponse {
    private Long bid;
    private String title;
    private String content;
    private String userId;
    private int viewCnt;
    private LocalDate createdDate;
    private String file;
}
