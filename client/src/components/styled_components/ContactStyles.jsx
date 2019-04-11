import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

export const fade = keyframes`${fadeIn}`

export const ContactContainer = styled.div`
.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

h2 {
    color: whitesmoke;
}

.list-icon {
    margin-right: 1vw;
    font-size: 2vw;
}

.contact-title {
    font-size: 1.5em;
}

.new-contact-form {
    width: 60vw;
}

.contact-container {
    display: flex;
    justify-content: center;
    width: 80vw;
}

.contact-flex {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
}

.trash-icon-container {
    margin: 0 auto;
}

.trash-icon {
    font-size: 2vw;
}

@media (max-width: 768px) {
    h3 {
        font-size: 1.25em;
    }
`