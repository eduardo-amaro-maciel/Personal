import styled from "styled-components";

export const BarTop = styled.div`
    width: 100%;
    background-color: var(--color-primary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 40px;

    .area-text {
        font-size: 2.4rem;
        color:  var(--color-white);
    }
`;

export const Container = styled.div`
    width: 100%;
    height: auto;
`;

export const Content = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: flex; 
    gap: 20px;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;

    .search {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 45px;

        input[type=search] {
            flex: 1;
            border: 0;
            outline: 0;
            border: ${props => `2px solid ${props.theme.color.primary}`};
            width: 100%;
            border-width: 2px;
            border-bottom-left-radius: 15px;
            border-top-left-radius: 15px;
            padding: 10px 20px;
            font-family: 'Roboto';
            font-size: 18px;
            font-weight: 500;
            height: 100%;
        }

        svg {
            // icon
            width: 40px;
            height: 100%;
            border-bottom-right-radius: 15px;
            border-top-right-radius: 15px;
            fill: #fff;
            flex: 0.1;
            background-color: ${props => props.theme.color.primary};
        }
    }
`;

export const StudentCard = styled.button`
    max-width: 470px;
    width: 100%;
    border: 2px solid black;
    padding: 10px;
    display: flex;
    gap: 20px;
    align-items: center;
    border-radius: 14px;
    border-color: var(--color-primary);

    img {
        width: 80px;
        border-radius: 50%;
        object-fit: cover;
    }

    .student-name {
        font-size: 1.4rem;
    }

    &:hover {
        background-color: var(--color-primary);
        cursor: pointer;

        .student-name {
            color:  var(--color-white);
        }
    }
`