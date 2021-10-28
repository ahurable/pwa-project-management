import React from 'react';

export default function withData(WrappedComponent) {
  return class extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        data: [],
        loading: true,
        error: ``
      }
    }

    componentDidMount(){
      
      try {
        const data = this.props.dataSource;
        this.setState({
          data: data,
          loading: false
        })
      } catch(error) {
        this.setState({
          loading: false,
          error: error.message
        })
      }
    }

    render() {

      return (
        <WrappedComponent data={this.state.data} loading={this.state.loading} error={this.state.error} { ...this.props } />
      )
    }

  }
}