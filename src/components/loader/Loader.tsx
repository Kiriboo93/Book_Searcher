import "../../css/components/loader.css";

function Loader() {
    return (
        <div className="loader-div_centered">
            <img data-testid="loader" className="loading-icon" src="./loading.gif" alt="Loading gif of a book passing pages." />
        </div>
    );
}

export default Loader;