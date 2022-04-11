import React from 'react'
import Link from 'next/link'

const Product = () => {
    return (
        <>
            <div>Product</div>
            <h2><Link href="/product/2">
                <a>Product 2</a></Link></h2>
            <h2><Link href="/product/3">
                <a>Product 3</a></Link></h2>
            <h2><Link href="/product/5" replace>
                <a>Product 5</a></Link></h2>
        </>
    )
}

export default Product