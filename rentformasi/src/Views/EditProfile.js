import React, { Component } from "react";
import DataUser from "../Component/Forms/DataUser";

class EditProfile extends Component{
    render(){
        return(
            <div className="page-wrapper">
                <div className="section no-padding-vertical">
                    <div className="wrapper side-paddings">
                        <div className="breadcrumbs"><div className="link-grey">Home</div><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5baf79eb570913b9781a96f2_arrow-right-mini-icon.svg" alt="" className="breadcrumbs-arrow" />
                            <div>Edit Profile</div>
                        </div>
                    </div>
                </div>
                <DataUser/>
            </div>
        )
    }
}

export default EditProfile;