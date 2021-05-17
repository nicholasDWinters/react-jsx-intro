const App = () => (
    <div>
        <Tweet username='Nick1' name='Nick' date={new Date().toString()} message='First Tweet' />
        <Tweet username='Nick2' name='Nick' date={new Date().toString()} message='Second Tweet' />
        <Tweet username='Nick3' name='Nick' date={new Date().toString()} message='Third Tweet' />
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));