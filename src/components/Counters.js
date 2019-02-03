import React, {Component} from 'react';
import Counter from './Counter';

class Counters extends Component {

    render(){

        const {counters, onIncrement, onDelete, onDecrease } = this.props;

        return (
            <div>
                {counters.map(counter => <Counter key={counter.id} counter={counter} onDelete={()=>onDelete(counter.id)} onIncrement={()=>onIncrement(counter)} onDecrease={()=>onDecrease(counter.id)}/>)}
            </div>
        );

    }

}

export default Counters;