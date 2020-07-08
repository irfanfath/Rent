import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import { addToCart } from '../Component/Action/CartAction'
import axios from "axios"
import ListRelated from "../Component/ListData/ListRelated";
// import {MDBIcon} from "mdbreact";
// import ModalsCart from "../Component/Modals/ModalsCart";
// import DatePick from "../Component/Forms/DatePick";
// import PageProfile from "../Component/Card/PageProfile";

class DetailProduct extends Component{
    state = {
        post: {
            title: '',
            body: ''
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

    // handleClick = (id)=>{
    //     this.props.addToCart(id); 
    // }

    render(){
        // var item = this.props.items
        return(
            <div className="page-wrapper">   
                <div className="section no-padding-vertical">
                    <div className="wrapper side-paddings">
                        <div className="product">
                            <div className="product-info">
                                <h2>{this.state.post.title}</h2>
                                <div className="rating">
                                    <span role="img" aria-label="star">&#11088;</span>
                                    <span role="img" aria-label="star">&#11088;</span>
                                    <span role="img" aria-label="star">&#11088;</span>
                                    <span role="img" aria-label="star">&#11088;</span>
                                </div>
                                <p className="text-grey">25 Ulasan&nbsp;&nbsp;&nbsp;&nbsp;500 transaksi&nbsp;&nbsp;&nbsp;&nbsp;5 Pertanyaan</p>
                                <div className="product-price">Rp. {this.state.post.harga}</div>
                                    <div className="w-form">
                                        <label className="label">Tanggal Sewa</label>
                                        <form className="subscribe-form">
                                            <input type="date" className="input subscribe-input w-input" placeholder="Tanggal Sewa" id="tanggalsewa" required="" />
                                            <input type="date" className="input subscribe-input w-input" placeholder="Tanggal Kembali" id="tanggalkembali" required="" />
                                        </form>
                                    </div>
                                    <NavLink to="/keranjang"><button className="button detail-button">Sewa Sekarang</button></NavLink>
                                    <NavLink to="/wish"><button className="button detail-button">Add To Wish List</button></NavLink>
                                </div>
                                <div className="product-image-wrapper">
\                                    <img src="https://www.otomotifer.com/wp-content/uploads/2019/04/Mobil-City-Car-Murah-Honda.jpg" alt=""/>
                                </div>
                                <div className="product-details-wrapper">
                                    <div className="shop-header">
                                        <h5 className="no-margin">Detail Produk</h5>
                                        <h5 className="no-margin">Ulasan</h5>
                                        <h5 className="no-margin">Pertanyaan</h5>
                                        <div className="sku">
                                            <div>ID Barang :</div>
                                            <div>35009</div>
                                        </div>
                                        <div className="shop-header-line">
                                            <div className="shop-header-color green"></div>
                                        </div>
                                    </div>
                                    <div className="product-details w-richtext">
                                        <h4>Deskripsi Produk</h4>
                                        <p>{this.state.post.desc}</p>
                                        <h4>Simple &amp; Elegant Template</h4>
                                        <p>Headings, paragraphs, blockquotes, figures, images, and figure captions can all be styled after a className is added to the rich text element using the "When inside of" nested selector system.</p>
                                        <ul>
                                            <li>Beautifully Designed</li>
                                            <li>Fully Responsive</li>
                                            <li>CMS Content</li>
                                            <li>Smooth Animations</li>
                                        </ul>
                                        <p>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.</p>
                                        <h5>Perfect Choice for Your Business</h5>
                                        <p>{this.state.post.desc}</p>
                                        <p>‍</p>
                                    </div>
                                    <div className="product-table">
                                        <div className="product-table-cell">
                                            <div>Width</div>
                                            <div className="product-table-info">
                                                <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_width_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">38</div>
                                                <div> in</div>
                                            </div>
                                        </div>
                                        <div className="product-table-cell">
                                            <div>Height</div>
                                            <div className="product-table-info">
                                                <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_height_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">32</div>
                                                <div> in</div>
                                            </div>
                                        </div>
                                        <div className="product-table-cell">
                                            <div>Length</div>
                                            <div className="product-table-info">
                                                <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_length_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">21.5</div>
                                                <div> in</div>
                                            </div>
                                        </div>
                                        <div className="product-table-cell no-border-bottom">
                                            <div>Weight</div>
                                            <div className="product-table-info">
                                                <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_weight_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">24</div>
                                                <div> oz</div>
                                            </div>
                                        </div>
                                    </div>
                                        {/* <PageProfile/> */}
                                </div>
                            </div>
                    </div>
                </div>
                <ListRelated/>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DetailProduct);