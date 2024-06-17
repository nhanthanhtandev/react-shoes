import { Modal } from 'bootstrap';
import React, { Component } from 'react'
import ModalGioHang from './ModalGioHang';
import Cart from './Cart';
export default class ProductRenderList extends Component {
    Shoes = this.props.data;
    state = {
        ShoesDetail: this.Shoes,
        showModal: false,
        productInfo: {},
        arrayCart: [
            {
                "id": 1,
                "name": "Adidas Prophere",
                "alias": "adidas-prophere",
                "price": 350,
                "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
                "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
                "quantity": 995,
                "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
            },
        ]
    }
    ShoesRender = this.state.ShoesDetail;
    renderList = () => {


        return this.ShoesRender.map((value, index) => {
            return (
                <div className="card col-md-4  col-4 my-3" key={index} style={{ width: "24%" }} >
                    <div className='d-flex justify-content-center'>
                        <img src={value.image} className="card-img-top w-50" alt="..." />
                    </div>
                    <div className="card-body" >
                        <div>
                            <h5 className="card-title text-start" style={{ height: 48 }}>{value.name}</h5>
                            <p className='text-danger text-start'>{value.price + "$"}</p>
                            <div className='d-flex justify-content-start'>
                                <button type="button" className="btn btn-dark w-75 me-2" onClick={() => this.addToCart(value)}>add to cart <span><i className="bi bi-cart" /></span>

                                </button>
                                <button type="button" className="btn btn-dark w-75 px-2" onClick={() => this.shoesDetail(value)}  >View Detail

                                </button>
                            </div>
                        </div>
                    </div>
                </div >
            )
        })
    }

    shoesDetail = (shoes) => {
        this.setState({
            showModal: true,
            productInfo: shoes
        });

    }
    handleClose = () => {
        this.setState({ showModal: false });
    }
    addToCart = (products) => {
        let arrayNewCart = [...this.state.arrayCart];
        let position = arrayNewCart.find((value) => value.id == products.id);
        if (position) {
            position.quantity += 1;
        }
        else {
            arrayNewCart.push({ ...products, quantity: products.quantity });
        }
        this.setState({
            arrayCart: arrayNewCart,
        });
    }
    render() {
        // let { sanPhamChiTiet } = this.state
        // console.log(sanPhamChiTiet);
        const { productInfo, showModal, handleClose, arrayCart } = this.state;
        return (
            <div className='row gap-2'>
                {this.renderList()}
                <div>
                    <ModalGioHang
                        showModal={showModal}
                        productInfo={productInfo}
                        handleClose={this.handleClose}
                    />
                </div>
                <div>
                    <Cart dataArray={this.state.arrayCart}></Cart>
                </div>
            </div>

        )
    }
}
