// Fallback page if the page is not loaded properly
import React, { Component } from 'react';

class Fallback extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>An error has occurred. Please try again later.</h1>;
    }

    return (
      <div className="fallback">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }
}

export default Fallback;
