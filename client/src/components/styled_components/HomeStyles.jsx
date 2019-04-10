import styled from 'styled-components'

export const HomeContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 12vw;

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    font-size: 4em;
    color: whitesmoke;
}

button {
    font-size: 20px;
    margin-top: 1.5vw;
}


@media (max-width: 768px) {
    h1 {
        font-size: 2em;
    }
`