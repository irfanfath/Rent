import React, { Component } from "react";

class About extends Component{
    render(){
        return(
    <div className="page-wrapper">

        <div className="section no-padding-bottom">
            <div className="title">All You Need is Fun!</div>
            <div className="wrapper side-paddings">
                <div className="intro no-margin">
                    <h1>Introducing ToyStore</h1>
                    <p className="text-grey">A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.</p><a href="#More-About" className="link">More About Us</a></div><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77fe7ca6c69b821cffc_about-image.jpg" srcSet="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77fe7ca6c69b821cffc_about-image-p-500.jpeg 500w, https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77fe7ca6c69b821cffc_about-image-p-1080.jpeg 1080w, https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77fe7ca6c69b821cffc_about-image-p-1600.jpeg 1600w, https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77fe7ca6c69b821cffc_about-image-p-2000.jpeg 2000w, https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77fe7ca6c69b821cffc_about-image.jpg 2340w" sizes="(max-width: 479px) 100vw, (max-width: 767px) 96vw, (max-width: 991px) 97vw, 93vw" alt="" className="about-image" /></div>
        </div>

        <div className="section">
            <div className="wrapper side-paddings">
                <div data-w-id="e89551e9-b5ae-51a6-c418-02c90497790c" className="subscribe">
                    <div className="subscribe-info">
                        <div className="subscribe-icon"><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5baf56dcace69cfd39b34f7a_paperplane-icon-white.svg" alt="" /></div>
                        <h4>Subscribe to our newsletter<br/>&amp; get <span className="text-green">10% discount!</span></h4></div>
                    <div className="subscribe-form-wrapper w-form">
                        <form id="wf-form-Subscribe-Form" name="wf-form-Subscribe-Form" data-name="Subscribe Form" className="subscribe-form">
                            <input type="email" className="input subscribe-input w-input" maxlength="256" name="email-2" data-name="Email 2" placeholder="Enter your email address" id="email-2" required="" />
                            <input type="submit" value="Subscribe" data-wait="Please wait..." className="button w-button" />
                        </form>
                        <div className="form-success w-form-done">
                            <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="form-error w-form-fail">
                            <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
    }
}

export default About;