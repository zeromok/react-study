import React from 'react';
import Color from './Color';

export default function ColorList({
    colors,
    onRemoveColor,
    onSelectColor,
}: {
    colors: { id: string; title: string; color: string; rating: number }[];
    onRemoveColor: (f: string) => void;
    onSelectColor: (id: string, rating: number) => void;
}) {
    if (!colors) return <div>표시할 데이터가 없습니다.</div>;

    return (
        <div>
            {colors.map((color) => (
                <Color key={color.id} {...color} onRemove={onRemoveColor} onSelectColor={onSelectColor} />
            ))}
        </div>
    );
}
