const quotes = [
  {
    quote:
      "백 마디 좋은 말보다 한 번 안아주는 게 더 위로될 대도 있듯이 너무 복잡해서 미쳐버릴 것 같을 땐 가장 단순하게 생각하는 게 도움이 될 수 있어요",
    author: "RM#BTS",
  },
  {
    quote:
      "항상 그랬듯이 아쉬움이 남지만 아쉬움이 있으면 더 나은 미래가 있는 법이죠",
    author: "찬열#EXO",
  },
  {
    quote:
      "이미 지나가 버린 실수에 발목이 잡혀서 앞으로 잘할 것들까지 다 망쳐버린다면 너무 속상하지 않을까요? 실수는 과거일 뿐! 그 실수로 한 가지를 배웠다면 그걸로 OK",
    author: "양요섭",
  },
  {
    quote: "신뢰는 입으로 쌓는 게 아니다.",
    author: "ZICO",
  },
  {
    quote: "삶이 있는 한 희망은 있다.",
    author: "키케로",
  },
  {
    quote: "산다는 것 그것은 치열한 전투이다.",
    author: "로망로랑",
  },
  {
    quote: "언제나 현재에 집중할 수 있다면 행복할 것이다.",
    author: "파울로 코엘료",
  },
  {
    quote:
      "진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 한다.",
    author: "찰리 채플린",
  },
  {
    quote: "나 자신에 대한 자신감을 잃으면 온 세상이 나의 적이 된다.",
    author: "랄프 왈도 에머슨",
  },
  {
    quote:
      "사람이 여행을 하는 것은 도착하기 위해서가 아니라 여행하기 위해서이다.",
    author: "괴테",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
