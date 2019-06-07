import React, {useContext, useState} from 'react';

//context
import {AppContext} from "../../appContext";

//components
import Modal from '../Modal/Modal';

//style
import './ProductPreview.scss';

function ProductPreview() {

    const {
        state: {currentProduct},
        dispatch,
    } = useContext(AppContext);
    const [showProduct, setShowProduct] = useState(currentProduct);
    const {id, sku, price, name, image, category, dimension, mark, stock} = currentProduct;

    const imageSize = 250;
    const bgColor = 'cccccc';
    const productImage = `https://via.placeholder.com/${imageSize}/${bgColor}`;

    const handleClosePreview = () => {
        setShowProduct(false)
        dispatch({type: 'setCurrentProduct', data: null})
    }


    return (
        <>
            <Modal show={showProduct} handleClose={handleClosePreview}>
                <div className='product-preview__container'>
                    <div className='product-preview__img'>
                    <img src={image ? image : productImage} alt='product'/>
                    </div>
                    <ul className='product-preview__list'>
                        <li className='product-preview__item'>Id: {id}</li>
                        <li className='product-preview__item'>Nombre: {name}</li>
                        <li className='product-preview__item'>Precio: {price}</li>
                        <li className='product-preview__item'>Sku: {sku}</li>
                        <li className='product-preview__item'>Categoria: {category ? category : 'Electronica'}</li>
                        <li className='product-preview__item'>Dimension: {dimension ? dimension : '45 x 45'}</li>
                        <li className='product-preview__item'>Marca: {mark ? mark : 'Brand'}</li>
                        <li className='product-preview__item'>Stock: {stock ? stock : 5}</li>
                    </ul>
                </div>
            </Modal>
        </>
    )
}

export default ProductPreview;
