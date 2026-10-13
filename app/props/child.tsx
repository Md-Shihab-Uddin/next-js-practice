export default function Child(props) {
    console.log(props.title);

    return (
        <div>
            <h1>----------------</h1>
            <h1>Hi from child</h1>
            <p>{props.title}</p>
        </div>
    );
}