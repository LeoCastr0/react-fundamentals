import React from 'react';
import products from '../../data/products'
import './tableProducts.css'

export const ProductsTable = props => {
    const productRow = products.map((product, i) => {
        return (
            <tbody key={product.id}>
                <tr className={i % 2 === 0 ? 'Pair' : 'Odd'}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>$ {product.price}</td>
                </tr>
            </tbody>
        )
    })
    return (
        <div className="ProductsTable">
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Product</td>
                        <td>Price</td>
                    </tr>
                </thead>
                {productRow}
            </table>
        </div>
    )
}