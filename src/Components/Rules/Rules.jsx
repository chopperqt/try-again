import './style.scss';

const Rules = ({
    hide
}) => {
    return (
        <div className="rules">
            <button className="close__rules" onClick={hide}>
                <span className="linearicons-cross close-rules-i"></span>
            </button>
            <div className="rules-wrap">
                <div className="rules-text">
                    <div className="circle-number red">
                        1
                    </div>
                    <p>Вы должны запомнить последовательность загарающихся кнопок</p>
                </div>
                <div className="rules-text">
                    <div className="circle-number green">
                        2
                    </div>
                    <p>Как только последовательность закончится, кнопки станут доступными для нажатия.</p>
                </div>
                <div className="rules-text">
                    <div className="circle-number blue">
                        3
                    </div>
                    <p>Нажимайте кнопки согласно последовательности.</p>
                </div>
                <div className="rules-text">
                    <div className="circle-number yellow">
                        4
                    </div>
                    <p>Если ваша последовательность совпадёт с показанной, вы перейдёте на следующий уровень.</p>
                </div>
            </div>
        </div>
    );
}
 
export default Rules;