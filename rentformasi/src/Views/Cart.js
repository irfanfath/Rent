import React, { Component } from "react";
import axios from 'axios';

class Cart extends Component{
    state = {
        post: {
            title: '',
            harga: '',
            desc: ''
        }
    }
    componentDidMount(){
        let id = this.props.match.params.idBarang;
        axios.get(`http://localhost:3001/posts/${id}`).then(res => {
            let post = res.data;
            this.setState({
                post : {
                    title: post.title,
                    harga: post.harga,
                    desc: post.desc
                }
            })
        })     
    }

    render(){
        return(
            <div className="w-commerce-commercecartitem">
                <div className="item-img"> 
                    <img src="" alt="" className=""/>
                </div>
            
                <div className="w-commerce-commercecartiteminfo">
                    <p className="title">{this.state.post.title}</p>
                    <p>{this.state.post.desc}</p>
                    <p><b className="label">Harga : Rp. {this.state.post.harga}</b></p> 
                    <p><label className="label">Tanggal Sewa : </label>
                        26/12/2019 - 28/12/2019
                    </p>
                    <button className="cart-remove-link">Hapus Dari Daftar</button>
                </div>                                    
            </div>
        )
    }
}

export default Cart;