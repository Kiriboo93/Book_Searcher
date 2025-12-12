import "../../css/components/authorComponent.css";
import { useFetchAuthorInfo } from "../../utils/hooks";

function Author({ authorKey }: { authorKey: string }) {
    /**
     * Splitting the string into the correct key for image.
     */
    const imageKey = authorKey.split("/authors/")[1];

    /**
     * Using hook to get author data.
     */
    const { authorInfo } = useFetchAuthorInfo(authorKey);

    return (
        <div className="author-container" data-testid="author">
            <h3 className="author-title">About the author</h3>
            <div className="author-row">
                <div>
                    <img className="author-img" src={"https://covers.openlibrary.org/a/olid/" + imageKey + "-M.jpg"} alt={"Author image."} />
                </div>
                <div className="author-info-container">
                    <p className="author-name">{authorInfo?.name}</p>
                    {authorInfo && authorInfo.bio ? <div>{typeof authorInfo?.bio === "string" ? authorInfo?.bio : authorInfo?.bio.value}</div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Author;