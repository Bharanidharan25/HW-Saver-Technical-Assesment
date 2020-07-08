import React, { Component } from 'react';
import {connect} from "react-redux";

class Home extends Component {
    
    render() {
        return (
            <div className="homeImg">
               <img src = {this.props.home.url} alt="test"/>
                {this.props.home.title && 
                  <div className="imgContainer">
                    <h3>{this.props.home.title}</h3>
                    <p>{this.props.home.explanation}</p>
                  </div>}
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
      home:state.home
    }
  }
export default connect(mapStateToProps)(Home);