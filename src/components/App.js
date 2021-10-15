import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { updateContacts } from '../actions/contact';
import './stylesheets/App.css';
import SearchBar from './LeftSidebar/SearchBar';
import ContactList from './LeftSidebar/ContactList';
import ConversationList from './RightSidebar/ConversationList';
import NoConvo from './RightSidebar/NoConvo';
import { data } from '../utils/users';
function App(props) {
  const [contacts, setContacts] = useState([]);
  const [searchfield, setSearchField] = useState('');
  const { dispatch } = props;
  // fetch contacts from
  useEffect(() => {
    // dispatch action to store contacts in state
    dispatch(updateContacts(data.profile.contacts));
    setContacts(props.contacts);
  }, [dispatch, props]);
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
      <Container fluid style={styles.app}>
        <Row>
          <Col style={styles.leftSidebar} className="leftSidebar">
            <Row>
              <Row>
                <h2 style={{ color: 'white' }}>Profile Component</h2>
              </Row>
              <Row style={{ margin: 'auto' }}>
                <SearchBar searchChange={onSearchChange} />
              </Row>
            </Row>
            <Row style={styles.contactList}>
              <ContactList contacts={filteredContacts} />
            </Row>
          </Col>
          <Col>
            <Switch>
              <Route
                path="/conversations/:id"
                render={(props) => (
                  <ConversationList
                    {...props}
                    contacts={contacts}
                    setContacts={setContacts}
                  />
                )}
              />
              <Route component={NoConvo} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
}
function mapStateToProps(state) {
  return {
    contacts: state.contacts,
  };
}
const styles = {
  leftSidebar: {
    backgroundColor: '#3b4044',
    borderRight: '1px solid grey',
    padding: '10px',
    zIndex: '1',
    top: '0',
    bottom: '0',
    maxWidth: '40vw',
  },
};
export default connect(mapStateToProps)(App);
