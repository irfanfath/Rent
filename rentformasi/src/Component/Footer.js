import React, { Component } from "react";
import { NavLink} from "react-router-dom";

class Footer extends Component{
    render(){
        return(
            <div className="section color no-padding-vertical">
                <div className="wrapper text-white">
                    <div className="footer">
                        <div className="footer-left">
                            <a className="footer-brand w-nav-brand w--current">
                                <div>Rentformasi</div>
                            </a>
                        </div>
                        <div className="footer-nav">
                            <NavLink to="/" className="footer-link w--current">Home</NavLink>
                            <NavLink to="/" className="footer-link">FAQ's</NavLink>
                            <NavLink to="/sk" className="footer-link">Syarat & Ketentuan</NavLink>
                            <NavLink to="/about" className="footer-link">Tentang Kami</NavLink>
                            <NavLink to="/" className="footer-link">Kontak Kami</NavLink>
                        </div>
                        <div className="footer-social">
                            <a className="footer-social-link w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eec5227792568635e37_twitter-icon-white.svg" alt="" /></a>
                            <a className="footer-social-link w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eec3cb36463d4cf4661_facebook-icon-white.svg" alt="" /></a>
                            <a className="footer-social-link w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eec7fe624275552217c_instagram-icon-white.svg" alt="" /></a>
                            <a className="footer-social-link w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eec6e93377c0bbdba8a_pinterest-icon-white.svg" alt="" /></a>
                            <a className="footer-social-link w-inline-block"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5bae5eecfff242b7c309e311_youtube-icon.svg" alt="" /></a>
                        </div>
                        <div className="footer-bottom">
                            <div className="footer-bottom-left">
                                <div>Created with love by <a href="https://elasticthemes.com" target="_blank" className="link-white">Elastic Themes</a></div>
                            </div>
                            <div className="footer-bottom-right">
                                <div>Powered by <a href="https://webflow.com/" target="_blank" className="link-white">Webflow</a></div>
                                <div className="footer-bottom-divider"></div><a href="/template/style-guide" className="link-white">Style Guide</a>
                                <div className="footer-bottom-divider"></div><a href="/template/licensing" className="link-white">Licensing</a></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;