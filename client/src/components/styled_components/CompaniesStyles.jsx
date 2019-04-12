import styled, { keyframes } from 'styled-components'
import { fadeIn, fadeInDown } from 'react-animations'

export const fade = keyframes`${fadeIn}`
export const fadeDown = keyframes`${fadeInDown}`

export const CompaniesContainer = styled.div`

h1 {
    text-align: center;
    color: whitesmoke;
    font-size: 4em;
    text-decoration: underline;
    animation: 1s ${fadeDown};
}

h5 {
    color: whitesmoke;
    font-size: 2em;
}

.add-link {
    margin-left: 1.5vw;
    color: whitesmoke;
}

.card {
    width: 20rem;
    border-radius: 5px;
    animation: 1s ${fade};
}

.card:hover {
    background: rgba(200,200,200,.5);
}

.visit-button {
    margin-bottom: 1em;
}

a:hover {
    color: #3366BB;
}

.company-flex {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    height: auto;
}

label {
    color: whitesmoke;
}

.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4em;
    animation: 1s ${fadeDown};
}

.new-company-form {
    width: 80vw;
}

.back-arrow {
    color: whitesmoke;
}

.back-icon {
    color: whitesmoke;
    font-size: 2vw;
    margin-bottom: 1vw;
}

.back-icon:hover,
.add-link:hover {
    color: #3366BB;
    cursor: pointer;
}

@media (max-width: 768px) {
    h1 {
        font-size: 2em;
    }
    .back-icon {
        font-size: 4vw;
    }
}
`