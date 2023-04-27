import { useEffect, useState } from 'react';

export default function CheckBox() {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        alert(`checked : ${checked}`);
        console.log(checked ? 'Yes' : 'No');
    });

    return (
        <>
            <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
            {checked ? 'checked' : 'notChecked'}
        </>
    );
}
