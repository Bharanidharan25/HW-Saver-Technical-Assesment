import React, { Component } from 'react'
import {Drawer, Button} from 'rsuite';
import {connect} from "react-redux"
import {startGetComments} from "../Redux/Action/commentAction"
import {PanelGroup, Panel} from 'rsuite';

class DisplayPost extends Component {

    componentDidMount(){
        this.props.dispatch(startGetComments(this.props.postToDisplay.id))
    }

    componentDidUpdate(prevProps){
        if(prevProps.comments.length !== this.props.comments.length){
            this.setState()
        }
    }

    render() {
        return (
            <Drawer
                size={window.innerWidth>600 ? 'md': 'lg'}
                placement={window.innerWidth>600 ? 'right': 'bottom'}
                show={this.props.show}
                onHide={this.props.onHide}
                className='drawer'
            >
            <Drawer.Header>
                <Drawer.Title>{this.props.postToDisplay.title}</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
                <p>
                    {this.props.postToDisplay.body}
                </p>
            
                <h5 className='my-3 mt-5' style={{marginLeft:'7%'}}>Comments</h5>
                <div className="comments">
                <PanelGroup>
                    {this.props.comments.map((comment)=>{
                    return (
                        <Panel key={comment.id} header={comment.name}>
                            <p>{comment.body}</p><br/>
                            <em>- {comment.email}</em>
                        </Panel>
                    )
                })}
                </PanelGroup>
                </div>
            </Drawer.Body>
            <Drawer.Footer>
                <Button style={{marginBottom: '10px'}} onClick={this.props.onHide} appearance="primary">
                    Cancel
                </Button>
            </Drawer.Footer>
        </Drawer>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
      posts:state.posts,
      comments:state.comments
    }
  }

export default connect(mapStateToProps)(DisplayPost)