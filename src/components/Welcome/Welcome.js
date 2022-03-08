const Welcome = ({name,age,color}) => {
    return (
        <div style={{backgroundColor: color}}>
            <h1>Hello {name}</h1>
            <h2>Age: {age}</h2>
        </div>
    );
}

export default Welcome;