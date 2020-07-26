import React from "react";

const DetailLacak = (props) => {
  return (
    <div className="modal-show">
        <div className="modal-dialog-status modal-dialog-centered">
            <div className="modal-content">
                <div className="w-commerce-commercecartcontainer cart-container">
                    <div className="w-commerce-commercecartheader cart-header">
                        <h4 className="w-commerce-commercecartheading">Status Pesanan Anda</h4>
                        <div className="w-commerce-commercecartcloselink w-inline-block" onClick={props.onClose}>
                            <svg width="16px" height="16px"><polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon></svg>
                        </div>
                    </div>
                    <div className="w-commerce-commercecartlist cart-list">
                        <div className="w-commerce-commercecartitem">
                                <div>Dalam Proses Pengiriman</div>
                            <div className="w-commerce-commercecartiteminfo">
                                <div>24/02/2020</div>
                                <div className="w-inline-block">
                                    <div className="cart-remove-link">19:30</div>
                                </div>                                                       
                            </div>
                        </div>
                        <div className="w-commerce-commercecartitem">
                                <div>Dalam Proses Pengiriman</div>
                            <div className="w-commerce-commercecartiteminfo">
                                <div>24/02/2020</div>
                                <div className="w-inline-block">
                                    <div className="cart-remove-link">19:30</div>
                                </div>                                                       
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  );
};

export default DetailLacak;