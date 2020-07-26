import React, { Component } from "react";
import ListRelated from "../Component/ListData/ListRelated";
import Login from "../Component/Modal/Login";
import ForgotPass from "../Component/Modal/ForgotPass";
import SignUp from "../Component/Modal/SignUp";
import axios from "axios";

class DetailProduct extends Component{
    state = {
        username: "",
        password: "",
        failLogin : false,
        token : localStorage.getItem("token"),
        nameUser: localStorage.getItem("nameUser"),
        session : localStorage.getItem("session"),
        showLogin: false,
        showForgotPass: false,
        showSignUp: false,
        post: {
            title: ''
        }
    }

    // ini api kalo udah pake id map

    // componentDidMount(){
    //     let id = this.props.match.params.idBarang;
    //     axios.get(`https://jsonplaceholder.typicode.com/post/${id}`).then(res => {
    //         let post = res.data;
    //         this.setState({
    //             post : {
    //                 title: post.title,
    //                 harga: post.harga,
    //                 desc: post.desc
    //             }
    //         })
    //     })     
    // }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            let post = res.data[0];
            this.setState({
                post : {
                    title: post.title
                }
            })
        })     
    }

    // masih error session get menu nya ga ke delete, auth token

    // handleGetMenu = () => {
    //     axios.get('http://irfanfath.site/Rentformai_Login/users/user', {
    //         headers : {
    //             authorization : `Bearer ${localStorage.getItem('token')}`,
    //             Accept : 'application/json',
    //             "Content-Type" : 'application/json' 
    //         }
    //     }).then((res) => {
    //         console.log("Get Menu : ", res)
    //         // window.location.href = "#/keranjang";
    //     }).catch((err) =>{
    //         console.log("Get Menu : ", err)
    //         // window.location.href = "#/";
    //         this.setState({showLogin: true})
    //     })   
    // }   

    handleCekLogin = () => {
        const session = localStorage.getItem('session')
        if (session !== "active"){
            this.setState({
                showLogin: true
            })
        } else (
            window.location.href = "#/keranjang"
            // ini buat logic add to cart

            // axios.post('http://irfanfath.site/Rentformai_Login/users/authenticate', data)
            // .then((res)=> {
            //     if(res.data.code === 0){
            //         localStorage.setItem("")
            //         window.location.href = "#/keranjang"
            //     } else {
            //         this.setState({
            //             failCart: true
            //         })
            //     }
            // })
        )
    }

    handlePostLogin = (user, pass) => {
        const data = {
          username : user,
          password: pass
        }
    
        axios.post('http://irfanfath.site/Rentformai_Login/users/authenticate', data)
        .then((res) => {
            console.log(res)
          if(res.data.code === 0){
              localStorage.setItem("token", res.data.token)
              localStorage.setItem("nameUser", res.data.data.firstName)
              localStorage.setItem('session', "active");
              this.setState({token: res.data.token, nameUser: res.data.data.firstName, showLogin: false})
              window.location.reload()
          }else{
            this.setState({failLogin: true, showLogin: true})
          }
        }).catch((err) => {
            console.log(err)
        });      
      }

      moveGantiPass = () => {
        this.setState({
            showForgotPass: false
        })
    }

    moveSignUp = () => {
      this.setState({
          showSignUp: false
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
                                    <span role="img" aria-label="star">&#11088;</span>
                                    <span role="img" aria-label="star">&#11088;</span>
                                    <span role="img" aria-label="star">&#11088;</span>
                                    <span role="img" aria-label="star">&#11088;</span>
                                </div>
                                <p className="text-grey">25 Ulasan&nbsp;&nbsp;&nbsp;&nbsp;500 transaksi&nbsp;&nbsp;&nbsp;&nbsp;5 Pertanyaan</p>
                                <div className="product-price">Rp. 5000</div>
                                    <div className="margin-button-detail-menu">
                                        <div><button className="button-full w-full" onClick={this.handleCekLogin}>Sewa Sekarang</button></div>
                                        {
                                            this.state.showLogin ? <Login pindahPage={this.handlePostLogin} LupaPass={()=> this.setState({showForgotPass: true, showLogin: false})} daftar={()=> this.setState({showSignUp: true, showLogin: false})} onClose={()=> this.setState({showLogin: false})} failLogin={this.state.failLogin}/> : null
                                        } 
                                        {
                                            this.state.showForgotPass ? <ForgotPass pindahPage={this.moveGantiPass} onClose={()=> this.setState({showForgotPass: false})}/> : null
                                        }
                                        {
                                            this.state.showSignUp ? <SignUp pindahPage={this.moveSignUp} onClose={()=> this.setState({showSignUp: false})}/> : null
                                        }
                                        <div><button className="button-white w-full-white">Add To Wish List</button></div>
                                    </div>
                                </div>
                                <div className="product-image-wrapper">
                                    <img src="https://www.otomotifer.com/wp-content/uploads/2019/04/Mobil-City-Car-Murah-Honda.jpg" alt=""/>
                                </div>
                                <div className="product-details-wrapper">
                                    <div className="shop-header">
                                        <h5 className="no-margin">Detail Produk</h5>
                                        {/* <h5 className="no-margin">Ulasan</h5>
                                        <h5 className="no-margin">Pertanyaan</h5> */}
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
                                </div>
                            </div>
                    </div>
                </div>
                <ListRelated/>
            </div>
        )
    }
}

export default DetailProduct;