import React from 'react';

//style
import './Tabledata.scss';

//components
import TabledataRow from '../TabledataRow/TabledataRow';

function ProductList({ products }) {

  return (
    <>
      <table className="tabledata">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>Precio $</th>
            <th>Imagen</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            <TabledataRow products={products}/>
        </tbody>
      </table>
    </>
  );
}

export default ProductList;
