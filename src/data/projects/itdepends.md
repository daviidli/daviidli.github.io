# It Depends

`TypeScript` `React` `d3.js`

## Project prompt
It Depends was a group project that was done for an Advanced Software Engineering course at UBC. The goal was to conduct user studies and create a visualization that would be beneficial for learning more about code through some sort of analyses.

## Intent
We found that developers often had trouble traversing the information space of a large software systems with extensive revision histories. Looking through a list of commits is time-consuming, and fails to convey information in a form which efficiently communicates information about the system. In our project, we created a visualization which makes it easier for developers and managers to understand the dependencies between entities in a software system across commits.

## How it works
Our visualization allows the user to select the granularity they wish to analyze: `files`, `classes` or `functions`. We then pull the commit history using the GitHub API and analyze the changes between each entity (based on granularity). The result is then shown in a bi-directional graph, where nodes represent an entity and an arrow from any entity A to another entity B, represent the likelihood of B needing a change when A is changed. The size of each node represented the amount of commits for that entity.

## Visualization v2
V2 of the visualization uses a matrix to show the relationships between entities. This was done to increase the readability of the visualization when it came to large software systems. Although the original visualization showed all the information we intended, the sheer amount of arrows made it somewhat difficult to read at a glance.

## Contributors

- [Sam Veloso](https://github.com/scveloso)
- [Slava Uryumtsev](https://github.com/uslava77)
- [David Li](https://github.com/daviidli)
- [Kiyomi KH](https://github.com/kiyomih)
- [James Yoo](https://github.com/jyoo980)