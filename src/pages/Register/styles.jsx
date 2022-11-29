import styled from "styled-components";
import registerBackground from '../../assets/img/background-register-1.jpg'

export const Container = styled.div`
    //width: 100%;
    //height: 100vh;
    display: flex;
    min-height: 100vh;

    @media screen and (max-width: 1043px) {
        flex-direction: column-reverse;
    }
`;

export const RightContainer = styled.form`
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

        button {
            /* Button component */

            float: left;
            margin: 0 10px 0 0;
        }
    }

    .title {
        display: block;
        font-size: 42px;
        margin-bottom: 40px;
    }
`;

export const LeftContainer = styled.div`
    flex: 1;
    background-image: url(${registerBackground});
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 300px;
`;

export const Button = styled.button`
    border: ${props => props?.mType == 'default'? `1px solid ${props.theme.color.primary}` : '1px solid' };
    color: ${props => props?.mType == 'default'? `${props.theme.color.primary}` : props.theme.color.white };
    background-color: ${props => props?.mType == 'default'? `${props.theme.color.white}` : props.theme.color.primary };
    padding: 12px;
    font-size: 1.2rem;
    border-radius: 6px;
    cursor: pointer;

    &:hover { opacity: .8; }
`;