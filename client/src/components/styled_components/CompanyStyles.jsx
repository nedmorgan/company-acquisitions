import styled from 'styled-components'

export const CompanyContainer = styled.div`
h1, h3, p, li {
    color: whitesmoke;
}

h1 {
    text-align: center;
}

.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
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