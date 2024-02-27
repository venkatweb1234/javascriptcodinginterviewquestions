window.addEventListener("load", (_) => {
  const filterCards = cards.filter((value, index) => {
    return index < 4;
  });
  filterCards.forEach((value) => {
    cardsArticle(value);
  });
});

function cardsArticle(data) {
  const columnsNode = document.getElementsByClassName("columns")[0];
  const article = document.createElement("article");
  article.classList = "article";
  const h3 = document.createElement("h3");
  h3.textContent = data.heading;
  const p = document.createElement("p");
  p.textContent = data.body;
  article.append(h3);
  article.append(p);
  columnsNode.append(article);
}
// data for each card
const cards = [
  {
    heading: "Card 1",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    heading: "Card 2",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    heading: "Card 3",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique justo id ultrices venenatis. Morbi vitae libero nec turpis fringilla elementum non nec dolor. Morbi dignissim lacinia enim eu blandit. Aliquam metus mi, blandit eu tellus at, molestie ornare nisl. Integer interdum tincidunt purus, eu semper urna accumsan non.",
  },
  {
    heading: "Card 4",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    heading: "Card 5",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    heading: "Card 6",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];
