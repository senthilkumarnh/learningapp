import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default class ApplicationNavigation extends React.Component
{ 
    render()
    { 
        return (<Navbar bg="light" variant="light">
            <Navbar.Brand href="/home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link> 
            </Nav> 
        </Navbar>);
    }
}