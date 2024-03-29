import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useContext, useState } from 'react';
import CheckBox from '../components/CheckBok';
import ColorList from '../components/ColorList';
import Dependencies from '../components/Dependencies';
import StarGrade from '../components/StarGrade';
import Menu from '../components/menu';
import UseRef from '../hoooks/useRef';
import { ColorContext } from '../pages/_app';
import colorDataJson from '../utill/color-data.json';
import Dummy from '../api/dummy';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    const data = [
        {
            name: 'Baked Salmon',
            ingredients: [
                { name: '연어', amount: 500, measurement: '그램' },
                { name: '잣', amount: 1, measurement: '컵' },
                { name: '버터 상추', amount: 2, measurement: '컵' },
                { name: '옐로 스쿼시(Yellow Squash, 호박의 한 종류)', amount: 1, measurement: '개' },
                { name: '올리브 오일', amount: 0.5, measurement: '컵' },
                { name: '마늘', amount: 3, measurement: '쪽' },
            ],
            steps: [
                '오븐을 350도로 예열한다.',
                '유리 베이킹 그릇에 올리브 오일을 두른다.',
                '연어, 마늘, 잣을 그릇에 담는다.',
                '오븐에서 15분간 익힌다.',
                '옐로 스쿼시를 추가하고 다시 30분간 오븐에서 익힌다.',
                '오븐에서 그릇을 꺼내서 15분간 식힌다음에 상추를 곁들여서 내놓는다.',
            ],
        },
        {
            name: '생선 타코',
            ingredients: [
                { name: '흰살생선', amount: 500, measurement: '그램' },
                { name: '치즈', amount: 1, measurement: '컵' },
                { name: '아이스버그 상추', amount: 2, measurement: '컵' },
                { name: '토마토', amount: 2, measurement: '개(큰것)' },
                { name: '또띠야', amount: 3, measurement: '개' },
            ],
            steps: ['생선을 그릴에 익힌다.', '또띠야 3장 위에 생선을 얹는다.', '또띠야에 얹은 생선 위에 상추, 토마토, 치즈를 얹는다.'],
        },
    ];
    const [colors, setColors] = useState(colorDataJson.colors);
    const colorData = useContext(ColorContext);

    return (
        <>
            <div>
                <h1>/pages/index.js</h1>
                <ul>
                    <li>
                        <Link href="./index2">/pages/sub/index2.js</Link>
                    </li>
                    <li>
                        <Link href="./about">/pages/sub/about.js</Link>
                    </li>
                    {/* 쿼리스트링 */}
                    <li>
                        <Link href="./1">/pages/sub/[id].js</Link>
                    </li>
                    <li>
                        <Link href="./2">/pages/sub/[id].js</Link>
                    </li>

                    <li>
                        <Link href="./api/dbconfig">DB TEST</Link>
                    </li>
                </ul>

                <br />
                <br />
                <Menu data={data} title={'조리법'} />
                <br />
                <br />

                <h3>--간단한 별점 컴포넌트</h3>
                <StarGrade />
                <br />
                <br />
                <br />
                <h3>--컴포넌트 간 상호작용</h3>
                <ColorList
                    colors={colors}
                    onRemoveColor={(id) => {
                        const newColors = colors.filter((color) => color.id !== id);
                        setColors(newColors);
                    }}
                    onSelectColor={(id, rating) => {
                        const newColors = colors.map((color) => (color.id === id ? { ...color, rating } : color));
                        setColors(newColors);
                    }}
                />
                <br />
                <br />
                <h3>폼만들기(useRef)</h3>
                <UseRef />
                <br />
                <br />
                <h3>Context</h3>
                {colorData.colors.map((color: { id: string; title: string; color: string; rating: number }) => (
                    <p key={color.id}>{color.title}</p>
                ))}
                <br />
                <br />
                <h3>useEffect() 사용</h3>
                <CheckBox />
                <br />
                <br />
                <h3 id="test">의존 관계 배열</h3>
                <Dependencies />
                <br />
                <br />
                <Dummy />
            </div>
        </>
    );
}
