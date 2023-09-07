package com.conn.domain.board;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardGetRequest {
    private String tableName;
    private long bid;
    private String search;
    private int pageLimit;
    private int pageOffset;

    void setPage(int page){
        setPageLimit(10);
        setPageOffset(pageLimit*page);
    }

}
