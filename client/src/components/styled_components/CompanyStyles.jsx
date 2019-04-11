import styled from 'styled-components'

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

.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.remove-container {
    display: flex;
    justify-content: center;
    width: 100vw;
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
`