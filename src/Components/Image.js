import React, { Component } from 'react'
import {startGetImages} from "../Redux/Action/imageAction"
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component';
import {Loader,Input,InputGroup,Icon, Notification} from 'rsuite'

class Image extends Component {
    state={
        photo:"",
        isCustomSearch: false,
        totalPages:0,
        currentPage:0,
        images: []
    }

    componentDidMount(){
        axios.get('https://api.unsplash.com/photos/random?client_id=JlDCUbvlmvUlPco7QLnIQRf13P4lMLz2zy7ymY3dJgI&count=10')
            .then(response=>{
                const images = response.data
                this.setState({images})
            })
            .catch(err => {
                Notification['error']({
                    title: 'error',
                    description: err.message
                })
            })
    }

    inputHandler = (value)=>{
        this.setState({photo:value})
    }

    handleSubmit = ()=>{
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${this.state.photo}&client_id=JlDCUbvlmvUlPco7QLnIQRf13P4lMLz2zy7ymY3dJgI`)
        .then(response=>{
            const images = response.data
            this.setState({totalPages: images.total_pages,currentPage:1, isCustomSearch:true, images: images.results})
        })
        .catch(err => {
            Notification['error']({
                title: 'error',
                description: err.message
            })
        })
    }

    handleSelect = (eventKey) => {
        if(eventKey !== this.state.activePage){
            this.props.dispatch(startGetImages(this.state.photo,this.state.activePage))
            this.setState({ activePage: eventKey, isLoading:true });
        }
    }

    fetchImages = () => {
        if(this.state.isCustomSearch && this.state.totalPages>this.state.currentPage){
            const url=`https://api.unsplash.com/search/photos?page=${this.state.currentPage+1}&query=${this.state.photo}&client_id=JlDCUbvlmvUlPco7QLnIQRf13P4lMLz2zy7ymY3dJgI`
            axios.get(url)
            .then(response=>{
                const images = response.data
                this.setState({currentPage:this.state.currentPage+1, images: [...this.state.images, ...images.results]})
            })
            .catch(err => {
                Notification['error']({
                    title: 'error',
                    description: err.message
                })
            })
        }else if(!this.state.isCustomSearch){
            axios.get('https://api.unsplash.com/photos/random?client_id=JlDCUbvlmvUlPco7QLnIQRf13P4lMLz2zy7ymY3dJgI&count=10')
            .then(response=>{
                const images = response.data
                this.setState({images: [...this.state.images, ...images]})
            })
            .catch(err => {
                Notification['error']({
                    title: 'error',
                    description: err.message
                })
            })
        }
    }

    render() {
        return (
            <div style={{marginTop: '80px'}}>
                <InputGroup size='lg' style={{margin:"30px auto 0px auto", width: window.innerWidth>600 ? '40%': '60%'}}>
                    <Input type="text" placeholder= "Search" name="photo" value={this.state.photo} onChange={(value) => this.inputHandler(value)}/>
                    <InputGroup.Addon style={{cursor:'pointer'}} onClick={this.handleSubmit}>
                        <Icon icon="search" />
                    </InputGroup.Addon>
                </InputGroup>
                {this.state.images.length >0 &&
                <InfiniteScroll
                    dataLength={this.state.images.length}
                    next={this.fetchImages}
                    hasMore={true}
                    loader={<Loader size='md' speed="slow"/>}
                    style={{overflow: 'hidden'}}
                >
                    <div className='imageGrid'>
                        {this.state.images.map((image,index)=>{
                            return(
                                <a key={image.id+index} href={image.urls.full} target='_blank' rel="noopener noreferrer">
                                    <img src={image.urls.thumb} alt={image.alt_description} />
                                </a>
                            )
                        })}
                    </div>
                </InfiniteScroll>
                }
            </div>
        )
    }
}

export default Image
