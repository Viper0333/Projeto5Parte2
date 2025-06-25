import React from 'react'
import ContactForm from './components/contactForm'
import ContactList from './components/contactLis'
import { GlobalStyle } from './styles/GlobalStyles'

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Lista de Contatos</h1>
      <ContactForm />
      <ContactList />
    </>
  )
}

export default App
