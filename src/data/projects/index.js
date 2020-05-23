import corn from './corn.md';
import darts from './darts.md';
import itdepends from './itdepends.md';
import typescript from './typescript.ts.md';
import news from './news.md';
import summary from './summary.md';
import smilee from './smilee.md';

const data = [
	{
		title: 'Corn-UI',
		description: 'Some simple yet customizable React components.',
		content: corn,
		link: 'https://bit.dev/daviidli/corn-ui'
	},
	{
		title: 'Darts',
		description: 'A darts game for Arduino connected dartboards.',
		content: darts,
		github: 'https://github.com/daviidli/darts'
	},
	{
		title: 'It Depends',
		description: 'A tool for visualizing entity dependencies which cross-cut commit history.',
		content: itdepends,
		github: 'https://github.com/daviidli/it-depends-vis',
		link: 'https://daviidli.github.io/it-depends-vis'
	},
	{
		title: 'Typescript.ts',
		description: 'A DSL (domain specific language) for generating TypeScript projects.',
		content: typescript,
		github: 'https://github.com/jyoo980/TypeScript.ts',
		link: ''
	},
	{
		title: 'InformMi',
		description: 'A tool for getting all sides of the conversation.',
		content: news,
		github: 'https://github.com/daviidli/News',
		link: ''
	},
	{
		title: 'Summary',
		description: 'Browser-based extractive text summarization using TextRank and RAKE.',
		content: summary,
		github: 'https://github.com/daviidli/summary',
		link: 'https://daviidli.github.io/summary'
	},
	{
		title: 'Smilee',
		description: 'A side scroller that pays attention to your mood 😀.',
		content: smilee,
		github: 'https://github.com/daviidli/Smilee'
	}
];

export default data;
