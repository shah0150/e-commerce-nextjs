import ProductDetails from "@/app/components/ProductDetails";

export default function ProductPage({params}) {
    const {category, id} = params

    return (
        <div>
            <h2>
                Product Details
            </h2>
            <ProductDetails category={category} id={id} />
        </div>
    )
}