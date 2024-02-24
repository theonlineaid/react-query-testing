import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { dataFetchWithId } from '../fetch'

export default function ProductDetails() {
    const params = useParams()

    const { data, isLoading } = useQuery({
        queryKey: ['details', { id: params.id }],
        queryFn: () => dataFetchWithId({ id: params.id }),
    })

    // console.log(data)

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    console.log(params.id)
    return (
        <>

            <div key={data.id}>

                <p >{data.title}</p>
                <img src={data.thumbnail} alt="" />

            </div>

        </>
    )
}
