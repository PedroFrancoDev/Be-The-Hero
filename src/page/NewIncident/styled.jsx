import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    div {
        width: 100%;
        padding: 96px;
        background: #f0f0f5;
        box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
        border-radius: 8px;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const Section = styled.section`
    width: 100%;
    max-width: 380px;

    h1 {
        font-size: 32px;
        margin: 64px 0 32px;
    }

    p {
        font-size: 18px;
        color: #737380;
        line-height: 31px;
    }

    a {
        display: flex;
        align-items: center;
        margin-top: 40px;
        color: #41414d;
        font-size: 18px;
        text-decoration: none;
        font-weight: 500;
        transition: opacity 0.2s;

        &:hover {
            opacity: 0.8;
        }

        svg {
            font-size: 16px;
            color: #E02041;
            margin-right: 8px;
        }
    }
`;

export const Form = styled.form`
    width: 100%;
    max-width: 450px;

    input {
        width: 100%;
        height: 60px;
        color: #333;
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 0 24px;
        margin-top: 8px;
    }

    textarea {
        width: 100%;
        min-height: 140px;
        color: #333;
        border: 1px solid #dcdce6;
        border-radius: 8px;
        padding: 0 24px;
        margin-top: 8px;
        padding: 16px 24px;
        line-height: 24px;
        resize: vertical;
    }

    
    button {
        width: 100%;
        height: 60px;
         border-radius: 8px;
        background: #e02041;
        font-weight: 700;
        color: #fff;
        display: inline-block;
        margin-top: 16px;
        font-size: 18px;
        line-height: 60px;
        transition: 0.2s;
        text-align: center;
            
        &:hover {
            filter: brightness(90%);
        }
    }

    
`;