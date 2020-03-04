import React, {Component} from 'react';
import {Linking} from 'react-native';
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

  sortDataByAuthor = () => {
    this.setState({
      data: this.props.data.sort((first, second) => {
        return (first.author > second.author) ? 1 : -1;
      }),
    });
  };

  sortDataById = () => {
    this.setState({
      data: this.props.data.sort((first, second) => first.id - second.id),
    });
  };

  loadInBrowser = (url) => {
    Linking.openURL(url).catch(err =>
      console.error('Couldn\'t load page', err),
    );
  };

  render() {
    return (
      <PicturesListComponent
        fetchData={this.props.fetchData}
        sortDataByAuthor={this.sortDataByAuthor}
        sortDataById={this.sortDataById}
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
