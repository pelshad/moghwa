package com.conn.domain.comment;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CommentController {

    private final CommentService commentService;
    CommentResponse commentResponse = new CommentResponse();

    @PostMapping("comment/{table}")
    public CommentResponse saveComment(
            @RequestBody CommentPostRequest params,
            @PathVariable String table
    ){
        if(!table.equals(params.getTableName())){
            commentResponse.setResult("fail");
            commentResponse.setData(
                    new HashMap<>(){{
                        put("msg" , "잘못된 경로로 접근하였습니다");
                    }}
            );
            return commentResponse;
        }

        commentService.saveComment(params);
        commentResponse.setResult("success");
        commentResponse.setData(
                new HashMap<>(){{
                    put("msg" , "댓글을 생성하였습니다.");
                }}
        );
        return commentResponse;
    }

    @GetMapping("/comment/{table}/{bid}")
    public CommentResponse findAllComment(
            @PathVariable String table,
            @PathVariable int bid
    ){
        CommentGetRequest params = new CommentGetRequest();
        params.setBid(bid);
        params.setTableName(table);
        List<CommentDBResponse> commentList = commentService.findAllComment(params);

        commentResponse.setResult("success");
        commentResponse.setData(
                new HashMap<>(){{
                    put("commentList", commentList);
                }}
        );
        return commentResponse;
    }

    @PatchMapping("/comment/{table}/{cid}")
    public CommentResponse updateComment(
            @RequestBody CommentPostRequest params,
            @PathVariable String table,
            @PathVariable int cid
    ){
        if(!table.equals(params.getTableName())){
            commentResponse.setResult("fail");
            commentResponse.setData(
                    new HashMap<>(){{
                        put("msg", "잘못된 URL입니다.");
                    }}
            );
        }
        try{
            commentService.updateComment(params);
            commentResponse.setResult("success");
            commentResponse.setData(
                    new HashMap<>(){{
                        put("msg", "댓글이 수정되었습니다.");
                    }}
            );
        } catch (Exception e){
            commentResponse.setResult("success");
            commentResponse.setData(
                    new HashMap<>(){{
                        put("msg", "댓글이 수정을 실패하였습니다.");
                    }}
            );
        }
        return commentResponse;
    }

    @DeleteMapping("/comment/{table}/{cid}")
    public CommentResponse deleteComment(
            @PathVariable String table,
            @PathVariable int cid
    ){
        CommentPostRequest params = new CommentPostRequest();
        params.setCid(cid);
        params.setTableName(table);

        commentService.deleteComment(params);
        commentResponse.setResult("success");
        commentResponse.setData(
                new HashMap<>(){{
                    put("msg", "댓글을 삭제하였습니다.");
                }}
        );
        return commentResponse;
    }

}
