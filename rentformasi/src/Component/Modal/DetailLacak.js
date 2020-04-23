import React from "react";

const DetailLacak = () => {
  return (
    <div className="w-commerce-commercecartcontainer cart-container">
                                    <div className="w-commerce-commercecartheader cart-header">
                                        <h4 className="w-commerce-commercecartheading">Your Cart</h4>
                                        <div className="w-commerce-commercecartcloselink w-inline-block">
                                            
                                        </div>
                                    </div>
                                    <div className="w-commerce-commercecartformwrapper">
                                        <form className="w-commerce-commercecartform">
                                            <div className="w-commerce-commercecartlist cart-list">
                                                <div className="w-commerce-commercecartitem">
                                                    <img src="" alt="" className="w-commerce-commercecartitemimage w-dyn-bind-empty" />
                                                    <div className="w-commerce-commercecartiteminfo">
                                                        <div className="w-commerce-commercecartproductname w-dyn-bind-empty"></div>
                                                        <div>$ 0.00 USD</div>
                                                        <div className="w-inline-block">
                                                            <div className="cart-remove-link">Remove</div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                            </div>

                                        </form>
                                     

                                    </div>
                                </div>
  );
};

export default DetailLacak;