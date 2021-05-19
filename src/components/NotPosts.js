import React from "react";

class NotPosts extends React.Component {
  constructor() {
    super();
    this.state = {
      albums: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    const apiUrl = "https://jsonplaceholder.typicode.com/photos";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ albums: data, isLoading: false });
      });
  }
  render() {
    if (this.state.isLoading === true) {
      return <h1>lataa...</h1>;
    }

    return (
      <ul>
        {this.state.albums.slice(0, 4).map((album) => (
          <div>
            <img src={album.thumbnailUrl}></img>
            <h>{album.title}</h>
          </div>
        ))}
      </ul>
    );
  }
}
export default NotPosts;
