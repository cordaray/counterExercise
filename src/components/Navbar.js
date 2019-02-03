import React, {Component} from 'react';

class Navbar extends Component {

    render(){

        return(
            <nav className="navbar navbar-light bg-light">
                <a href="#" className="navbar-brand">{"COUNTERS: "+this.props.counters.length}</a>
            </nav>
        );

    }

}

export default Navbar;