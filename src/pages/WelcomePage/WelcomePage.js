import Welcome from "../../components/Welcome/Welcome";

const WelcomePage = () => {
    return (
        <div>
            <Welcome name="Test1" age="11" color="red" />
            <Welcome name="Test test" age="12" color="yellow" />
            <Welcome name="Test 2" age="15" color="green" />
        </div>
    )
}

export default WelcomePage;