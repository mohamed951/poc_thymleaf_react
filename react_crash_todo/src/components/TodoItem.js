import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const {title, completed } = this.props.todo;
        return (
            <div>
                <h1 style={{textDecoration: (completed?'line-through':'none') }}>{title}</h1>
            </div>
        )
    }
}
