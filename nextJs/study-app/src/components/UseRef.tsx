import React, { DOMElement, useRef, useState } from 'react';
import { useInput } from '../utill/CustomHook';

/* 제어되지 않는 컴포넌트 -  */
// export default function AddColorFrom() {
//     const txtTitle = useRef(null);
//     const hexColor = useRef(null);

//     const submit = (e: React.FormEvent) => {
//         e.preventDefault();
//         const title = txtTitle.current ? txtTitle.current.value : '';
//         const color = hexColor.current ? hexColor.current.value : '';
//         console.log(`title : ${title}, color : ${color}`);
//         // 위 title, color값을 필요한 곳에 보내주고 다시 '' 으로 초기화 해주기
//         txtTitle.current.value = '';
//         hexColor.current.value = '';
//     };

//     return (
//         <>
//             <form onSubmit={submit}>
//                 <input ref={txtTitle} type="text" placeholder="color title..." required />
//                 <input ref={hexColor} type="color" required />
//                 <button>ADD</button>
//             </form>
//         </>
//     );
// }

/* 제어되는 컴포넌트 */
// export default function AddColorFrom() {
//     const [title, setTitle] = useState('');
//     const [hexColor, setHexColor] = useState('#000000');

//     const submit = (e: React.FormEvent) => {
//         e.preventDefault();
//         console.log(`title : ${title}, color : ${hexColor}`);
//     };

//     return (
//         <>
//             <form onSubmit={submit}>
//                 <input
//                     type="text"
//                     placeholder="color title..."
//                     required
//                     onChange={(e) => {
//                         setTitle(e.target.value);
//                     }}
//                     style={{ display: 'block' }}
//                 />
//                 <input
//                     type="color"
//                     required
//                     onChange={(e) => {
//                         setHexColor(e.target.value);
//                     }}
//                     style={{ display: 'block' }}
//                 />
//                 <button style={{ display: 'block' }}>ADD</button>
//             </form>
//         </>
//     );
// }

/* 커스텀 훅 사용 */
export default function AddColorFrom() {
    const [title, setTitle] = useInput('');
    const [hexColor, setHexColor] = useInput('#000000');

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(`title : ${title.value}, color : ${hexColor.value}`);
        setTitle();
        setHexColor();
    };

    return (
        <>
            <form onSubmit={submit}>
                <input type="text" placeholder="color title..." required {...title} style={{ display: 'block' }} />
                <input type="color" required {...hexColor} style={{ display: 'block' }} />
                <button style={{ display: 'block' }}>ADD</button>
            </form>
        </>
    );
}
