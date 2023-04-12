
function Recipe(props) {
    return <>
        <section>
            <h1>{props.name}</h1>
            <h2>준비재료</h2>
            <ul>
                {props.ingredients.map((item, idx) => (
                    <li key = {idx}>{item.name}</li>
                ))}
            </ul>
            <h2>조리절차</h2>
            <p>
                {props.steps.map((item, idx) => (
                    <p key = {idx}>{item}</p>
                ))}
            </p>
            <br/>
            <br/>
        </section>
    </>;
}

export default function Menu(props) {
    return <>
        <div>
            <h1>{props.title}</h1>
            {props.data.map((item, idx) => <Recipe key={idx} name = {item.name} ingredients = {item.ingredients} steps = {item.steps}/>)}
            <p></p>
        </div>
    </>;
};