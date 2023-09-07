import { styled } from 'styled-components';

export const Container = styled.div`
    margin: 100px 0px;
    h2 {
        text-align: center;
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 50px;
    }
    .title {
        display: grid;
        grid-template-columns: 1fr 70% 1fr 1fr 1fr;
        border-top: 2px solid #aaa;
        border-bottom: 2px solid #aaa;
        li {
            line-height: 40px;
            text-align: center;
        }
    }
    .write {
        background-color: #666;
        color: #fff;
        padding: 5px 20px;
        border-radius: 5px;
        margin-bottom: 5px;
    }
    .list {
        display: grid;
        grid-template-columns: 1fr 70% 1fr 1fr 1fr;
        &:not(:nth-child(1)) {
            border-bottom: 1px solid #aaa;
        }
        li {
            line-height: 40px;
            a {
                line-height: 40px;
            }
            &:not(:nth-child(2)) {
                text-align: center;
            }
        }
        .linkDetail{
            cursor: pointer;
        }
    }
    @media (max-width: 1200px) {
        .title,
        .list {
            grid-template-columns: 50px 1fr 100px 100px;
        }
        .title,
        .list {
            li {
                &:nth-child(4) {
                    display: none;
                }
            }
        }
    }
    @media (max-width: 700px) {
        .title,
        .list {
            grid-template-columns: 50px 1fr 100px;
        }
        .title,
        .list {
            li {
                &:nth-child(5) {
                    display: none;
                }
            }
        }
    }
`;
