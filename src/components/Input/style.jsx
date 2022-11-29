import styled from "styled-components";

export const Container = styled.div`

    width: 100%;

    input {
        padding: 8px 3px;
        display: block;
        width: 100%;
        margin-bottom: 20px;
        border: none;
        outline: 0;
        border-bottom: 2px solid ${props => props.theme.color.grey};
        font-size: 1.2rem;
        max-width: 500px;
        
        &:focus {
            border-color: ${props => props.theme.color.primary};
        }
    }

    label {
        display: block;
        margin-top: 15px;
        margin-bottom: 5px;
        text-align: left;
        font-weight: 400;
        width: 100%;
    }
`