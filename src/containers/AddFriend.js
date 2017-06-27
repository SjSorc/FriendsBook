import React from 'react';
import { connect } from 'react-redux';
import { Navbar, Button, FormControl, FormGroup } from 'react-bootstrap';
import AddFriend from '../actions/AddFriendAction';

let AddFriendForm = ({ dispatch }) => {
    let input;
    return (
        <Navbar.Form pullRight>
            <FormGroup>
                <FormControl type="text" inputRef={ref => { input = ref; }} placeholder="Type Name" />
            </FormGroup>
            {' '}
            <Button type="submit" bsStyle="primary" onClick={() => { dispatch(AddFriend(input.value)); input.value='';}}> Add Friend </Button>
        </Navbar.Form>
    );
}

AddFriendForm = connect()(AddFriendForm);
export default AddFriendForm;