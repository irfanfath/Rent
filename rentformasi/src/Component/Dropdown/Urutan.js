import React, { Component } from "react";
import { Dropdown } from 'react-bootstrap';

class Urutan extends Component{
    render(){
        return(
            <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                    Urutkan Berdasarkan
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Harga Terendah</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Harga Tertinggi</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Paling Banyak Disewa</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Rating</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }
}

export default Urutan;


// nanti pindahin ke ListData