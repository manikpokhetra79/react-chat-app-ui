import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchContacts } from '../actions/contact';
import '../App.css';
import SearchBar from './SearchBar';
import ContactList from './ContactList';

function App(props) {
  const [contacts, setContacts] = useState([]);
  const [searchfield, setSearchField] = useState('');
  // fetch contacts from
  useEffect(() => {
    props.dispatch(fetchContacts());
    setContacts(props.contacts);
  }, []);
  //handle search change
  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };
  // filter results
  const filteredContacts = contacts.filter((contact) => {
    //this will return only the contacts whose name is same as searched input
    return contact.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="4">
            <Row>
              <SearchBar searchChange={onSearchChange} />
            </Row>
            <Row>
              <ContactList contacts={filteredContacts} />
            </Row>
          </Col>
          <Col lg="8"></Col>
        </Row>
        {/* {contacts.map((contact) => (
          <div>
            <h1>{contact.name}</h1>
            <div>
              {contact.chatlog.length > 0 &&
                contact.chatlog.map((message) => (
                  <p className={`${message.sender}-message`}>
                    {' '}
                    {message.text} ,{message.timestamp}
                  </p>
                ))}
            </div>
          </div>
        ))} */}
      </Container>
    </>
  );
}
function mapStateToProps(state) {
  return {
    contacts: state.contacts,
  };
}
export default connect(mapStateToProps)(App);
