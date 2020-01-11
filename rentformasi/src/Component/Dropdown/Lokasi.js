import React, { Component } from "react";
import { Dropdown } from 'react-bootstrap';

class Lokasi extends Component{
    render(){
        return(
            <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                    Lokasi
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">DKI Jakarta</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Jawa Barat</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Jawa Tengah</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Jawa Timur</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}

export default Lokasi;


// nanti pindahin ke ListData