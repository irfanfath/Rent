import React, { Component } from 'react';
import axios from "axios";
import ListStatus from '../Component/ListData/ListStatus';

class StatusPesanan extends Component{
    state = {
        post: []
    }

    getPostAPI = () => {
        axios.get('http://localhost:3001/wishlist')
        .then((result)=>{
            this.setState({
                post: result.data
            })
        })
    }

    componentDidMount(){
        this.getPostAPI();
    }

    render(){
       return(
            <div className="section">
                <div className="section no-padding-top">
                    <div className="wrapper">
                        <div className="contacts">
                            <div className="form-wishlist">
                                <h4 className="contact-heading">Status Pesanan Anda : </h4>
                                <div>
                                    {
                                        this.state.post.map(post => {
                                            return <ListStatus key={post.id}
                                            data={post}
                                            />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       )
    }
}

export default StatusPesanan