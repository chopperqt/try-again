const LoseBoard = ({
    toHome,
    toRestart,
    scores
}) => {
    return (
        <div className="lose-board">
            <div className="lose-board__text">
                <h1>Поражение!</h1>
                <h2>Очки: {scores === 1 ?  0 : scores}</h2>
                <div className="lose-board__buttons">
                    <button onClick={toHome} className="lose-board__btn homeBtn">
                        <span className="linearicons-home icon"></span>
                    </button>
                    <button onClick={toRestart} className="lose-board__btn restartBtn">
                        <span className=" linearicons-redo2"></span>
                    </button>
                </div>
            </div>
        </div>
    );
}
 
export default LoseBoard;