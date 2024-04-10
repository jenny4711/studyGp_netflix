import React ,{useState}from 'react';
import { Button ,Container,Form,Nav,Navbar,NavDropdown} from 'react-bootstrap';
import {Outlet , useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import './AppLayout.css'
const AppLayout = () => {
  const [keyword,setKeyword]=useState()
  const navigate = useNavigate()
  const searchByKeyword =(evt)=>{
evt.preventDefault()
navigate(`/movies?q=${keyword}`)
setKeyword('')
//url 바꿔주기

  }
  return (
    <div className='AppLayout' >
    <Navbar bg="dark" variant="dark" expand="lg">
    <Container fluid>
    <Navbar.Brand href="#">
          <img
            width={80}
            src="https://cdn.vox-cdn.com/thumbor/SEEvZdiXcs0CS-YbPj2gm6AJ8qc=/0x0:3151x2048/1400x1400/filters:focal(1575x1024:1576x1025)/cdn.vox-cdn.com/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png"
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
        <Form className="d-flex" onSubmit={searchByKeyword}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={keyword}
            onChange={(evt)=>setKeyword(evt.target.value)}
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
