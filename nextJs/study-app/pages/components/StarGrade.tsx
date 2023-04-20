import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const createArr = (length: number): unknown[] => [...Array(length)];

const Star = ({ selected = false, onSelected }: { selected: boolean; onSelected: () => void }) => {
    return (
        <>
            <FaStar color={selected ? 'yellow' : 'grey'} onClick={onSelected} />
        </>
    );
};

export default function StarGrade({ totalStar = 5 }: { totalStar?: number }) {
    const [selectedStar, setSelectedStar] = useState(0);

    return (
        <>
            {createArr(totalStar).map((item, idx) => (
                <Star key={idx} selected={selectedStar > idx} onSelected={() => setSelectedStar(idx + 1)} />
            ))}
            <p>
                {selectedStar} / {totalStar}
            </p>
        </>
    );
}
