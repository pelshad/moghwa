package com.conn;

import com.conn.domain.board.BoardPostRequest;
import com.conn.domain.board.BoardService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class BoardServiceTest {
    @Autowired
    BoardService boardService;

    @Test
    void save(){
        BoardPostRequest params = new BoardPostRequest();
        params.setTableName("notice");
        params.setTitle("서비스 테스트");
        params.setContent("서비스 테스트 내용");
        params.setUserId("테스터");
        Long id = boardService.saveBoard(params);
        System.out.println("생성된 게시글 ID : " + id);
    }
}
