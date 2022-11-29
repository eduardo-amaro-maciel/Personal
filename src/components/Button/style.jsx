import styled from "styled-components";

export const Button = styled.button`
    padding: 10px 30px;
    border: 0;
    outline: 0;

    background-color: ${props => props.bg_color};
    color: ${props => props.color};
`;