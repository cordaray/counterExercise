import React, {Component} from 'react';

class Counter extends Component {

    render(){

        const {counter,onIncrement,onDecrease,onDelete} = this.props;

        return(
            <div>
                <span className="badge badge-primary m-1">{counter.value}</span>
                <button className="btn btn-warning m-1" onClick={onIncrement}>+</button>
                <button className="btn btn-secondary m-1" disabled={counter.value === 0 ? 'disabled' : ''} onClick={onDecrease}>-</button>
                <button className="btn btn-danger m-1" onClick={onDelete}>x</button>
            </div>
        );

    }

}

export default Counter;