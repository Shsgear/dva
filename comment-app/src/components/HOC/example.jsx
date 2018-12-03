import React from 'react';

export default (WrapperedCpmponent, name) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: null,
      }
    }
    componentWillMount() {
      const data = localStorage.getItem(name);
      this.setState({ data });
    }
    render() {
      return <WrapperedCpmponent data={ this.state.data }></WrapperedCpmponent>
    }
  }
  return NewComponent;
};
