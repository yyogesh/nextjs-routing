import React from 'react'
import { useRouter } from 'next/router';

const CustomerDetail = () => {
    const router = useRouter();
    const { customerId } = router.query;
    return (
        <div>CustomerDetail customerId: {customerId}</div>
    )
}

export default CustomerDetail