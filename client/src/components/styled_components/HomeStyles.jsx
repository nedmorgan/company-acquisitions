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

.button {
    font-size: 25px;
    margin-top: 1.5vw;
    color: black;
    background-color: whitesmoke;
    height: 50px;
    width: 135px;
    border-radius: 5px;
    text-align: center;
    line-height: 45px;
}

.button:hover {
    color: whitesmoke;
    background-color: rgba(200,200,200,.5);
}


@media (max-width: 768px) {
    h1 {
        font-size: 2em;
    }

    .button {
        font-size: 20px;
        line-height: 30px;
        width: 105px;
        height: 35px;
    }
`