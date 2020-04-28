import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getData } from "../actions/getData";
import {
  isDataLoadedSelector,
  getData as getDataSelector
} from "../selector/getData";

class Container extends PureComponent {
  componentDidMount() {
    const { getData } = this.props;
    getData();
  }

  render() {
    const { data, isDataLoaded } = this.props;
    console.log(isDataLoaded);
    console.log(data);
    return <div>New App</div>;
  }
}

function mapStateToProps(state) {
  return {
    data: getDataSelector(state),
    isDataLoaded: isDataLoadedSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
