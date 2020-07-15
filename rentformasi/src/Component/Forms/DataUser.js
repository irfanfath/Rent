import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import ButtonSewa from "../Button/ButtonSewa";

class DataUser extends Component{
    render(){
        return(
            <div className="section no-padding-top">
                    <div className="wrapper side-paddings">
                        <div className="contacts">
                            <div className="contact-form-wrapper">
                                <h4 className="contact-heading">Silahkan Lengkapi Data</h4>
                                    <form id="email-form" name="email-form" data-name="Email Form">
                                        <label className="label">Username</label>
                                        <input type="text" className="input w-input" name="Contact-Name" data-name="Contact Name" placeholder="Input Username" id="Contact-Name" />
                                        <label className="label">Nama Lengkap</label>
                                        <input type="text" className="input w-input" name="Contact-Email" data-name="Contact Email" placeholder="Your contact email" id="Contact-Email" required="" />
                                        <label className="label">Alamat Email</label>
                                        <input type="email" className="input w-input" name="Contact-Email" data-name="Contact Email" placeholder="Input Email" id="Contact-Email" required="" />
                                        <label className="label">Nomor Rekening</label>
                                        <input type="number" className="input w-input" name="Contact-Email" data-name="Contact Email" placeholder="Input Nomor Rekening" id="Contact-Email" required="" />
                                        <label className="label">Alamat Lengkap</label>
                                        <textarea id="Contact-Message" name="Contact-Message" placeholder="Message text..." data-name="Contact Message" required="" className="input text-area w-input"></textarea>
                                        <NavLink to="/tagihan">
                                            <ButtonSewa/>
                                        </NavLink>
                                    </form>
                            </div>
                            <div className="contact-info">
                                <h4 className="contact-heading">Contact Info</h4>
                                <div>4293 Euclid Avenue, Los Angeles, CA 90012</div>
                                <div>+1 213 974-3898</div><a href="mailto:Your Email Here?subject=ToyStore" className="link">toystore@template.com</a>
                                <div className="contact-social">
                                    <h5 className="contact-social-heading">Follow Us</h5>
                                    <div className="contact-social-link twitter w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eec5227792568635e37_twitter-icon-white.svg" alt="" /></div>
                                    <div className="contact-social-link facebook w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eec3cb36463d4cf4661_facebook-icon-white.svg" alt="" /></div>
                                    <div className="contact-social-link insta w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eec7fe624275552217c_instagram-icon-white.svg" alt="" /></div>
                                    <div className="contact-social-link pinterest w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eec6e93377c0bbdba8a_pinterest-icon-white.svg" alt="" /></div>
                                    <div className="contact-social-link youtube w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eecfff242b7c309e311_youtube-icon.svg" alt="" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default DataUser;