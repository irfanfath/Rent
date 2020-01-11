import React, { Component } from 'react'
import { connect } from 'react-redux'

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
