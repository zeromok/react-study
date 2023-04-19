import React from 'react';
import StarRating from './StarRating';

export default function Color({ title, color, rating }: { title: string; color: string; rating: number }) {
    return (
        <section>
            <h1>{title}</h1>
            <StarRating selectedStars={rating} />
            <div style={{ height: 20, backgroundColor: color }} />
        </section>
    );
}
