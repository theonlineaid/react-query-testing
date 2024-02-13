export const dtatFetch = async function ({signal}) {
    console.log(signal)
    const res = await fetch(`https://dummyjson.com/products`, {signal})
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


export const addNewPost = async (postData) => {
    const res = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
    });
    const data = await res.json();
    return data.products;
};
