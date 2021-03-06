// @flow
import React from 'react';
import { connect } from 'react-redux';
import loc from 'infra/service/location';
import GroupRoute from './Route';

export const Route = GroupRoute;

const mapStateToProps = state => ({
  user: state.user,
  posts: state.group.feeds,
});

const checkValidity = props => {
  const { user, posts } = props;
  const loggedIn = user.loggedIn;

  if (!loggedIn && posts.length < 1) loc.push('/welcome');
};

class Group extends React.Component {

  componentDidMount() {
    checkValidity(this.props);
  }

  componentWillReceiveProps(nextProps) {
    checkValidity(nextProps);
  }

  render(){
    const { children } = this.props;

    return children;
  }

}

export default connect(mapStateToProps)(Group);
