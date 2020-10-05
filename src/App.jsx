import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './components/Gift.jsx';

class App extends Component {
    constructor() {
        super();
        this.state = {
            gifts: []
        }
        this.addGift = this.addGift.bind(this);
    }

    addGift() {
        const { gifts } = this.state;
        const ids = this.state.gifts.map( gift => gift.id );
        const max_id = ids.length > 0 ? Math.max(...ids) : 0;
        gifts.push({ id: max_id + 1 })
        this.setState({ gifts })
    }

    render() {
        return (
            <div>
                <h1>Gift Giver</h1>
                <div className="gift-list">
                    {
                        this.state.gifts.map((gift, i) => {
                            return (
                                <Gift key={i} />
                            )
                        })
                    }
                </div>
                <Button className="btn-add" onClick={this.addGift}>Add Gift</Button> 
            </div>
        )
    }
}

export default App;

