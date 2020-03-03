import React from 'react';

const ListBarang = (props) => {
    return(
        <div className="product-barang-wrapper w-dyn-item" onClick={() => props.goDetail(props.data.id)}>
            <div className="product-card w-inline-block">
                <div className="product-card-image-wrapper"><img src="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png" alt="" sizes="(max-width: 479px) 100vw, (max-width: 767px) 34vw, (max-width: 991px) 33vw, 12vw" srcSet="https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min-p-500.png 500w, https://assets.website-files.com/5baddb6a35e113da0e9a4802/5bae12942ca03553bf0d536c_33903-2-plush-toy-transparent-image-min.png 1200w" /></div>
                    <h6 className="product-card-heading">{props.data.title}</h6>
                <div className="product-card-price">Rp. {props.data.harga}</div>
            </div>
        </div>
    )
}

export default ListBarang