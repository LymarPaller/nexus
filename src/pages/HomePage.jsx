import AsideLeft from "../components/AsideLeft";
import NewsFeed from "../components/NewsFeed";
import AsideRight from "../components/AsideRight";
import "../styles/HomePage.scss";
import '../styles/main.scss';
import '../styles/normalize.scss';
import { Link } from "react-router-dom";

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
