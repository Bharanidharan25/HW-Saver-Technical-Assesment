import React, { Component } from 'react'
import {connect} from "react-redux"
import {Icon, Sidenav, Nav, Panel, Grid} from 'rsuite';
import {startGetPhotos} from "../Redux/Action/photoAction"
import AlbumModal from "./AlbumModal"

class Album extends Component {

    state={
        isModalOpen : false,
        currentIndex: null
    }

    getPhotos = (id) => {
        this.props.dispatch(startGetPhotos(id))
    }

    showPhoto = (index)=>{
        this.setState({isModalOpen:true , currentIndex:index})
    }

    render() {
        return (
            <div>
                <div style={{ width: 250, float:'left', height:'92vh', overflowY:'scroll' }}>
                    <Sidenav activeKey="1">
                        <Sidenav.Body>
                        <Nav>
                        {this.props.album.length && this.props.album.map((item,index)=>{
                        return(
                            <Nav.Item eventKey={index+1} onClick={()=>this.getPhotos(item.id)} icon={<Icon icon="image"/>} key={item.id}>
                                {item.title}
                            </Nav.Item>
                        )
                        })}
                        </Nav>
                        </Sidenav.Body>
                    </Sidenav>
                </div>
                <div style={{height:'92vh',overflowY:"scroll", width: 'calc(100% - 250px)' ,float:'right'}}> 
                    <Grid>
                    {this.props.photos.length>0 && this.props.photos.map((photo,index) =>{
                        return(
                            <Panel className='albumGridItem' key={photo.id} shaded bordered bodyFill tabIndex='0' onClick={()=>this.showPhoto(index)} header={<b>{photo.title}</b>}>
                                <Panel>
                                    <img src={photo.thumbnailUrl} alt={photo.title}/>
                                </Panel>
                            </Panel>
                        )
                    })}
                    </Grid>
                </div>

                {this.state.isModalOpen && <AlbumModal index={this.state.currentIndex} onHide={() => this.setState({isModalOpen:false})} show={this.state.isModalOpen} />}
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
      album:state.album,
      photos:state.photos
    }
  }
export default connect(mapStateToProps)(Album);