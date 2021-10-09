import React from 'react';
import { ListGroup, Image } from 'react-bootstrap';

function ContactList({ contacts }) {
  return (
    <>
      <ListGroup variant="flush">
        {contacts.map((contact, index) => (
          <ListGroup.Item key={index} action href="#link1">
            {' '}
            <Image
              src={contact.image}
              style={{ width: '60px', height: '60px' }}
              // thumbnail
              roundedCircle
              className="mx-3"
            />
            {contact.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
}

export default ContactList;
