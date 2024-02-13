import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
// import { addNewPost } from '../fetch';


export default function NewPostForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const {mutation, isLoading} = useMutation({
        mutationFn: async (formData) => {
            const res = await fetch('https://dummyjson.com/products/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            return data.products;
        },
        onError: (error) => {
            console.error('Error adding new post:', error);
        },
        onSuccess: () => {
            // Clear input fields after successful submission
            setTitle('');
            setDescription('');
        },
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Check if title and description are not empty
        if (title.trim() !== '' && description.trim() !== '') {
            try {
                await  mutation.mutate({ title, description });
                // Clear input fields after successful submission
                setTitle('');
                setDescription('');
            } catch (error) {
                console.error('Error adding new post:', error);
            }
        } else {
            alert('Please enter title and description.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Enter title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder='Enter content'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type='submit' disabled={isLoading}>
                {isLoading ? 'Adding...' : 'Add Post'}
            </button>
        </form>
    );
}
