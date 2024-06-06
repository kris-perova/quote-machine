import React, {useEffect} from "react";
import {useState} from "react";
import twitImage from "./twitter.png"

const possibleQuotes = [
    '"There are no facts, only interpretations. - Friedrich Nietzsche',
    '"Laziness is nothing more than the habit of resting before you get tired." - Jules Renard',
    '"My grandmother started walking five miles a day when she was sixty. She\'s ninety-seven now, and we don\'t know where the hell she is." - Ellen DeGeneres',
    '"There cannot be a crisis next week. My schedule is already full." - Henry Kissinger',
    '"Always remember that you are absolutely unique. Just like everyone else." - Margaret Mead',
    '"Life is hard. After all, it kills you." - Katharine Hepburn',
    '"Reality continues to ruin my life." - Bill Watterson',
    '"Every day brings new choices." - Martha Beck',
    '"When you are enthusiastic about what you do, you feel this positive energy. It\'s very simple." - Paulo Coelho',
    '"Adopting the right attitude can convert a negative stress into a positive one." - Hans Selye',
    '"I confused things with their names: that is belief." - Jean-Paul Sartre'
]

const generateRandomColor = () => {
    let letters = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) // generate the random color-number
    {
        color += letters[Math.floor(Math.random()*16)];
        if(color === "#ffffff") {
            continue;
        }
    }
    return color;
}

const QuoteBox = () => {
    const [quote, setQuote] = useState(possibleQuotes[0]); // initialisation of state; quote - using for keeping the value, setQuote - using for updating
    const [bgColor, setBgColor] = useState(generateRandomColor());
    let authorIdx = quote.split("-").length - 1

    useEffect(() => {
        document.body.style.backgroundColor = bgColor;
    }, [bgColor])

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * possibleQuotes.length);
        setQuote(possibleQuotes[randomIndex]);
    }

    // const getRandomColor = () => {
    //     const color = generateRandomColor();
    //     document.body.style.backgroundColor = color; // directly modify the body background
    //     setBgColor(color);
    // }

    const handleCLick = () => {
        getRandomQuote();
        setBgColor(generateRandomColor());
    }

    return (
        <>
            <p className={'text'} style={{ color: bgColor }}>{quote.split("-").slice(0, -1).join('-')}</p>
            <p className={'author'} style={{ color: bgColor }}>{quote.split("-")[authorIdx]}</p>
            <div className={'button-container'}>
                <a className={'left-button'} style={{ backgroundColor: bgColor }} href="https://www.twitter.com/intent/tweet">
                    <img style={{width: "13px", height: "13px", filter: 'invert(1)'}}
                         src={twitImage}
                         alt={'tweet a post'}/>
                </a>
                <button className={'right-button'} onClick={handleCLick} style={{ backgroundColor: bgColor }}>Next quote</button>
            </div>

        </>
    );
}

export default QuoteBox;