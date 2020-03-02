import React, {Component} from 'react';
import PicturesListComponent from './PicturesListComponent';
import {Linking} from 'react-native';

class PicturesListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      data: [],
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    const url = 'https://picsum.photos/v2/list';
    this.setState({
      isLoading: true,
    });
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.setState({
          data: response,
          isLoading: false,
        });
      })
      .catch(() => {
        this.setState({
          error: true,
        });
      });
  };

  sortDataByAuthor = () => {
    this.setState({
      data: this.state.data.sort(this.compareAuthors),
    });
  };

  sortDataById = () => {
    this.setState({
      data: this.state.data.sort(this.compareIds),
    });
  };

  compareIds = (first, second) => first.id - second.id;

  compareAuthors = (first, second) => {
    if (first.author > second.author) {
      return 1;
    } else {
      return -1;
    }
  };

  loadInBrowser = (url) => {
    Linking.openURL(url).catch(err =>
      console.error("Couldn't load page", err),
    );
  };

  render() {
    return (
      <PicturesListComponent
        fetchData={this.fetchData}
        sortDataByAuthor={this.sortDataByAuthor}
        sortDataById={this.sortDataById}
        data={this.state.data}
        isLoading={this.state.isLoading}
        loadInBrowser={this.loadInBrowser}
      />
    );
  }
}

export default PicturesListContainer;
