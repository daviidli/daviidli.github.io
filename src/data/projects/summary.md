# Summary

`JavaScript` `React` `Mathjs`

Summary is an extractive text summarization app that was inspired by the summary bots on the [r/worldnews](https://reddit.com/r/worldnews) subreddit. The app implements two summarization techniques TextRank and Rapid Automatic Keyword Extraction (RAKE).

### [TextRank](https://nlpforhackers.io/textrank-text-summarization/)
Uses Google's PageRank algorithm but instead of webpages, it ranks sentences.
Cosine Similarity is used to compute the similarity of sentences.

### [RAKE (Rapid Automatic Keyword Extraction)](https://www.researchgate.net/publication/227988510_Automatic_Keyword_Extraction_from_Individual_Documents)
Method for summarization that extracts keywords from text and then computes a score for each word. Each sentence has a score of the sum of its keywords' scores. The sentences are then ranked by the sentence score. This method tends to give preference to longer keywords and longer sentences.
