const App = () => (
    <div>
        <Person name='Nick' age='31' hobbies={['jiu jitsu', 'coding', 'water']} />
        <Person name='Jenna' age='33' hobbies={['London', 'Harry Potter', 'cross stitching']} />
        <Person name='Childsdfdfsdf' age='12' hobbies={['video games', 'hot dogs', 'sticks']} />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));