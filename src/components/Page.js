import React from 'react'
import styled from 'styled-components'
import Footer from './Footer'
import Nav from './Nav'
import { primaryText } from '../colors'
import 'reset-css'

export default ({ children }) => (
  <Container>
    <Nav />
    {children}
    <Footer />
  </Container>
)

const Container = styled.div`
  font-family: Avenir, 'Muli', sans-serif;
  color: ${primaryText};
  margin: 1rem;
`
