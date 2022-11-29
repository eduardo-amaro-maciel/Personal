import styled from "styled-components";
import loginBackground from '../../assets/img/login-background-4.jpg'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    overflow-y: hidden;

    @media screen and (max-width: 1043px) {
        flex-direction: column;
    }
`;

export const RightContainer = styled.div`
    flex: 1;
    background-image: url(${loginBackground});
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
`

export const LeftContainer = styled.form`
    flex: 1;
    width: 100%;
    background-color: ${props => props.theme.color.white};
    padding: 40px 20px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 1043px) {
        max-width: 100%;
    }
    
    .box {
        margin: 0 auto;
        text-align: center;
        max-width: 500px;
        width: 100%;
        border-radius: 8px;

        @media screen and (max-width: 915px) {
            align-items: center;
            display: flex;
            flex-direction: column;
        }
    }

    .title {
        display: block;
        font-size: 42px;
        margin-bottom: 40px;
    }

    .create-account {

        u, strong {
            cursor: pointer;
            opacity: .8;
        }
    }   
`;

export const Button = styled.button`
    width: 100%;
    border: ${props => props.theme.color.primary };
    color: ${props => props.theme.color.white };
    background-color: ${props => props.theme.color.primary };
    padding: 12px;
    font-size: 1.2rem;
    border-radius: 6px;
    margin: 20px 0;
    cursor: pointer;

    &:hover { opacity: .8 }
`