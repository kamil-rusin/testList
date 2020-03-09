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
    let compareValues;
    if (key === 'id') {
      compareValues = (first, second) => {
        return first.id - second.id;
      };
    } else if (key === 'author') {
      compareValues = (first, second) => {
        return (first.author > second.author) ? 1 : -1;
      };
    }

    this.setState({
      data: this.props.data.sort(compareValues),
    });
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
        error={this.props.error}
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
