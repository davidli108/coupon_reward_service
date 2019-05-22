// @flow
import * as React from 'react';
import { withRouter, type Location } from 'react-router-dom';

type ScrollToTopProps = {
  children: React.Node,
  location: Location,
};

class ScrollToTop extends React.Component<ScrollToTopProps> {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);
