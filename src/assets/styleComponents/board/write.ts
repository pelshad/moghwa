import styled from 'styled-components';

export const WriteForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 100px 0px;
    h2 {
        text-align: center;
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    p {
        display: inline-block;
        font-size: 16px;
    }
    input,
    textarea {
        width: 100%;
    }

    input {
        border: 1px solid #ddd;
        padding: 10px;
    }

    textarea {
        border: 1px solid #ddd;
        padding: 5px;
        resize: none;
        height: 300px;
    }
`;

export const Button = styled.div`
    text-align: center;
    margin-top: 10px;
    button {
        background-color: #444;
        color: #fff;
        padding: 10px 30px;
        margin: 0 5px;
        border-radius: 5px;
        cursor: pointer;
    }
`;
