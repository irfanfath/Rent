import React from 'react';
import { NavLink } from 'react-router-dom';

const ListStatus = (props) => {
    return(
        <div className="w-commerce-commercecartitem">
                                    <div className="item-img"> 
                                        <img src="https://www.otomotifer.com/wp-content/uploads/2019/04/Mobil-City-Car-Murah-Honda.jpg" width="50%" alt=""/>
                                    </div>
                                
                                    <div className="w-commerce-commercecartiteminfo">
                                        <p className="title">{props.data.title}</p>
                                        <p>{props.data.desc}</p>
                                        <p><b className="label">Harga : Rp. {props.data.harga}</b></p> 
                                        <NavLink to="/lacak"><button className="button-full w-full">Lihat Status Pesanan</button></NavLink> 
                                    </div>                                    
                                </div>
    )
}

export default ListStatus