import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { dtatFetch } from '../fetch'
import { Link, NavLink } from 'react-router-dom'

export default function Home() {
    const { data, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: ({signal}) => dtatFetch({signal})
    })

    // console.log(data)

    if (isLoading) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <Link to={`/search`}>Find product </Link>

            {data.map(p => (
                <div key={p.id}>

                    <p >{p.title}</p>
                    <Link to={`product/${p.id}`}> <img src={p.thumbnail} alt="" /></Link>

                </div>
            ))}

        </div>
    )
}
