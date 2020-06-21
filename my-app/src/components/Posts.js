import React, { Component } from 'react'

export default class Posts extends Component {

    state ={
        posts : []
    }
    async componentDidMount(){
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await resp.json();
        console.log(data)
        this.setState({posts : data})

    }

    render() {
        return (
            <div>
                <h1>Post</h1>
                <h2>Obtención de datos externos</h2>
               {
                   this.state.posts.map(post => {
                       return (
                           <div key={post.id}>
                               <h1>{post.title}</h1>
                               <p>{post.body}</p>
                           </div>
                       )
                   })
               }
            </div>
        )
    }
}
