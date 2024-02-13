import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { addNewPost } from '../fetch';


export default function NewPostForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const mutation = useMutation({
        mutationFn: addNewPost
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        mutation.mutate({ title })
        // Check if title and description are not empty
        // if (title.trim() !== '' && description.trim() !== '') {
        //     try {
        //         await  mutation.mutate({ title, description });
        //         // Clear input fields after successful submission
        //         setTitle('');
        //         setDescription('');
        //     } catch (error) {
        //         console.error('Error adding new post:', error);
        //     }
        // } else {
        //     alert('Please enter title and description.');
        // }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Enter title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            {/* <textarea
                placeholder='Enter content'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            /> */}
            {/* <button type='submit' disabled={isLoading}>
                {isLoading ? 'Adding...' : 'Add Post'}
            </button> */}

            <button type='submit'>Add</button>
        </form>
    );
}
