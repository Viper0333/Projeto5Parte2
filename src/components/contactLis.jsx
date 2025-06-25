import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact, editContact } from '../features/contacts/contactsSlice';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  background: #red;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
`;

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [edited, setEdited] = useState({ name: '', email: '', phone: '' });

  const handleEdit = contact => {
    setEditingId(contact.id);
    setEdited(contact);
  };

  const handleSave = () => {
    dispatch(editContact({ id: editingId, updatedContact: edited }));
    setEditingId(null);
  };

  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {editingId === contact.id ? (
            <>
              <input value={edited.name} onChange={e => setEdited({ ...edited, name: e.target.value })} />
              <input value={edited.email} onChange={e => setEdited({ ...edited, email: e.target.value })} />
              <input value={edited.phone} onChange={e => setEdited({ ...edited, phone: e.target.value })} />
              <button onClick={handleSave}>Salvar</button>
            </>
          ) : (
            <>
              <p><strong>Nome:</strong> {contact.name}</p>
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>Telefone:</strong> {contact.phone}</p>
              <button onClick={() => handleEdit(contact)}>Editar</button>
              <button onClick={() => dispatch(removeContact(contact.id))}>Remover</button>
            </>
          )}
        </Item>
      ))}
    </List>
  );
}
