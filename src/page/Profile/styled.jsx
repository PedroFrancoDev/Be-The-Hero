import styled from 'styled-components';


export const Container = styled.div`
    width: 100%;
    max-width: 1180px;
    padding: 0 30px;
    margin: 30px auto;

    h1 {
        margin-top: 80px;
        margin-bottom: 24px;
    }
`; 

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        font-size: 20px;
        margin-left: 24px;
    }

    img {
        height: 64px;
    }

    a {
        width: 100%;
        height: 60px;
        background: #e02041;
        border-radius: 8px;
        color: #fff;
        font-weight: 700;
        display: inline-block;
        text-align: center;
        font-size: 18px;
        line-height: 60px;
        transition: 0.2s;
        text-decoration: 0;
        width: 260px;
        margin-left: auto;

        &:hover {
            filter: brightness(90%);
        }
    }

    button {
        height: 60px;
        width: 60px;
        border-radius: 4px;
        border: 1px solid #dcdce6;
        margin-left: 16px;
        transition: 0.2s;

        &:hover {
            border-color: #999;
        }

        svg {
            font-size: 18px;
            color: #e02041;
        }
    }
`;

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    list-style: none;

    li {
        background: #fff;
        padding: 24px;
        border-radius: 8px;
        position: relative;
    }

    button {
        font-size: 20px;
        color: #a8a8b3;
        position: absolute;
        right: 24px;
        top: 24px;
        border: none;
        background: #ffff;
        transition: 0.2s;
        
        &:hover {
          color: #dd1e3e;
        }
    }

    strong {
        display: block;
        margin-bottom: 16px;
        color: #41414d;

        /* & + strong {
        margin-top: 32px;
    } */
    }

    p {
        color: #737380;
        line-height: 21px;
        font-size: 16px;
    }
`;