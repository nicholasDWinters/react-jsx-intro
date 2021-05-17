const Tweet = (props) => (
    <div>
        <h3>{props.username} - <small>{props.name}</small></h3>
        <p>{props.message} - <small>{props.date}</small></p>
    </div>
)