import React, {useState} from "react";
import { FaStar } from "react-icons/fa";

type StarProps = {
    selected: boolean;
    onSelect: () => void;
}

const createArray = (length: number): undefined[] => [...Array(length)];

const Star = ({selected = false, onSelect = () => {}}: StarProps) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onSelect}/>
);

type StarRatingProps = {
    totalStars: number;
}
export default function StarRating({totalStars = 5}: StarRatingProps) {
    const [selectedStars, setSelectedStars] = useState(0);

    return (
        <>
            {createArray(totalStars).map( (item, idx) => (
                <Star key={idx}
                    selected={selectedStars > idx}
                    onSelect={() => setSelectedStars(idx + 1)}
                />
            ))}
            <p>
                {selectedStars} of {totalStars}
            </p>
        </>
    );
}