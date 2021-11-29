import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => (
  <div>
    <Navbar variant="dark" bg="dark">
      <Container>
        <Link to="/"><Navbar.Brand>Movies</Navbar.Brand></Link>
      </Container>
    </Navbar>
  </div>
);

export default Header;
