import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    padding-top: 20px;
    height: 100vh;
    overflow: hidden;

    .btn-return {
        position: relative;
        left: 20px;
    }
`

export const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    gap: 40px;
    padding: 20px;
    overflow: hidden;
    height: 100vh;

    .fab-button {
        position: absolute;
        bottom: 20px;
    }
`

export const CardAluno = styled.div`
    max-width: 400px;
    width: 100%;
    padding: 20px;
    background-color: ${props => props.theme.color.primary};
    border-radius: 15px;
    color: ${props => props.theme.color.white};
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: min-content;
    position: sticky;
    top: 10px;

    img {
        width: 180px;
        margin: 0 auto;
        border: 4px solid ${props => props.theme.color.white};
        border-radius: 7px;
    }

    h1 {
        text-align: center;
    }
`

export const SelectTreino = styled.div`
    width: 100%;
    margin-bottom: 20px;
    margin-top: 5px;

    select {
        padding: 8px 3px;
        display: block;
        width: 100%;
        border: none;
        outline: 0;
        border-bottom: 2px solid ${props => props.theme.color.grey};
        font-size: 1.2rem;
        max-width: 500px;
        
        &:focus {
            border-color: ${props => props.theme.color.primary};
        }
    }
`

export const BoxTreinos = styled.div`
    width: 100%;
    overflow-y: scroll;
    padding-right: 20px;
    padding-bottom: 60px;

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.color.grey};
        border-radius: 10px;
    }
`

export const Treino = styled.div`
    min-height: 200px;
    border-radius: 15px;
    background-color: #1f1f1f;
    color: ${props => props.theme.color.white};
    padding: 20px;
    margin-bottom: 20px;
`

export const Treinos = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`