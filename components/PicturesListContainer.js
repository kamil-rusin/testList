import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import fetchDataAction from '../actions/fetchData';
import PicturesListComponent from './PicturesListComponent';


class PicturesListContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {fetchData} = this.props;
    fetchData();
  }

  sortDataByParam = (key) => {
    this.setState({
      data: this.props.data.sort(this.compareValues(key)),
    });
  };

  compareValues = (key) => {
    return (a, b) => {
      return (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) ? 0
        : (key === 'id') ? a[key] - b[key]
          : (a[key].toUpperCase() > b[key].toUpperCase()) ? 1 : -1;
    };
  };

  loadInBrowser = (url) => {
    this.props.nav.push('WebContent', {url: url});
  };

  render() {
    return (
      <PicturesListComponent
        fetchData={this.props.fetchData}
        sortDataByParam={(arg) => this.sortDataByParam(arg)}
        data={this.props.data}
        pending={this.props.pending}
        loadInBrowser={this.loadInBrowser}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.listReducer.data,
    pending: state.listReducer.pending,
    error: state.listReducer.error,
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchData: fetchDataAction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PicturesListContainer);
