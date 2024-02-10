export const dtatFetch = async function () {
    const res = await fetch(`https://dummyjson.com/products`)
    const data = await res.json()
    return data.products
}

export const dtatFetchWithId = async function ({ id }) {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await res.json()
    return data
}


export const searchQuery = async function (query) {
    const res = await fetch(`https://dummyjson.com/products/search?q=${query}`)
    const data = await res.json()
    return data.products;
}