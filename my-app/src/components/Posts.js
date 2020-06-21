import React, { Component } from 'react'

export default class Posts extends Component {
    async componentDidMount(){
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
        console.log(resp)
    }

    render() {
        return (
            <div>
                <h1>Post</h1>
            </div>
        )
    }
}
