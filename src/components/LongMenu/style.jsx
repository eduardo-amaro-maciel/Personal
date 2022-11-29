import styled from "styled-components";

export const CardNotification = styled.div`
    padding: 20px;
    border-bottom: 3px solid var(--color-primary);
    display: flex;
    flex-direction: column;
    width: 400px;

    img {
        width: 80px;
        border-radius: 50%;
        object-fit: cover;
        margin: 0 auto;
    }

    .btn-display {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin-top: 10px;
    }
`

export const Button = styled.button`
    width: 100%;
    border: ${props => props?.mType == 'default'? 'none' : '2px solid var(--color-primary)' };
    color: ${props => props?.mType == 'default'? 'var(--color-white)' : 'var(--color-primary)' };
    background-color: ${props => props?.mType == 'default'? 'var(--color-primary)' : 'var(--color-white)' };
    padding: 8px;
    font-size: 1.2rem;
    border-radius: 6px;

    &:hover {
        opacity: .8;
        cursor: pointer;
    }
`
