import React from "react";

class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    const apiUrl = "https://my-json-server.typicode.com/typicode/demo/posts";
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ posts: data, isLoading: false });
      });
  }
  render() {
    if (this.state.isLoading === true) {
      return <h1>lataa...</h1>;
    }

    return (
      <ul>
        {this.state.posts.map((post) => (
          <h1 key={post.id}>{post.title}</h1>
        ))}
      </ul>
    );
  }
}
export default Posts;
