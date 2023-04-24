import { useState } from 'react';

export const useInput = (item: string): [{ value: string; onChange: (e: React.FormEvent<HTMLInputElement>) => void }, () => void] => {
    const [value, setValue] = useState(item);

    return [
        {
            value,
            onChange: (e: React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value),
        },
        () => setValue(item),
    ];
};
