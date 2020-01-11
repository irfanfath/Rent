import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios"
import ListRelated from "../Component/ListData/ListRelated";
import ButtonSewa from "../Component/Button/ButtonSewa";
// import {MDBIcon} from "mdbreact";

// import Related from "../Component/Related";
// import JumlahSewa from "../Component/Forms/JumlahSewa";
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
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
            let post = res.data;
            this.setState({
                post : {
                    title: post.title,
                    body: post.body
                }
            })
        })     
    }

    render(){
        return(
            <div className="page-wrapper">   
                <div className="section no-padding-vertical">
                    <div className="wrapper side-paddings">
                        <div className="product">
                            <div className="product-info">
                                <h2>{this.state.post.title}</h2>
                                <div className="rating">
                                    <span>&#11088;</span>
                                    <span>&#11088;</span>
                                    <span>&#11088;</span>
                                    <span>&#11088;</span>
                                </div>
                                <p className="text-grey">25 Ulasan&nbsp;&nbsp;&nbsp;&nbsp;500 transaksi&nbsp;&nbsp;&nbsp;&nbsp;5 Pertanyaan</p>
                                <div className="product-price">Rp. 500.000</div>
                                    {/* <div class="full-width">
                                        <form className="w-commerce-commerceaddtocartform add-to-cart">
                                            <label className="label">Jumlah Sewa</label>
                                                <input type="number" className="w-commerce-commerceaddtocartquantityinput input quantity-input" placeholder="1" id="nama_barang1" required="" />
                                        </form>
                                    </div> */}
                                    <div className="w-form">
                                        <label className="label">Tanggal Sewa</label>
                                        <form className="subscribe-form">
                                            <input type="date" className="input subscribe-input w-input" placeholder="Tanggal Sewa" id="email-2" required="" />
                                            <input type="date" className="input subscribe-input w-input" placeholder="Tanggal Kembali" id="email-2" required="" />
                                        </form>
                                    </div>
                                {/* <div className="full-width">
                                    <form className="w-commerce-commerceaddtocartform add-to-cart">
                                        <label className="label">Jumlah Sewa</label>
                                        <JumlahSewa/>
                                        <label className="label">Tanggal Sewa</label>
                                        <DatePick/>
                                    </form>
                                </div> */}
                                {/* <ModalsCart/> */}
                                <NavLink to="/inputdata">
                                    <ButtonSewa/>
                                </NavLink>
                            </div>
                            <div className="product-image-wrapper"><img data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D" src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 75vw, (max-width: 991px) 76vw, 32vw" srcSet="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min-p-500.png 500w, https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png 1200w" className="full-width" /></div>
                                <div className="product-details-wrapper">
                                    <div className="shop-header">
                                        <h5 className="no-margin">Product Details</h5>
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
                                        <h4>Add Your Product Description</h4>
                                        <p>{this.state.post.body}</p>
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
                                        <p>{this.state.post.body}</p>
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
                    <ListRelated/>
                </div>
            </div>
        )
    }
}

export default DetailProduct;