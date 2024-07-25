"use client";
import { useEffect, useState } from "react";

export default function ProductDetails({category, id}) {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        fetch(`/api/products/${id}`).then((response) => response.json()).
        then((data) => setProduct(data))
    }, [id])

    if(!product) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h3>
                {product.name}
            </h3>
            <p>
                Category: {category}
            </p>
            <p>
                {product.description}
            </p>
            <p>
                Price: {product.price}
            </p>
        </div>
    )
} 