import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../features/contacts/contactsSlice';
import styled from 'styled-components';

const Form = styled.form`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const dispatch = useDispatch();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact(form));
    setForm({ name: '', email: '', phone: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Nome Completo" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Telefone" required />
      <button type="submit">Adicionar Contato</button>
    </Form>
  );
}
