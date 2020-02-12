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

  render() {
    return (
      <PicturesListComponent
        fetchData={this.fetchData}
        data={this.state.data}
        isLoading={this.state.isLoading}
      />
    );
  }
}

export default PicturesListContainer;
