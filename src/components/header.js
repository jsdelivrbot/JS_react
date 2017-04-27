import React , { Component } from 'react';
import { Link } from 'react-router'; /* koristi se za rute. ZA HOME zasticena ruta,
direktno ide na Home. ZA RESOURSEs zasticena ruta, ako nisu prijavljeni, izbacuje ga*/
import {connect} from 'react-redux';
import * as actions from '../actions';


class Header extends Component {

  authButton(){

    if(this.props.authentcated){
      return <button onClick={ () => this.props.authentcate(false)} > Sign Out </button>; //odjava
    }

    return <button onClick={ () => this.props.authentcate(true)} > Sing In </button>; //logovanje

  }

  render () {
    return(
      <nav className = "navbar navbar-light">
          <ul className= "nav navbar-nav">
            <li className="nav-item">
              <Link to="/">Home</Link>
              </li>
            <li className="nav-item">
            <Link to="/resources">Resources</Link>
              </li>
            <li className="nav-item">
            {this.authButton()}
              </li>
          </ul>
      </nav>
    );
  }
}

function mapStateToProps(state){
  return{ authentcated: state.authentcated};
}

export default connect(mapStateToProps, actions)(Header);
