import React, { ElementType, ReactElement, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const createArray = (length: number): undefined[] => [...Array(length)];

const Star = ({ selected = false, onSelect }: { selected: boolean; onSelect: () => void }) => (
    <>
        <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} />
    </>
);

export default function StarRating({
    style,
    totalStars = 5,
    selectedStars = 0,
    onRate = (f, id) => f,
    id,
}: {
    style?: { [key: string]: string };
    totalStars?: number;
    selectedStars?: number;
    onRate: (rating: number, id?: string) => void;
    id?: string;
}) {
    return (
        <div>
            {createArray(totalStars).map((item, idx) => (
                <Star
                    key={idx}
                    selected={selectedStars > idx}
                    onSelect={() => {
                        onRate(idx + 1, id);
                    }}
                />
            ))}
        </div>
    );
}
