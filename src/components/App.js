import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { fetchContacts } from '../actions/contact';
import './stylesheets/App.css';
import SearchBar from './LeftSidebar/SearchBar';
import ContactList from './LeftSidebar/ContactList';
import ConversationList from './RightSidebar/ConversationList';
import NoConvo from './RightSidebar/NoConvo';
function App(props) {
  const [contacts, setContacts] = useState([]);
  const [searchfield, setSearchField] = useState('');
  // fetch contacts from
  useEffect(() => {
    // dispatch action to store contacts in state
    props.dispatch(fetchContacts());
    setContacts(props.contacts);
  }, [props]);
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
            <Router>
              <Switch>
                <Route
                  exact
                  path="/conversations/:id"
                  render={(props) => <ConversationList {...props} />}
                />
                <Route component={NoConvo} />
              </Switch>
            </Router>
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
