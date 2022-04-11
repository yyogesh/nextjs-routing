import { useRouter } from 'next/router'
import React from 'react'

const ProductDetail = () => {
    const router = useRouter();
    const { productId } = router.query
    return (
        <div>ProductDetail {productId}</div>
    )
}

export default ProductDetail