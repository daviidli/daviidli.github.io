# InformMi

`Python` `Node.js` `React`

_Created for IBM intern hackathon 2019_

InformMi allows for users to search a news topic and show articles from the for, against and neutral sides of the conversation. The inspiration came from discussions around the Hong Kong protests at the time and how different news agencies reported on the events.

## Implementation

We used [News API](https://newsapi.org/) to gather articles on the specified topic, then summarized each one using [TF-IDF](https://en.wikipedia.org/wiki/Tf%E2%80%93idf). We then took the summaries of each article and used kmeans clustering to generate 3 clusters (for, against and neutral). The front-end then shows the articles in their categorized groups.

## Contributors

- [Carlson Lau](https://github.com/carllau999)
- [David Li](https://github.com/daviidli)
- [Rahul Anilkumar](https://github.com/RahulAnilkumar8)