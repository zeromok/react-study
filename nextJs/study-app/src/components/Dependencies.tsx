import { log } from 'console';
import { useEffect, useState } from 'react';

export default function Dependencies() {
    const [val, _val] = useState('');
    const [phrase, _phrase] = useState('example');

    const createPhrase = () => {
        _phrase(val);
        _val('');
    };

    // val이 렌더링될 때마다 호출
    useEffect(() => {
        console.log(`typing : ${val}`);
    }, [val]);

    // phrase가 렌더링될 때마다 호출
    useEffect(() => {
        console.log(`saved phrase : ${phrase}`);
    }, [phrase]);

    // 빈 배열을 넘겨줄 경우 처음 초기화된 후 한번만 호출
    useEffect(() => {
        console.log('Init');
    }, []);

    return (
        <>
            <label style={{ display: 'block' }}>Favorite phrase</label>
            <input type="text" value={val} onChange={(e) => _val(e.target.value)} placeholder={'phrase'} style={{ display: 'block' }} />
            <button onClick={createPhrase} style={{ display: 'block' }}>
                Sand
            </button>
        </>
    );
}
