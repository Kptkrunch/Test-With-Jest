import React, { Component } from 'react';
import { FormLabel, Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import {  } from 'react-bootstrap';

class Gift extends Component {
    constructor() {
        super();
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
            </div>
        );
    };
};

export default Gift;