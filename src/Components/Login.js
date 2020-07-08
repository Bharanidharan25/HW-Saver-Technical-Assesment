import React, { Component } from 'react'
import fire from './Config/fire'
import {Notification} from "rsuite"

export default class Login extends Component {
    state={
        email:"",
        password:"",
        isRegistering:false
    }

    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }

    login = (event) =>{
        event.preventDefault()
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            Notification['success']({
                title: 'success',
                description: 'Logged in Successfully'
            })
        }).catch((err)=>{
            Notification['error']({
                title: 'error',
                description: err.message
            })
        })
    }

    signup = (event)=>{
        event.preventDefault()
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(u => {
            Notification['success']({
                title: 'success',
                description: 'Registered and Logged in Successfully'
            })
        })
        .catch(err => 
                Notification['error']({
                    title: 'error',
                    description: err.message
                })
            )
    }




    render() {
        return (
            <div>
                    <section id="cover" className="min-vh-100">
                    <div id="cover-caption">
                    <div className="container">
                    <div className="row text-white">
                    <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                    <h2 className="display-0.5 py-2 text-truncate">{this.state.isRegistering ? 'Sign Up' : 'Login'}</h2>
                        <div className="px-2">
                        <form id="form-style" className="justify-content-center" onSubmit={this.handleSubmit}>
                            <div className="form-group"> 
                                <label  className="sr-only" htmlFor="email" >Email: </label>
                                <input placeholder="Email" id="email" className="form-control" type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label  className="sr-only" htmlFor="pass">Password : </label>
                                <input id="pass" placeholder="Password" className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                            </div>
                            <div>
                                {this.state.isRegistering !== true && <a href="# " onClick={()=>this.setState({isRegistering:true})} className="float-left" ><ins style={{textDecoration:"none",color:"white"}}>Create new account</ins></a>}
                                {this.state.isRegistering && <a href="# " onClick={()=>this.setState({isRegistering:false})} className="float-left" ><ins style={{textDecoration:"none",color:"white"}}>Login</ins></a>}
                                <input type="submit" className="btn btn-primary btn-sm float-right" onClick={this.state.isRegistering ? this.signup : this.login} />
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </section>
                </div>
        )
    }
}
