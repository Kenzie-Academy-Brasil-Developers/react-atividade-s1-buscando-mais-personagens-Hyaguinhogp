import styled from "styled-components";

export const Chars = styled.div`

    display: flex;
    flex-direction: column;
    text-align: center;

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (min-width: 768px) {
        ul {
            display: grid;
            grid-template-columns: 1fr 1fr;
            justify-items: center;
        }
    }

    @media (min-width: 1300px) {
        ul {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    @media (min-width: 1820px) {
        ul {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }
`

export const CharsHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    margin-bottom: 12px;

    h1 {
        font-weight: 800;
    }
`

export const Buttons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 0 60px;

    h2 {
        font-size: 32px;
        font-weight: 700;
        margin: 0 20px;
    }

    button {
        display: flex;
        align-items: center;
        padding: 15px;
        font-weight: 700;
        border: 3px solid black;
        background-color: transparent;
        border-radius: 3px;
        transition: all 0.3s;
    }

    button:hover {
        background-color: black;
        color: white;
    }
`