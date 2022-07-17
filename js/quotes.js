//명언 Array, 10개
const quotes = [
    {
        quotes : "성공은 미리 설정한 가치있는 목표를 점진적으로 실현해 가는 과정이다.",
        author : "폴 마이어"
    },
    {
        quotes : "눈을 들어 하늘을 바라보는 사람에게는 닿을 수 없을 정도로 높은 곳이란 없다. 만족하게 살고,때때로 웃으며,많이 사랑한 사람이 성공한다",
        author : "A.J 스탠리 부인"
    },
    {
        quotes : "가장 높은 곳에 올라가려면 가장 낮은 곳부터 시작하라.",
        author : "푸블릴리우스 시루스"
    },
    {
        quotes : "사람의 일생은 돈과 시간을 쓰는 방법에 의하여 결정된다. 이 두가지 사용법을 잘못하여서는 결토 성공할 수 없다.",
        author : "다케우치 히토시"
    },
    {
        quotes : "당신이 추구하는 것을 얻는 것은 성공이지만 추구하면서 좋아하는 것은 행복이다.",
        author : "베스 사위"
    },
    {
        quotes : "행복의 비밀은 자신이 좋아하는 일을 하는 것이 아니라 자신이 하는 일을 좋아하는 것이다.",
        author : "앤드류 매티스"
    },
    {
        quotes : "행복의 조건은 어떤 일을 할 것,어떤 사람을 사랑할 것,어떤 일에 희망을 가질 것",
        author : "칸트"
    },
    {
        quotes : "행복의 한 쪽 문이 닫히면 다른 쪽 문이 열린다. 그러나 우리는 닫혀진 문을 오랫동안 보기 때문에 열려 있는 문을 보지 못한다.",
        author : "헬렌 켈러"
    },
    {
        quotes : "행복을 즐겨야 할 시간은 지금이다.행복을 즐겨야 할 장소는 여기다.",
        author : "로버트 인젤손"
    },
    {
        quotes : "행복하고 싶다면 오늘 행복을 결심하라",
        author : "양광모"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quotes;
author.innerText = todaysQuote.author;