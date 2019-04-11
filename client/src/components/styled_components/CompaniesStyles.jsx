import styled from 'styled-components'

export const CompaniesContainer = styled.div`
h1 {
    text-align: center;
    color: whitesmoke;
    font-size: 4em;
    text-decoration: underline;
}

a {
    margin-left: 1.5vw;
    color: whitesmoke;
}

a:hover {
    color: #3366BB;
}

.company-flex {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.new-company-form {
    width: 80vw;
}

.back-arrow {
    color: whitesmoke;
}

@media (max-width: 768px) {
    h1 {
        font-size: 2em;
    }
`