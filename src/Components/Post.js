import React, { Component } from 'react'
import {connect} from "react-redux"
import {Pagination} from 'rsuite';
import DisplayPost from "./DisplayPost"
import {Panel} from 'rsuite';

class Post extends Component {

    state = {
        activePage:1,
        modalIsOpen:false,
        postToDisplay:null
    }

    handleSelect = (eventKey) => {
        this.setState({ activePage: eventKey });
    }

    toggleModalClose = () =>{
        this.setState({modalIsOpen:false})
    }

    render() {
        return (
            <div style={{width:"75%",margin:"70px auto 0 auto"}}>
                {this.props.posts.length>0 && this.props.posts.slice((this.state.activePage-1)*10,this.state.activePage*10).map((post)=>{
                    return(
                    <Panel tabIndex='0' className='my-3 postItem' shaded header={<b>{post.title}</b>} onClick={() => this.setState({modalIsOpen:true, postToDisplay:post})} key={post.id}>
                            {post.body}
                        </Panel>
                    )
                })}

                <div style={{display:"flex",justifyContent:"space-around",marginBottom:"2rem"}}>
                    <Pagination
                        prev
                        next
                        first
                        last
                        ellipsis
                        boundaryLinks
                        pages={10}
                        maxButtons={5}
                        activePage={this.state.activePage}
                        onSelect={this.handleSelect}
                    />
                </div>

                {this.state.modalIsOpen && <DisplayPost show postToDisplay={this.state.postToDisplay} onHide={this.toggleModalClose}/>}
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
      posts:state.posts,
      user:state.user
    }
  }

export default connect(mapStateToProps)(Post)
