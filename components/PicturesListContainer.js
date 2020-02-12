import React, {Component} from 'react';
import PicturesListComponent from './PicturesListComponent';

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

  render() {
    return (
      <PicturesListComponent
        fetchData={this.fetchData}
        sortDataByAuthor={this.sortDataByAuthor}
        sortDataById={this.sortDataById}
        data={this.state.data}
        isLoading={this.state.isLoading}
      />
    );
  }
}

export default PicturesListContainer;
