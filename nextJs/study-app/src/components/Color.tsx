import React from 'react';
import StarRating from './StarRating';
import { FaTrash } from 'react-icons/fa';

export default function Color({
    id,
    title,
    color,
    rating,
    onRemove,
    onSelectColor,
}: {
    id: string;
    title: string;
    color: string;
    rating: number;
    onRemove: (f: string) => void;
    onSelectColor: (id: string, rating: number) => void;
}) {
    return (
        <section>
            <h1>{title}</h1>
            <div style={{ height: 20, backgroundColor: color, width: 80 }} />
            <StarRating selectedStars={rating} onRate={(rating, id) => onSelectColor(id, rating)} id={id} />
            <button onClick={() => onRemove(id)}>
                <FaTrash />
                Remove
            </button>
            <br />
            <br />
        </section>
    );
}
