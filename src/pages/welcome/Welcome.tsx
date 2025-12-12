import "../../css/pages/welcome.css";

function Welcome() {
    return (
        <div className="welcome-div_mt" data-testid="welcome">
            <div className="welcome-div_centered">
                <h1>Welcome to the book searcher!</h1>
            </div>
            <div className="welcome-div_centered">
                <h2>Click on one of the menu options to start your search.</h2>
            </div>
        </div>
    )
}

export default Welcome;