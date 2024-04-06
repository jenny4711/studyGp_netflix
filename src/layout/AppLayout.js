import React from 'react';
import { Button ,Container,Form,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import {Outlet} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import './AppLayout.css'
const AppLayout = () => {
  return (
    <div className='AppLayout' >
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container fluid>
    <Navbar.Brand href="#">
          <img
            width={100}
            src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
          />
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/movies">Movies</Nav.Link>
          
         
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-danger"><FontAwesomeIcon icon={faMagnifyingGlass} /></Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Outlet/>
  </div>
  );
}

export default AppLayout;