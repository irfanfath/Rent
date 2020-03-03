import React from 'react';

const ListWish = (props) => {
    return(
        <div className="w-commerce-commercecartitem">
                                    <div className="item-img"> 
                                        <img src="https://www.otomotifer.com/wp-content/uploads/2019/04/Mobil-City-Car-Murah-Honda.jpg" width="50%" alt=""/>
                                    </div>
                                
                                    <div className="w-commerce-commercecartiteminfo">
                                        <p className="title">{props.data.title}</p>
                                        <p>{props.data.desc}</p>
                                        <p><b className="label">Harga : Rp. {props.data.harga}</b></p> 
                                        <button className="cart-remove-link">Hapus Dari Daftar</button>
                                    </div>                                    
                                </div>
    )
}

export default ListWish