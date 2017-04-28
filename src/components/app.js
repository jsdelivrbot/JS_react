import React, { Component } from 'react';
import CommentBox from './comment_box';
import CommentList from './comment_list';
import {connect} from 'react-redux';
import Header from './header';
import UserList from './user_list';

//this prolazi kroz childredn i pokazuje ih
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <UserList />
          <CommentBox />
          <CommentList />
          {this.props.children}

      </div>
    );
  }
}

/*
function mapStateToProps(state) {
  return {posts: state.posts};
}

 export default connect(mapStateToProps)(App); higher order component ( connect)

 connect komunicira sa Provider, dok se store nalazi unutar Provider.
 Provider javlja kada se promeni state connect-u
*/
