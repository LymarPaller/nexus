import AsideLeft from "../components/AsideLeft";
import NewsFeed from "../components/NewsFeed";
import AsideRight from "../components/AsideRight";
import "../styles/HomePage.scss";

function HomePage () {
    return (
        <>
        <div className="home-page-main-container">
            <AsideLeft/>
            <NewsFeed />
            <AsideRight />
        </div>
        </>
    );
};

export default HomePage;