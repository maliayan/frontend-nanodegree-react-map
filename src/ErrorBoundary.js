import React from 'react'

// Component for error handling

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      alert ( 'Something went wrong, sorry!' );
    }
    return this.props.children;
  }
}

export default ErrorBoundary
