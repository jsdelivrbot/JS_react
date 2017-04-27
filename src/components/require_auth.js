import React, {Component} from 'react';
import {connect} from 'react-redux';


export default function(ComposedComponent){ // export function koja prima komponentu ComposedComponent
  class Authentication extends Component {

      static contextTypes = {
        router: React.PropTypes.object
}

componentWillMount() {
  if(!this.props.authentcated) { // ako korisnik nije prijavljen onda hocu da navodi korisnika na root route
/* ako je korisnik prijavljen moze da pristupi strani resources( samim tim da vidi strannu u URL),
 ako nije prijavljen sadrzaj strane resources nije vidljiv za korisnika*/
  this.context.router.push('/') ;//sakirva reducers u URL
}
}

componentWillUpdate(nextProps){ /*ako se korisnik odjavi automatski sakriva sadrzaj strane resources*/
  if(!nextProps.authentcated){
    this.context.router.push('/');
  }
}

    render() {
      // console.log(this.context); // router object
    //  console.log(this.props.authentcated); provera da li je korisnik prijavljen ili ne( true/false)
    //  console.log('Rendering', ComposedComponent);
     //console.log(this.props.resources)  => resourceList
      return <ComposedComponent {...this.props} />
    }
  }

function mapStateToProps(state){
  return {authentcated: state.authentcated};
}

  return connect(mapStateToProps)(Authentication);
}


/*

 In some other location ... not in this file...
we want to use this HOC


 import Authentication; //this is my HOS
 import Resources; //this is the cpomponent i want to warp

 const ComposedComponent = Authentication(Resources);

 //in some render method...

 <ComposedComponent resources={resourceList}/>*/
