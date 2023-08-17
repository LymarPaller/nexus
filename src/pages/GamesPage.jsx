import AsideLeft from "../components/AsideLeft";
import AsideRight from "../components/AsideRight"
import Tictactoe from "../games/TicTacToe";
import '../styles/gameslayout/TicTacToe.scss';

function GamesPage() {
    return (
        <>
            <div className="games-main-container">
                <div className="games-page-container">
                    <AsideLeft />
                    <AsideRight />
                    <Tictactoe />
                </div>
            </div>
        </>
    )
}

export default GamesPage