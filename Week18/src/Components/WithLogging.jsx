import React, { Component } from "react";

const WithLogging = (Component) => {
  return class extends React.Component {
    constructor(props){
        super()
        //console.log(props.list)
        this.books = props.list
        }
    render(){
        console.log('Render child component : ', Component)
        return(
            <Component books={this.books} />
        )
    }
  }
};

export default WithLogging;
