import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { DetailBoard, GetComments } from 'interfaces/board';

import { createComments, deleteBoard, deleteComments, getComments, getDetailBoard } from 'apis/board';

import Loading from 'components/loding/Loading';

import * as Style from 'assets/styleComponents/board/detail';

const Detail = () => {
    const nav = useNavigate();
    const { boardType, boardPage } = useParams();
    const [boardContent, setBoardContent] = useState<DetailBoard | undefined>(undefined);
    const [comment, setComment] = useState<GetComments[] | undefined>(undefined);
    const [commentContent, setCommentContent] = useState('');

    // 게시글 삭제
    const handleDeleteBoard = async (): Promise<void> => {
        const ok = window.confirm('정말로 삭제 하시겠습니까?');
        if (ok) {
            await deleteBoard({ tableName: boardType, boardPage: Number(boardPage) });
            nav(`/${boardType}/1`);
        }
    };

    // 댓글가져오기
    const getComment = (): void => {
        getComments({ tableName: boardType, boardPage: Number(boardPage) }, setComment);
    };

    // 댓글삭제
    const deleteComment = async (cid: number | undefined): Promise<void> => {
        const ok = window.confirm('정말로 삭제 하시겠습니까?');
        if (ok) {
            await deleteComments({ tableName: boardType, cid: cid });
            getComment();
        }
    };

    // 댓글 작성
    const handleCreateComment = async (): Promise<void> => {
        if (boardContent !== undefined) {
            await createComments({
                userId: sessionStorage.getItem('userId'),
                content: commentContent.replace(/\n/g, '<br>'),
                tableName: boardType,
                bid: boardContent.bid,
            });
            getComment();
            setCommentContent('');
        } else {
            alert('알 수 없는 에러 발생');
        }
    };

    useEffect(() => {
        getDetailBoard({ tableName: boardType, boardPage: Number(boardPage) }, setBoardContent);
        getComment();
    }, []);

    return boardContent === undefined ? (
        <Loading />
    ) : (
        <Style.Container>
            <div className="wrap">
                <h2>{boardType === 'notice' ? '공지사항' : '문의사항'}</h2>
                <div className="title">
                    <ul>
                        <li>
                            <div>제목</div>
                            <div>{boardContent.title}</div>
                        </li>
                        <li>
                            <div>작성자</div>
                            <div>{boardContent.userId}</div>
                        </li>
                    </ul>
                    <div>
                        <p>
                            <b>작성일</b>
                            {boardContent.createdDate}
                        </p>
                        <p>
                            <b>조회수</b>
                            {boardContent.viewCnt}
                        </p>
                    </div>
                </div>
                <div className="content">
                    <p dangerouslySetInnerHTML={{ __html: boardContent.content }}></p>
                    {boardContent.file !== '' && <img src={boardContent.file} alt="" />}
                </div>

                <div className="comments">
                    <ul>
                        {comment !== undefined
                            ? comment?.map((a, i) => {
                                  return (
                                      <li key={i}>
                                          <div>
                                              <h4>작성자 : {a.userId}</h4>
                                              <h4>작성일 : {a.createdDate}</h4>
                                              <p dangerouslySetInnerHTML={{ __html: a.content }}></p>
                                          </div>
                                          {sessionStorage.getItem('userId') === a.userId && (
                                              <button
                                                  onClick={() => {
                                                      deleteComment(a.cid);
                                                  }}>
                                                  글삭제
                                              </button>
                                          )}
                                      </li>
                                  );
                              })
                            : null}
                    </ul>
                    {sessionStorage.getItem('userId') !== null && (
                        <div>
                            <textarea
                                name="comments"
                                value={commentContent}
                                onChange={(e) => {
                                    setCommentContent(e.target.value);
                                }}></textarea>
                            <i className="fa-regular fa-paper-plane" onClick={handleCreateComment}></i>
                        </div>
                    )}
                </div>

                <div className="buttons">
                    <Link to={`/${boardType}/1`} className="more">
                        목록
                    </Link>
                    {sessionStorage.getItem('userId') === 'billy9587' && <button onClick={handleDeleteBoard}>삭제</button>}
                </div>
            </div>
        </Style.Container>
    );
};

export default Detail;
