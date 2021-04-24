const LeaderBoard = ({
    closeBoard
}) => {
    return (
        <div className="leader-board">
            <div className="leader-board-wrap">
                <button className="close__leader" onClick={closeBoard}>
                    <span className="linearicons-cross close__leader_i"></span>
                </button>
                <div className="leaders">
                    <div>
                        <h1 style={{fontWeight: '400'}}>Таблица ледеров</h1>
                    </div>
                    <div className="leader">
                        <p>Имя:</p>
                        <p class="balls">Очки:</p>   
                    </div>
                    <div className="leader leader__one">
                        <p><span className="linearicons-crown"></span> 1. Аноним </p>
                        <p class="balls">0</p>
                    </div>
                    <div className="leader leader__two">
                        <p><span className="linearicons-crown"></span>2. Аноним </p>
                        <p class="balls">0</p>
                    </div>
                    <div className="leader leader__three">
                        <p ><span className="linearicons-crown"></span>3. Аноним</p>
                        <p class="balls">0</p>
                    </div>
                    <div className="leader">
                        <p>5. Аноним </p>
                        <p class="balls">0</p>
                    </div>
                    <div className="leader">
                        <p>6. Аноним </p>
                        <p class="balls">0</p>
                    </div>
                    <div className="leader">
                        <p>7. Аноним </p>
                        <p class="balls">0</p>
                    </div>
                    <div className="leader">
                        <p>8. Аноним </p>
                        <p class="balls">0</p>
                    </div>
                    <div className="leader">
                        <p>9. Аноним </p>
                        <p class="balls">0</p>
                    </div>
                    <div className="leader">
                        <p>10. Аноним</p>
                        <p class="balls">0</p>
                    </div>
                </div>
            </div>       
        </div>
    );
}
 
export default LeaderBoard;