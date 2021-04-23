import {useState, useEffect, useMemo } from 'react';

import './style.scss';

import {
    Button,
    LeaderBoard,
    LoseBoard,
} from '../../Components/';

const Game = () => {
    const [gameMode, setGameMod] = useState(3);

    const [numberPerLevel, setNumberPerLevel] = useState(3); //default value = 5

    const [numbersArray, setNumbersArray] = useState([]);
    const [userNumbersArray, setUserNumbersArray] = useState([]);

    const [activateSteps, setActivateSteps] = useState(false);

    const [protectWall, setProtectWall] = useState(true);

    const [level, setLevel] = useState(1);

    const [scores, setScores] = useState(1);

    const [protect, setProtect] = useState(true);

    const [isRed, setIsRed] = useState(true);
    const [isGreen, setIsGreen] = useState(true);
    const [isBlue, setIsBlue] = useState(true);
    const [isYellow, setIsYellow] = useState(true);

    const [userName, setUserName] = useState('');

    const [step, setStep] = useState(0);

    const [topInfo, setTopInfo] = useState(125); 

    const changeGameMode = (num) => {
        if (num) {
            switch (num) {
                case 3:
                    setGameMod(prev => prev + 1);
                    break;
                case 4:
                    setGameMod(prev => prev + 1);
                    break;
                case 5:
                    setGameMod(prev => prev + 1);
                    break;
                case 6:
                    setGameMod(prev => prev + 1);
                    break;
                case 7:
                    setGameMod(prev => prev + 1);
                    break;
                default:
                    setGameMod(3)
                    break;
            }
        }

        animationGameMode();

    }

    const filterGameMode = () => {
        switch (gameMode) {
            case 4:
                return 4;
            case 5:
                return 5;
            case 6:
                return 6;
            case 7:
                return 7;
            case 8:
                return 8;
            default:
                return 3;
        }
    }

    const getFactorNumber = () => {
        switch (gameMode) {
            case 4:
                return 2.5;
            case 5:
                return 3;
            case 6:
                return 3.5;
            case 7:
                return 4;
            case 8:
                return 4.5;
            default:
                return 2;
        }
    }

    const genrerateRandomNumber = (npl) => {
        const min = 1;
        const max = 4;

        let result = [];
        
        for (let i = 0; i < npl; i++) {
            let num = Math.round(min + Math.random() * (max - min * 0.5));
            setNumbersArray(prev => [...prev, num])
        }

        return result;
    }

    const lockButtons = () => {
        setIsRed(true);
        setIsGreen(true);
        setIsBlue(true);
        setIsYellow(true)
    }

    const unlockButtons = () => {
        setIsRed(false);
        setIsGreen(false);
        setIsBlue(false);
        setIsYellow(false)
    }

    const clearsValues = () => {
        setNumbersArray([]);
        setUserNumbersArray([]);
        setStep(0);
    } 

    const clearPoints = () => {
        setLevel(1);
    }

    const startGame = () => {
        //Анимации
        let interfaceDiv = document.querySelector('.interface');

        interfaceDiv.id = "fade-out"

        if (!userName) {
            setUserName("Unknown")
        }

        setTimeout(() => {
            setProtect(false);
        }, 1000)

        setLevel(1);

        setScores(1);

        setTimeout(() => {
            setActivateSteps(true)
        }, 500)

    }

    const showSequence = () => {
        console.log(`Подсказочка для разработчика ${numbersArray} , step ${step}`)

        switch (numbersArray[step]) {
            case 1:
                setIsRed(prev => !prev)
                break;
            case 2:
                setIsGreen(prev => !prev)
                break;
            case 3:
                setIsBlue(prev => !prev)
                break;
            case 4:
                setIsYellow(prev => !prev)
                break;
            default:
                break;
        }

        setTimeout(() => {
            switch (numbersArray[step]) {
                case 1:
                    setIsRed(prev => !prev);
                    setStep(prev => prev + 1)
                    break;
                case 2:
                    setIsGreen(prev => !prev)
                    setStep(prev => prev + 1)
                    break;
                case 3:
                    setIsBlue(prev => !prev)
                    setStep(prev => prev + 1)
                    break;
                case 4:
                    setIsYellow(prev => !prev)
                    setStep(prev => prev + 1)
                    break;
                default:
                    break;
            }
        }, 500 )
    }

    const getNumberButton = (e) => {
        setUserNumbersArray(prev => [...prev, +e.target.value]);
    }

    const closeLeaderBoard = () => {
        let btn = document.querySelector(".close__leader_i");

        btn.id = "animate-close";
        
        setTimeout(() => {
            document.querySelector('.leader-board').id = "hide-leader-board";
        }, 800)
    }

    const openLeaderBoard = () => {
        document.querySelector('.leader-board').id = "animate-leader-board";

        let btn = document.querySelector(".close__leader_i");

        btn.id = "animate-close-in";
    }

    const clickHome = () => {
        document.querySelector('.lose-board').id = "hide-lose-board";
        document.querySelector('.interface').removeAttribute('id');
        setProtect(prev => !prev);
    }

    const restartGame = () => {
        document.querySelector('.lose-board').id = "hide-lose-board";

        lockButtons();
        
        setScores(0);

        setTimeout(() => {
            clearPoints();
        }, 1200)

        setTimeout(() => {
            setActivateSteps(true)
        }, 2000)
    }

    const filterName = () => {
        if (userName.length > 10) {
            let str = userName.slice(0,10);
            return str + "...";
        }else {
            return userName
        }
    }

    const animationInputIn = () => {
        document.querySelector('.input-line').id = 'animation-input';
    }
    const animationInputOut = () => {
        document.querySelector('.input-line').id = "animation-input-out"
    }
    const animationGameMode = () => {

        setTopInfo(prev => prev - 25);

       
    }
    useEffect(() => {
        genrerateRandomNumber(filterGameMode())
        setNumberPerLevel(filterGameMode())

        document.querySelector('.listNumber').style.top = `-${topInfo}px`;
        document.querySelector('.listNumber').style.transition = ".2s ease-in";
    }, [])

    useEffect(() => {
        if (numbersArray.length !== 0) {
            if (numbersArray.length === userNumbersArray.length) {
                let strNumber = numbersArray.join("");
                let strUserNumber = userNumbersArray.join("");
    
                if (strNumber === strUserNumber) {

                    setScores(Math.round(level * getFactorNumber())) //Подсчёт очков

                    //Уровень успешно пройден
                    setNumberPerLevel(prev => prev + 1); //Увеличение кол-ва повторений на 1 на первом уровне их 5
                    setLevel(prev => prev + 1); //Увеличение показателя уровня на 1

                    setProtectWall(true);
                    clearsValues(); // Очистка данных что бы подготовить их к новому уровню

                    lockButtons(); //Блокирование кнопок

                    genrerateRandomNumber(numberPerLevel + 1);

                    

                    //setActivateSteps(false);
                }else {
                    //Поражение
                    lockButtons();
                    setProtectWall(true)

                    clearsValues(); //Очитска данных что бы подготовить их к новой игре

                    genrerateRandomNumber(filterGameMode());

                    setNumberPerLevel(filterGameMode());

                    document.querySelector('.lose-board').id = "animate-lose-board"; //Запуск анимации окна поражения
                    setActivateSteps(false);
                }
                
            }
        }        
    }, [userNumbersArray])


    useEffect(() => {
        if (numbersArray.length !== 0) {
            if (step >= numbersArray.length) {
                unlockButtons();
                setProtectWall(false);
            }
        }
        
    }, [step]);

    useEffect(() => {
        if (activateSteps) {
            setTimeout(() => {
                showSequence();
            }, 1000);
        }
    }, [activateSteps, step])

    useEffect(() => {
        if (topInfo < 0) {
            setTopInfo(125)
        }

        document.querySelector('.listNumber').style.top = `-${topInfo}px`;
        document.querySelector('.listNumber').style.transition = ".2s ease-in";
    }, [topInfo])

    useEffect(() => {
        clearsValues();
        
        setNumberPerLevel(filterGameMode())

        genrerateRandomNumber(filterGameMode())
    }, [gameMode])
    return (
        <div className="game">
                <LeaderBoard 
                    closeBoard={closeLeaderBoard} 
                />
                <LoseBoard
                    toHome={clickHome}
                    toRestart={restartGame}
                    scores={scores}
                />
                <div className="buttonPosition">
                    <div className="protect-wall" style={{display: protectWall ? "block" : "none"}}>

                    </div>
                    <div className="interface" style={{display: protect ? "flex" : "none"}}>
                        <div className="enter-name">
                            <input 
                                type="text" 
                                onFocus={animationInputIn} 
                                onBlur={animationInputOut}
                                onChange={e => setUserName(e.target.value)} 
                                placeholder="Имя" 
                            />
                            <div className="input-line"></div>
                        </div>
                        
                        <button className="interface__btn"  onClick={startGame}>
                            Новая игра
                            <div className="hover-line"></div>
                        </button>
                        <button className="interface__btn" onClick={() => changeGameMode(gameMode)}>
                            <div className="numberMode">
                            Кол-во повторений: 
                                <div className="number-window">
                                    <div className="listNumber">
                                        <div className="numberValues">8</div>
                                        <div className="numberValues">7</div>
                                        <div className="numberValues">6</div>
                                        <div className="numberValues">5</div>
                                        <div className="numberValues">4</div>
                                        <div className="numberValues">3</div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                            <div className="hover-line"></div>
                        </button>
                        <button className="interface__btn top-ladder" onClick={openLeaderBoard}>
                            Таблица лидеров
                            <div className="hover-line"></div>
                        </button>
                        <button className="interface__btn">
                            Правила
                            <div className="hover-line"></div>
                        </button>
                        <a href="/" className="gitBtn">
                            <i class="bi-github" role="img" aria-label="GitHub"></i>
                        </a>
                    </div>
                    <div className="interface__text">
                        <h3>Уровень: {level}</h3>
                        <h3>Очки: {scores === 1 ? "0" : scores}</h3>
                        <h3>{filterName()}</h3>
                    </div>
                    <div className="interface__buttons">
                        <Button click={getNumberButton} value={1} color={"red"} isActive={isRed} />
                        <Button click={getNumberButton} value={2} color={"green"} isActive={isGreen} />
                        <Button click={getNumberButton} value={3} color={"blue"} isActive={isBlue} />
                        <Button click={getNumberButton} value={4} color={"yellow"} isActive={isYellow} />
                    </div> 
                </div>    
        </div>
    );
}
 
export default Game;