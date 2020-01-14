import React, { Component } from 'react';
import axios from 'axios';

// import { Container } from './styles';

export default class Blog extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        axios.defaults.baseURL = 'https://rawer.com.br/api/api';
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=UTF-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.get(`/post/read.php`)
        .then(res => {
            const posts = res.data;
            this.setState({ posts });
          })
      }
  render() {
    return (
        <div className="container absolute p-12">
            <ul>
                {this.state.posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
  }
}
