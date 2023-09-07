package com.conn.domain.board;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;


@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class BoardController {

    private final BoardService boardService;
    BoardResponse boardResponse = new BoardResponse();

    @PostMapping("/board/{table}")
    public BoardResponse saveBoard(
            @RequestBody BoardPostRequest params,
            @PathVariable String table
            ){
        if(!table.equals(params.getTableName())){
            boardResponse.setResult("fail");
            boardResponse.setData(
                    new HashMap<>(){{
                        put("msg","잘못된 경로입니다.");
                    }}
            );
            return boardResponse;
        }
        if(!params.getUserId().equals("admin") && params.getTableName().equals("notice")){
            boardResponse.setResult("fail");
            boardResponse.setData(
                    new HashMap<>(){{
                        put("msg","해당 게시판은 관리자만 작성 가능합니다.");
                    }}
            );
            return boardResponse;
        }
        boardService.saveBoard(params);
        boardResponse.setResult("success");
        boardResponse.setData(
                new HashMap<>(){{
                    put("msg","게시글을 생성하였습니다.");
                }}
        );
        return boardResponse;
    }


    @GetMapping("/board/{table}")
    public BoardResponse findAllBoard(
            @RequestParam(value = "page", defaultValue = "1") int page,
            @PathVariable String table
            ){

        BoardGetRequest param = new BoardGetRequest();
        param.setTableName(table);
        param.setPage(page-1);

        List<BoardDBResponse> findAll = boardService.findAllBoard(param);
        int pageCount = boardService.findTotalPage(table);

        boardResponse.setResult("success");
        boardResponse.setData(
                new HashMap<>(){{
                    put("boardList", findAll);
                    put("pageCount", pageCount);
                }}
        );
        return boardResponse;
    }

    @GetMapping("/board/{table}/{id}")
    public BoardResponse findBoardById(
            @PathVariable long id,
            @PathVariable String table
    ){
        BoardGetRequest param = new BoardGetRequest();
        param.setTableName(table);
        param.setBid(id);
        boardService.viewCountBoard(param);
        BoardDBResponse findBoard = boardService.findBoardById(param);
        if(findBoard == null){
            boardResponse.setResult("fail");
            boardResponse.setData(
                    new HashMap<>(){{
                        put("msg", "페이지 음슴");
                    }}
            );
            return boardResponse;
        }

        boardResponse.setResult("success");
        boardResponse.setData(
                new HashMap<>(){{
                    put("boardDetail", findBoard);
                }}
        );
        return boardResponse;
    }

    @PatchMapping("/board/{table}/{id}")
    public BoardResponse updateBoard(
            @RequestBody BoardPostRequest params,
            @PathVariable String table,
            @PathVariable long id
    ){
        if(!table.equals(params.getTableName())){
            boardResponse.setResult("fail");
            boardResponse.setData(
                    new HashMap<>(){{
                        put("msg", "잘못된 URL입니다.");
                    }}
            );
        }
        try{
            boardService.updateBoard(params);
            boardResponse.setResult("success");
            boardResponse.setData(
                    new HashMap<>(){{
                        put("msg", "게시글이 수정되었습니다.");
                    }}
            );
            return boardResponse;
        } catch (Exception e){
            e.printStackTrace();
            boardResponse.setResult("fail");
            boardResponse.setData(
                    new HashMap<>(){{
                        put("msg", "게시글 수정을 실패하였습니다.");
                    }}
            );
            return boardResponse;
        }
    }

    @DeleteMapping("/board/{table}/{id}")
    public BoardResponse deleteBoard(
            @PathVariable("id") long id,
            @PathVariable String table
            ){
        BoardPostRequest req = new BoardPostRequest();
        req.setBid(id);
        req.setTableName(table);
        try{
            boardService.deleteBoard(req);
            boardResponse.setResult("success");
            boardResponse.setData(
                    new HashMap<>(){{
                        put("msg", "게시글을 삭제하였습니다.");
                    }}
            );
            return boardResponse;
        }catch (Exception e){
            boardResponse.setResult("fail");
            boardResponse.setData(
                    new HashMap<>(){{
                        put("msg", "게시글 삭제를 실패하였습니다");
                    }}
            );
            return boardResponse;
        }
    }
}
