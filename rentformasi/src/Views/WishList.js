import React, { Component } from 'react';
import axios from "axios";
import Recipe from '../Component/Recipe/Recipe';
import ListWish from '../Component/ListData/ListWish';

class WishList extends Component{
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

    // componentDidMount(){
    //     this.getPostAPI();
    // }

    componentDidMount(){
        this.getPostAPI();
        //session kalo belum login
        const session = localStorage.getItem('session')
        if (session !== "active"){
            window.location.href = "#/"
        }
    }

    render(){
       return(
            <div className="section">
                <div className="section no-padding-top">
                    <div className="wrapper">
                        <div className="contacts">
                            <div className="form-wishlist">
                                <h4 className="contact-heading">Daftar Wish List Anda : </h4>
                                <div>
                                    {
                                        this.state.post.map(post => {
                                            return <ListWish key={post.id}
                                            data={post}
                                            />
                                        })
                                    }
                                </div>
                                <Recipe/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       )
    }
}

export default WishList