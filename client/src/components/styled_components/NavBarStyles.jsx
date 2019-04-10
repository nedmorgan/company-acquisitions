import styled from 'styled-components'

export const NavContainer = styled.div`
background: rgba(200,200,200,.5);

a {
    font-size: 2em;
    color: whitesmoke;
}

a:hover {
    color: black;
}

@media (max-width: 768px) {
    a {
        font-size: 1em;
    }
}
`