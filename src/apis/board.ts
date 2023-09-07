import axios from './axios';
import { axiosInspection } from './axiosInspection';
import { handleApiError } from './handleError';
import {
    BoardBaseType,
    CreateBoard,
    GetBoard,
    UpdataBoard,
    DetailBoard,
    CreateComments,
    GetComments,
    DeleteComments,
} from 'interfaces/board';

// 게시글 작성
const createBoard = async (data: CreateBoard): Promise<boolean | undefined> => {
    try {
        const res = await axios.post(`/board/${data.tableName}`, data);
        return axiosInspection(res.data);
    } catch (error) {
        handleApiError(error);
    }
};

// 게시글 가져오기
const getBoard = async (data: BoardBaseType, success: (data: GetBoard) => void): Promise<void> => {
    try {
        const res = await axios.get(`/board/${data.tableName}?page=${data.boardPage}`);
        axiosInspection(res.data) && success(res.data.data);
    } catch (error) {
        handleApiError(error);
    }
};

// 게시글 수정
const updataBoard = async (data: UpdataBoard): Promise<void> => {
    try {
        const res = await axios.patch('/board', data);
        axiosInspection(res.data);
    } catch (error) {
        handleApiError(error);
    }
};

// 게시글 삭제
const deleteBoard = async (data: BoardBaseType): Promise<void> => {
    try {
        const res = await axios.delete(`/board/${data.tableName}/${data.boardPage}`);
        axiosInspection(res.data);
    } catch (error) {
        handleApiError(error);
    }
};

// 게시글 디테일 가져오기
const getDetailBoard = async (data: BoardBaseType, success: (data: DetailBoard) => void): Promise<boolean | void> => {
    try {
        const res = await axios.get(`/board/${data.tableName}/${data.boardPage}`);
        if (axiosInspection(res.data)) {
            success(res.data.data.boardDetail);
        } else {
            window.location.replace(`/${data.tableName}/1`);
        }
    } catch (error) {
        handleApiError(error);
    }
};

// 댓글달기
const createComments = async (data: CreateComments): Promise<void> => {
    try {
        const res = await axios.post(`/comment/${data.tableName}`, data);
        axiosInspection(res.data);
    } catch (error) {
        handleApiError(error);
    }
};

// 댓글 가져오기
const getComments = async (data: BoardBaseType, success: (data: GetComments[]) => void): Promise<void> => {
    try {
        const res = await axios.get(`/comment/${data.tableName}/${data.boardPage}`);
        axiosInspection(res.data) && success(res.data.data.commentList);
    } catch (error) {
        handleApiError(error);
    }
};

//댓글 삭제
const deleteComments = async (data: DeleteComments): Promise<void> => {
    try {
        const res = await axios.delete(`/comment/${data.tableName}/${data.cid}`);
        axiosInspection(res.data);
    } catch (error) {
        handleApiError(error);
    }
};

export { createBoard, getBoard, updataBoard, deleteBoard, getDetailBoard, createComments, getComments, deleteComments };
