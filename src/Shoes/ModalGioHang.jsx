import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap';
export default class ModalGioHang extends Component {
    render() {
        const { showModal, productInfo, handleClose } = this.props;
        return (
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thông tin sản phẩm</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className='fs-3'>Tên sản phẩm: {productInfo.name}</p>
                    <img className='w-25' src={productInfo.image} alt="" />
                    <p className='fw-bolder text-danger'>Giá: {productInfo.price + "$"}</p>
                    {/* Thêm các thông tin sản phẩm khác cần hiển thị */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Đóng
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
