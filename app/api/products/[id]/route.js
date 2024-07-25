export async function GET(resquest, {params}) {
    const {id} = params

    const product = {
        id,
        name: `Product ${id}`,
        description: `Desc for product ${id}`,
        price: (id * 10).toFixed(2)
    }

    return new Response(JSON.stringify(product), {status: 200})
}