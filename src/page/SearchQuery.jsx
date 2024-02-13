import React, { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { searchQuery } from '../fetch';
import { useDebounce } from './useDebounce';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';

export default function SearchQuery() {
    const [query, setQuery] = useState('');
    const debouncedValue = useDebounce(query, 800);
    const navigate = useNavigate();
    const location = useLocation();
    const params = useParams();

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const queryParam = searchParams.get('query');
        if (queryParam !== null) {
            setQuery(queryParam);
        }
    }, [location.search]);


    const { data = [], isLoading, refetch } = useQuery({
        queryKey: ['search', { mySearchTerm: debouncedValue }],
        queryFn: () => searchQuery(debouncedValue),
        enabled: !!debouncedValue,
        // staleTime: 1000 * 30,
    })


    // useEffect(() => {
    //     // Trigger refetch when the component mounts or when the query parameter changes
    //     refetch();
    // });

    const handleSearch = (event) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
        navigate(`/search?query=${encodeURIComponent(newQuery)}`);
    };

    let content = '';

    if (Array.isArray(data) && data.length > 0) {
        content = data.map((d) => (
            <p key={d.id}>
                <Link to={`/product/${d.id}`}>{d.title}</Link>
            </p>
        ));
    } else if (isLoading) {
        content = 'Loading...';
    } else {
        content = 'No data found.';
    }

    return (
        <div className='find-note-container'>
            <input type='text' placeholder='Search notes' value={query} onChange={handleSearch} />
            <div className='search-results-container'>
                {content}
            </div>
        </div>
    );
}
