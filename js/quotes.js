const quotes = [
    {
        quote : "Don't dwell on the past.",
        koreanMean : "- 과거에 연연하지 마라.",
    },
    { 
        quote:"Believe in yourself.",
        koreanMean:"- 자기 자신을 믿어라.",
    },
    {
        quote:"Follow your heart.",
        koreanMean:"- 마음가는 대로 해라.",
    },
    {
        quote:"Seize the day.",
        koreanMean:"- 오늘의 기회를 잡아라.",
    },
    {
        quote:"You only live once.",
        koreanMean:"- 인생은 한 번 뿐이다.",
    },
    {
        quote:"Past is just past.",
        koreanMean:"- 과거는 과거이다.",
    },
    {
        quote:"Know yourself.",
        koreanMean:"- 너 자신을 알라",
    },
    {
        quote:"Where there is a will there is a way.",
        koreanMean:"- 뜻이 있는 곳엔 길이 있다.",
    },
    {
        quote:"Don't beat yourself up.",
        koreanMean:"- 너무 자신을 몰아 붙이지 마라",
    },
    {
        quote:"Life is a journey.",
        koreanMean:"- 인생은 여정이다.",
    },

    
];

const quote = document.querySelector("#quote span:first-child");
const koreanMean = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
koreanMean.innerText = todaysQuote.koreanMean;