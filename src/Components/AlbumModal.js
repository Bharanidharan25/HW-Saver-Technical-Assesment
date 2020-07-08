import React, { Component } from 'react'
import {Drawer,Button,Pagination} from "rsuite"
import {connect} from "react-redux"


class AlbumModal extends Component {

    state={
        index:this.props.index
    }

    handleSelect = (eventKey) => {
        this.setState({ index: eventKey-1 });
    }
    render() {
        return (

            <div className="albumModal">
                <Drawer
                size={window.innerWidth>600 ? 'md': 'lg'}
                placement={window.innerWidth>600 ? 'right': 'bottom'}
                show={this.props.show}
                onHide={this.props.onHide}
                className='drawer'
                >
                    <Drawer.Header>
                        <Drawer.Title>={this.props.photos[this.state.index].title}</Drawer.Title>
                    </Drawer.Header>
                    <Drawer.Body style={{textAlign:"center"}}>
                        <img style={{width:"50%",height:"60%",margin:"auto"}} src={this.props.photos[this.state.index].url} alt={this.props.photos[this.state.index].title}/>
                        <div style={{display:"flex",justifyContent:"space-around",marginTop:"6rem"}}>
                            <Pagination
                                prev
                                next
                                first
                                last
                                ellipsis
                                boundaryLinks
                                pages={50}
                                maxButtons={10}
                                activePage={this.state.index+1}
                                onSelect={this.handleSelect}
                            />
                        </div>
                    </Drawer.Body>
                    <Drawer.Footer>
                        <Button style={{marginBottom: '10px'}} onClick={this.props.onHide} appearance="primary">
                            Cancel
                        </Button>
                    </Drawer.Footer>
                </Drawer>
                            
                            
            </div>
        )
    }
}


const mapStateToProps =(state)=>{
    return{
      photos:state.photos
    }
  }

export default connect(mapStateToProps)(AlbumModal)