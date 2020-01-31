import React from "react";

const ListPenginapan = () => {
  return (
    <div className="products w-dyn-items">
                        <div className="product-card-wrapper w-dyn-item">
                            <div className="product-card w-inline-block">
                                <div className="product-card-image-wrapper"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdpJQhVBnuJJM7kqg84oRgPWOnBUY1GG3tSHuewb_hv4Zxnga&s" alt= ""/></div>
                                <h6 className="product-card-heading">Apartemen</h6>
                                <div className="product-card-price">Selengkapnya</div>
                            </div>
                        </div>
                        <div className="product-card-wrapper w-dyn-item">
                            <div className="product-card w-inline-block">
                                <div className="product-card-image-wrapper"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtDn3ir7Nc8jkA-765zP6SbEQ8WLlemv_FsKncxlx72tdnlPMy&s" alt= ""/></div>
                                <h6 className="product-card-heading">Hotel</h6>
                                <div className="product-card-price">Selengkapnya</div>
                            </div>
                        </div>
                        <div className="product-card-wrapper w-dyn-item">
                            <div className="product-card w-inline-block">
                                <div className="product-card-image-wrapper"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHrnl4MslOBkG7EOf-00HZ6ooDzRXny5U9X_42iXJHxtwKZ2nj&s" alt=""/></div>
                                <h6 className="product-card-heading">Villa</h6>
                                <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D" className="product-card-price">Selengkapnya</div>
                            </div>
                        </div>
                        <div className="product-card-wrapper w-dyn-item">
                            <div className="product-card w-inline-block">
                                <div className="product-card-image-wrapper"><img src="https://pngimage.net/wp-content/uploads/2018/06/villas-png-3.png" alt=""/></div>
                                <h6 className="product-card-heading">Bungalow</h6>
                                <div className="product-card-price">Selengkapnya</div>
                            </div>
                        </div>
                    </div>
  );
}

export default ListPenginapan;