import styled, { keyframes } from 'styled-components'
import { fadeIn } from 'react-animations'

export const fade = keyframes`${fadeIn}`

export const ContactContainer = styled.div`

.contact {
    animation: 1s ${fade};
}

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

li {
    font-size: 1.5em;
}

.contact-title {
    font-size: 1.5em;
}

.title-flex {
    display: flex;
    justify-content: center;
    width: 100%;
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
    border-top: 2px solid whitesmoke;
    width: 25vw;
    display: flex;
    justify-content: center;
}

.trash-icon {
    margin-top: 1.5vw;
}

.trash-icon, 
.back-icon,
.edit-icon {
    font-size: 2vw;
}

.edit-icon {
    margin-right: 1vw;
}

.back-icon {
    margin-bottom: 1vw;
}

@media (max-width: 768px) {
    h3 {
        font-size: 1.25em;
    }

    li {
        font-size: 1em;
    }

    .contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
`