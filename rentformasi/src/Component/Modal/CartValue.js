import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeItem,addQuantity,subtractQuantity} from '../Action/CartAction'
import Recipe from '../Recipe/Recipe';

class CartValue extends Component{
    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                        <div className="modal-body">
                            <div className="w-commerce-commercecartitem" key={item.id}>
                                    <div className="card-img-100 "> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>                      
                                    <div className="w-commerce-commercecartiteminfo">
                                        <span className="title">{item.title}</span>
                                        <p><b>Harga: Rp. {item.price}</b></p> 
                                        <p><b>Quantity: {item.quantity}</b></p>
                                        <p><b>Durasi Sewa: 3 Hari</b></p>
                                        <button className="cart-remove-link" onClick={()=>{this.handleRemove(item.id)}}>Hapus</button>
                                    </div>
                            </div>
                        </div>
                         
                    )
                })
            ):

             (
                <div className="title-wishlist">Anda Belum Menambahkan Wish List</div>
             )
             
       return(
            <div className="container">
                <div className="cart">
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div> 
                <Recipe/>         
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartValue)