const Person = (props) => {

    return (
        <div>
            <p>Learn some information about this person</p>
            <h3>{props.age > 18 ? 'Please go vote!' : 'You must be 18'}</h3>
            <h4>{props.name.length > 8 ? props.name.slice(0, 6) : props.name}</h4>
            <h4>Hobbies:</h4>
            <ul>
                {props.hobbies.map(item => <li>{item}</li>)}
            </ul>
            <hr />
        </div>

    );
};