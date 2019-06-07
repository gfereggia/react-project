import React, {useContext} from 'react';

//context
import {AppContext} from '../../appContext';

//components
import Button from '../Button/Button';

//assets
import Icon from 'react-icons-kit';
import {ic_remove_red_eye} from 'react-icons-kit/md/ic_remove_red_eye';

//styles
import './TabledataRow.scss';

function TabledataRow({products}) {
    const imageSize = 75;
    const bgColor = 'cccccc';
    const productImage = `https://via.placeholder.com/${imageSize}/${bgColor}`;
    const {
        dispatch,
    } = useContext(AppContext);

    const productsListed =
        products.map((product) => {
            const {id, sku, price, name} = product;
            return (
                <tr
                    key={id}
                >
                    <th>{id}</th>
                    <th>{name}</th>
                    <th>{sku}</th>
                    <th>{price}</th>
                    <th><img src={productImage} alt="producto"/></th>
                    <th><Button
                        text={<Icon icon={ic_remove_red_eye}/>}
                        type="submit"
                        onClick={() => dispatch({type: 'setCurrentProduct', data: product})}
                        clase="tabledataRow-button"
                    /></th>
                </tr>
            );
        });
    return (
        <>
            {productsListed}
        </>
    );
}

export default TabledataRow;
