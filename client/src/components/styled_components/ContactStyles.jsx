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

.back-icon:hover {
    color: #3366BB;
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
    flex-wrap: wrap;
    height: auto;
    justify-content: center;
    width: 80vw;
}

.contact-flex {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 40%;
    background: rgba(200,200,200,.5);
    margin: 1vw;
    padding: 1vw;
    border-radius: 5px;
}

.trash-icon-container {
    margin: 0 auto;
    border-top: 2px solid whitesmoke;
    width: 15vw;
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

    h2 {
        font-size: 1.5em;
        text-align: center;
    }

    li {
        font-size: 1em;
    }

    .trash-icon, 
    .back-icon,
    .edit-icon {
        font-size: 4vw;
    }

    .list-icon {
        font-size: 3vw;
    }

    .contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    }
}
`