import React, { ElementType, ReactElement, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const createArray = (length: number): undefined[] => [...Array(length)];

// type StarProps = {
//     selected: boolean;
//     onSelect: () => void;
// }
// const Star = ({ selected = false, onSelect = () => {} }: { selected: boolean; onSelect: () => void }) => (
//     <>
//         <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} />
//     </>
// );
const Star = ({ selected = false, onSelect }: { selected: boolean; onSelect: () => void }) => (
    <>
        <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect} />
    </>
);

// type StarRatingProps = {
//     totalStars: number;
// }
export default function StarRating({
    style,
    totalStars = 5,
}: // selectedStars = 0,
{
    style?: { [key: string]: string };
    totalStars?: number;
    selectedStars?: number;
}) {
    // 위 전달된 props를 구조분해할당

    // hooks
    const [selectedStars, setSelectedStars] = useState(0);

    return (
        <div style={{ padding: '5px', ...style }}>
            {createArray(totalStars).map((item, idx) => (
                <Star key={idx} selected={selectedStars > idx} onSelect={() => setSelectedStars(idx + 1)} />
            ))}
            <p>
                {selectedStars} of {totalStars}
            </p>
        </div>
        // <div>
        //     {createArray(totalStars).map((item, idx) => (
        //         <Star key={idx} selected={selectedStars > idx} />
        //     ))}
        // </div>
    );
}
/* 
    사용자가 Star를 클릭할 때마다 StarRating 컴포넌트가 재렌더링된다.

    클릭하면 onSelect 안 함수 호출(별의 개수 전달)
    hooks(useState)에 변경된 데이터(별의 개수)가 전달되면 컴포넌트 재렌더링
*/
