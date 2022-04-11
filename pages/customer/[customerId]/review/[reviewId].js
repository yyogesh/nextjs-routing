import React from 'react';
import { useRouter } from 'next/router'

const ReviewDetail = () => {
    const router = useRouter();
    const { customerId, reviewId } = router.query;
    return (
        <div>ReviewDetail reviewId {reviewId} customerId : {customerId}</div>
    )
}

export default ReviewDetail