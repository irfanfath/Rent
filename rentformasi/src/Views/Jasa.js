import React, { Component } from "react";
import axios from 'axios';
import Cari from "../Component/Forms/Cari";
import Sorting from "../Component/Dropdown/Sorting";
import ListPenginapan from "../Component/ListData/ListPenginapan";
// import PaginationPage from "../Component/Pagination/PaginationPage";

class Barang extends Component{
    state = {
        post: []
    }

    getPostAPI = () => {
        // axios.get('https://jsonplaceholder.typicode.com/albums?_sort=id')
        axios.get('https://jsonplaceholder.typicode.com/albums?_limit=10')
        .then((result)=>{
            this.setState({
                post: result.data
            })
        })
    } 

    componentDidMount(){
        this.getPostAPI();
    }

    handleDetail = (id) => {
        this.props.history.push(`/product_detail/${id}`);
    }

    render(){
        return(
        <div className="section-produk">
            <Cari/>
                <div className="section no-padding-top">
                    <div className="wrapper">
                        <div className="shop-header">
                            <div>
                            <h3>Semua Jasa</h3>
                            <div className="count-produk">Menampilkan 1-23 dari 253 produk</div>
                            </div>
                            <Sorting/>
                            <div className="shop-header-line">
                                <div className="shop-header-color"></div>
                            </div>
                        </div>
                        <div className="full-width w-dyn-list">
                            <ListPenginapan/>
                        </div>
                    </div>
                </div>   
                {/* <PaginationPage/>                                   */}
        </div>
        )
    }
}

export default Barang;