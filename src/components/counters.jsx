import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            { id:1, value:4 },
            { id:2, value:0 },
            { id:3, value:0 },
            { id:4, value:2 }
        ]
    }
    handleIncrement = counter => {
        const counters = [...this.state.counters];  //spread op
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };  //cloned
        counters[index].value++;
        this.setState({counters});
    }

    handleAdd = () => {
        const counters = [...this.state.counters];  //spread op
        const counters1 = this.state.counters.push({ id:0, value:0 });
        this.setState({counters});
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({counters});
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id != counterId);
        this.setState({counters});
    };

    render() {
        return(<div>
            <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">
                Reset
            </button>
            <button onClick={this.handleAdd} className="btn btn-primary btn-sm m-2">
                Add
            </button>
            { this.state.counters.map(counter => <Counter key={ counter.id }
             onDelete={this.handleDelete} onIncrement={this.handleIncrement} counter={counter} />) }
        </div>);
    }
}

export default Counters;