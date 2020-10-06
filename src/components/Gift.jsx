import React, { Component } from 'react';
import { FormLabel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';

class Gift extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: '',
            present: ''
        }
    }
    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <FormLabel>Person</FormLabel>
                        <FormControl 
                            className="input-person"
                            onChange={ event => this.setState({ person: 'Uncle' })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Present</FormLabel>
                        <FormControl 
                            className="input-present"
                            onChange={ event => this.setState({ present: 'Golf Clubs' })}
                        />
                    </FormGroup>
                </Form>
                <Button 
                    className="btn-remove" 
                    onClick={() => this.props.removeGift(this.props.gift.id)}
                >
                Remove Gift
                </Button>
            </div>
        );
    };
};

export default Gift;