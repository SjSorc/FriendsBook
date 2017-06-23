import React from 'react';
import { Navbar, Button, FormControl, FormGroup } from 'react-bootstrap';

const AppNav = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">FriendsBook</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Navbar.Form pullRight>
                <FormGroup>
                    <FormControl type="text" placeholder="Type Name" />
                </FormGroup>
                {' '}
                <Button type="submit" bsStyle="primary">Add Friend</Button>
            </Navbar.Form>
        </Navbar.Collapse>
    </Navbar>
);

export default AppNav;