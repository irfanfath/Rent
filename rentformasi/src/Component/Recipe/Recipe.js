import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Recipe extends Component{
    render(){
          return(
                    <div className="w-commerce-commercecartlist cart-list"> 
                            <div className="w-commerce-commercecartfooter cart-footer">
                                <div className="w-commerce-commercecartlineitem">
                                    <div>Subtotal</div>
                                    <div className="w-commerce-commercecartordervalue">: ${this.props.total}</div>
                                </div>
                            </div> 
                            <div className="margin-button-keranjang">
                                <NavLink to="/inputdata"><button className="button-full w-full">Bayar Sekarang</button></NavLink>
                                <NavLink to="/"><button className="button-white w-full-white">Sewa Lagi</button></NavLink>
                            </div>
                    </div>
                    

                 
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}


export default connect(mapStateToProps)(Recipe)
