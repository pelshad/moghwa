export interface BoardTablename {
    tableName: string | undefined;
}

export interface BoardPage {
    boardPage: number;
}

export interface BoardId {
    bid: number | undefined;
}

export interface CommentId {
    cid: number | undefined;
}

export interface BoardTitle {
    title: string;
}

export interface BoardBaseData {
    content: string;
    userId: string | null;
}

export interface BoardFile {
    file: string;
}

export interface BoardDate {
    createdDate: string;
}

export interface BoardBaseType extends BoardTablename, BoardPage {}

export interface BoardList extends BoardBaseData, BoardTitle, BoardId, BoardDate {
    viewCnt: number;
}

export interface GetBoard {
    pageCount: number;
    boardList: BoardList[];
}

export interface DetailBoard extends BoardList, BoardFile {}

export interface UpdataBoard extends BoardTablename, BoardBaseData, BoardTitle, BoardId, BoardFile {}

export interface CreateBoard extends BoardTablename, BoardBaseData, BoardTitle {
    file: string;
}

export interface BoardNav extends BoardPage {
    boardLength: number;
    url: string;
}

export interface GetComments extends BoardTablename, BoardBaseData, BoardId, BoardDate, CommentId {}

export interface CreateComments extends BoardTablename, BoardBaseData, BoardId {}

export interface DeleteComments extends BoardTablename, CommentId {}
