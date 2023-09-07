import { styled } from 'styled-components';

export const Container = styled.div`
    margin: 100px 0px;
    h2 {
        font-size: 40px;
        margin-bottom: 20px;
        text-align: center;
    }
    .title {
        margin: 30px 0px;
        border: 1px solid #ccc;
        ul {
            li {
                display: grid;
                grid-template-columns: 150px 1fr;
                div {
                    line-height: 50px;
                    &:nth-child(1) {
                        text-align: center;
                        background-color: #f8f8f8;
                        font-weight: bold;
                        font-size: 16px;
                        color: #909090;
                    }
                    &:nth-child(2) {
                        font-weight: bold;
                        font-size: 16px;
                        padding: 0px 20px;
                    }
                }
                &:not(:first-child) {
                    border-top: 1px solid #f8f8f8;
                    border-bottom: 1px solid #f8f8f8;
                }
            }
        }
        > div {
            display: flex;
            padding: 15px 20px;
            gap: 20px;
            p {
                display: inline-flex;
                align-items: flex-end;
                gap: 10px;
                color: #919191;
                b {
                    font-size: 18px;
                    color: #000;
                }
            }
        }
    }
    .content {
        padding-bottom: 50px;
        border-bottom: 1px solid #ccc;
        min-height: 500px;
        p {
            font-size: 18px;
            line-height: 1.2;
        }
        img {
            max-width: 100%;
        }
    }
    .comments {
        ul {
            width: 100%;
            border-bottom: 1px solid #ccc;
            li {
                display: flex;
                justify-content: space-between;
                align-items: end;
                width: 100%;
                padding: 0px 5px 10px;
                margin-top: 10px;
                &:not(:last-child) {
                    border-bottom: 1px solid #f5f5f5;
                }
                h4 {
                    line-height: 1.2;
                }
                p {
                    margin-top: 10px;
                }
                button {
                    margin-top: 20px;
                    font-weight: bold;
                    font-size: 12px;
                    padding: 7px 10px;
                    text-align: center;
                    border-radius: 5px;
                    cursor: pointer;
                    background-color: red;
                    color: #fff;
                }
            }
        }
        div {
            position: relative;
            margin-top: 10px;
            textarea {
                width: 100%;
                resize: none;
                height: 70px;
                border: 1px solid #ccc;
                padding: 5px;
            }
            i {
                position: absolute;
                top: 0;
                right: 0;
                width: 50px;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
                cursor: pointer;
                background-color: #bae148;
                color: #fff;
            }
        }
    }
    .buttons {
        .more,
        button {
            margin-top: 20px;
            border: 1px solid #ccc;
            font-weight: bold;
            font-size: 14px;
            width: 150px;
            line-height: 40px;
            text-align: center;
            border-radius: 5px;
            margin-bottom: 30px;
            margin-right: 5px;
            cursor: pointer;
        }
    }
`;
