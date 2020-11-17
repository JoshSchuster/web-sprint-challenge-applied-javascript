// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
axios.get("https://lambda-times-api.herokuapp.com/articles")  
        .then((r) => {
            const articles = r.data.articles
            const articlesArray = [];
            const entryPoint = document.querySelector('div.cards-container')

            for (let key in articles) {
                    articlesArray.push(articles[key])
            }

            articlesArray.forEach(topic => {
                topic.forEach(article => {
                    const articleCard = ArticleCardMaker(article)
                    entryPoint.appendChild(articleCard)
                })
            })
        })
        .catch((err) => console.log(err))
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

function ArticleCardMaker(article){
    //create elements
    const returnCard = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const authorsName = document.createElement('span')

    //add class names
    returnCard.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    //assign text content 
    headline.textContent = article.headline
    img.src = article.authorPhoto
    authorsName.textContent = 'By ' + article.authorName

    //append elements
    returnCard.appendChild(headline)
    returnCard.appendChild(author)

    author.appendChild(imgContainer)
    author.appendChild(authorsName)
    
    imgContainer.appendChild(img)

    //add listener
    returnCard.addEventListener('click', event => {
        console.log(article.headline)
    })

    return returnCard
}

