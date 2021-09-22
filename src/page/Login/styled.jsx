import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    max-width: 1120px;
    height: 100vh;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    section {
        width: 100%;
        max-width: 350px;
        margin-right: 30px;

        form {
            margin-top: 100px;

            h1 {
                font-size: 32px;
                margin-bottom: 32px;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
            }

            input {
                width: 100%;
                height: 60px;
                color: #333;
                border: 1px solid #dcdce6;
                border-radius: 8px;
                padding: 0 24px;
            }

            button {
                width: 100%;
                height: 60px;
                background: #e02041;
                border-radius: 8px;
                color: #fff;
                font-weight: 700;
                margin-top: 16px;
                display: inline-block;
                text-align: center;
                font-size: 18px;
                line-height: 60px;
                transition: 0.2s;

                &:hover {
                    filter: brightness(90%);
                }
            }

            svg {
                font-size: 16px;
                color: #E02041;
                margin-right: 8px;
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
            }
        }
    }

`;