var quotes = [
    {
        quote: "",
        author: ""
    },
];
var quote_num = 0;

function quoteSelector() {
    let quote = document.getElementById("quotes_quote");
    let author = document.getElementById("quotes_author");
    //console.log(quote_num, quotes.length);
    if (quote_num == quotes.length) {
        //console.log("RESET");
        quote_num = 0;
    }

    quote.innerHTML = quotes[quote_num].quote;
    author.innerHTML = quotes[quote_num].author;
    quote_num++;
}

$(document).ready(function () {
    quoteSelector();
    setInterval(quoteSelector, 5000);

    console.log('JS Loaded..');
});
