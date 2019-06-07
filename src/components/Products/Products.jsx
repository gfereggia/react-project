import React, {useEffect, useContext, useState} from 'react';

//services
import Api from '../../services/Api';

//helpers
import {dynamicSort} from '../../helpers/Helpers';

//context
import {AppContext} from '../../appContext';

//components
import Input from '../Input/Input';
import Tabledata from '../Tabledata/Tabledata';
import Loading from '../Loading/Loading';
import ProductPreview from '../ProductPreview/ProductPreview';

//style
import './Products.scss'

//assets
import Icon from 'react-icons-kit';
import {out} from 'react-icons-kit/entypo/out'

function Products() {

    const {
        state: {products, loading, currentProduct},
        dispatch,
    } = useContext(AppContext);
    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch({type: 'toggleLoading'});
        Api.getProducts()
            .then(data => {
                dispatch({type: 'toggleLoading'});
                dispatch({type: 'setProducts', data});
            })
            .catch(err => {
                console.log(err);
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const productsFiltered = products.sort(dynamicSort("name")).filter(product => {
        return search !== '' ? product.name.toLowerCase().includes(search.toLowerCase()) : product;
    });

    return (
        <>
            {loading ? (<Loading height={50} width={50} clase='product-loading'/>)
                : (<div className='products-container'>
                        {currentProduct && (<ProductPreview/>)}
                        <div className='buttons-container'>
                            <Input
                                name="search"
                                placeholder="Search..."
                                onChange={e => setSearch(e.target.value)}
                                value={search}
                                clase="products-input"
                            />
                            <Icon icon={out} className='icon-out' onClick={() => dispatch({type: 'singout'})}/>
                        </div>
                        <Tabledata products={productsFiltered}/>
                    </div>
                )
            }
        </>
    );
};

export default Products;
