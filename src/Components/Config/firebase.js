import React, { Component } from 'react';
import {Switch, Route, Link, BrowserRouter} from "react-router-dom";
import fire from "./fire";
import Home from "../Home";
import Login from "../Login";
import Image from "../Image";
import Post from "../Post";
import Album from "../Album";
import DisplayPost from '../DisplayPost';
import {Navbar, Nav, Icon, Notification} from 'rsuite'

export default class FSirebase extends Component {
    state = {
        user:{}
    }
  
    componentDidMount(){
      this.authListener()
    }
  
  
    authListener = ()=>{
      fire.auth().onAuthStateChanged((user)=>{
        if(user){
          this.setState({user})
        }else{
          this.setState({user:null})
        }
      })
    }

    signout = ()=>{
      fire.auth().signOut();
      Notification['success']({
        title: 'success',
        description: 'Logged out Successfully'
      })
    }

    render() {
        return (
            <div>
                {this.state.user ? (
                  <>
                    <BrowserRouter>
                      <Navbar className='navbarCustomStyles'>
                        <Navbar.Body>
                          <Nav>
                            <Nav.Item componentClass={Link} icon={<Icon icon="home" />} to="/">Home</Nav.Item>
                            <Nav.Item componentClass={Link} to="/image">Image</Nav.Item>
                            <Nav.Item componentClass={Link} to="/post">Posts</Nav.Item>
                            <Nav.Item componentClass={Link} to="/album">Albums</Nav.Item>
                          </Nav>
                          <Nav pullRight>
                            <Nav.Item icon={<Icon icon="sign-out" />} onClick={this.signout}>Sign Out</Nav.Item>
                          </Nav>
                        </Navbar.Body>
                      </Navbar>
                      <div className='containerCustom'>
                      <Switch>
                          <Route path="/" component={Home} exact={true}/>
                          <Route path="/image" component={Image}/>
                          <Route path="/post" component={Post} exact={true}/>
                          <Route path="/post/:id" component={DisplayPost}/>
                          <Route path="/album" component={Album}/>
                      </Switch>
                      </div>
                  </BrowserRouter>
                </>
                ) : <Login/>}
            </div>
        )
    }
}
