import React from 'react';
import Color from './Color';

interface myColor {
    id: string;
    title: string;
    color: string;
    rating: number;
}

export default function ColorList({ colorsDataJson }: { colorsDataJson: { colors: myColor[] } }) {
    if (!colorsDataJson.colors) return <div>표시할 데이터가 없습니다.</div>;

    return (
        <div>
            {colorsDataJson.colors.map((color) => (
                <Color key={color.id} {...color} />
            ))}
        </div>
    );
}
