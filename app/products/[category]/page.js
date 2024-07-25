export default function CategoryPage({params}) {
    const {category} = params

    const products = [
        {
            id: '1',
            name: 'Product 1'
        },
        {
            id: '2',
            name: 'Product 2'
        },
    ]

    return (
        <div>
            <h2>Category: {category}</h2>
            <ul>
                {products.map((product) => {
                    <li key={product.id}>
                        <a href="{`/prodcuts/${category}/${product.id}`}">{product.name}</a>
                    </li>
                })}
            </ul>
        </div>
    )
}