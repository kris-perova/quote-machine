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
    '"I confused things with their names: that is belief." - Jean-Paul Sartre',
    '"Be yourself; everyone else is already taken." - Oscar Wilde',
    '"I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best." - Marilyn Monroe',
    '"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe." - Albert Einstein',
    '"If you tell the truth, you don\'t have to remember anything." - Mark Twain',
    '"To live is the rarest thing in the world. Most people exist, that is all." - Oscar Wilde',
    '"Life is what happens to us while we are making other plans." - Allen Saunders',
    '"I have not failed. I\'ve just found 10,000 ways that won\'t work." - Thomas A. Edison',
    '"Everything you can imagine is real." - Pablo Picasso',
    '"Well done is better than well said." - Benjamin Franklin',
    '"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." - Helen Keller',
    '"Be yourself; everyone else is already taken." - Oscar Wilde',
    '"It is during our darkest moments that we must focus to see the light." - Aristotle',
    '"Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate: only love can do that." - Martin Luther King Jr',
    '"Well done is better than well said." - Benjamin Franklin',
    '"You will face many defeats in life, but never let yourself be defeated." - Maya Angelou',
    '"Never let the fear of striking out keep you from playing the game." - Babe Ruth',
    '"Many of life\'s failures are people who did not realize how close they were to success when they gave up." - Thomas A. Edison'
]

const generateRandomColor = () => {
    let letters = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) // generate the random color-number
    {
        color += letters[Math.floor(Math.random()*16)]; //f f f f f f
    }
    if(color === "#ffffff") {
        color = generateRandomColor(); // recursion abd reassign the variable
    }
    return color;
}

const QuoteBox = () => {
    const [quote, setQuote] = useState(''); // initialisation of state; quote - using for keeping the value, setQuote - using for updating
    const [bgColor, setBgColor] = useState(generateRandomColor());
    let authorIdx = quote.split("-").length - 1

    useEffect(() => {
        document.body.style.backgroundColor = bgColor;
        getRandomQuote();
    });

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
        // getRandomQuote();
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