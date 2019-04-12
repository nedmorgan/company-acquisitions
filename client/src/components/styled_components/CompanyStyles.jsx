import styled, { keyframes } from 'styled-components'
import { fadeIn, fadeInUp, fadeInDown } from 'react-animations'

export const fade = keyframes`${fadeIn}`
export const fadeUp = keyframes`${fadeInUp}`
export const fadeDown = keyframes`${fadeInDown}`

export const CompanyContainer = styled.div`
h1, h3, p, li {
    color: whitesmoke;
}

h1 {
    text-align: center;
}

.edit-company-icon {
    margin-left: 1.5vw;
}

a {
    color: whitesmoke;
}

a:hover {
    color: #3366BB;
}

label {
    color: whitesmoke;
}

.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4em !important;
    width: 80vw;
    margin: 0 auto;
    animation: 1s ${fadeDown};
}

.remove-container {
    display: flex;
    justify-content: center;
    width: 100vw;
    margin-top: 5vw;
}

.company-info {
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
    animation: 1s ${fade};
}

.edit-company-form {
    width: 80vw;
}

li {
    list-style-type: none;
}

.contact-title {
    font-weight: bold;
    text-decoration: underline;
}

.remove-company {
    animation: 1s ${fadeUp};
}

.back-icon {
    color: whitesmoke;
    font-size: 2vw;
    margin-bottom: 1vw;
}

@media (max-width: 768px) {
    h1 {
        font-size: 2em;
    }

    h3 {
        font-size: 1.5em;
    }
    .remove-company {
        margin-bottom: 3vw;
    }
`