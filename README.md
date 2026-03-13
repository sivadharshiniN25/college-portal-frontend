# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



mongo db 
{title:"giventitle"}
{"tags":{$in:["Quantum","Technology"]}} /*gives result which have quantum and technology*/
{ "likes": { $lte: 2400 } }/*gives result which had likes less than or equal to 2400*/
{"tags":{$nin:["Quantum","Technology"]}} /*gives result which does not have quantum and technology*/
{"title":{$regex:/(AI)/,$options:"i"}} /*Returns result of which has the particular word from the data, i is*/{"images":{$regex:/(AI)/,$options:"i"}} /*for case sentivity it returns insensitive of given case*/
{$and:[{"likes":{$gt:2500}},{"likes":{$lt:4000}}]}/*returns the posts which has likes greater than 2500 and less than 4000*/
{$or:[{"title":{$regex:/(AI)/,$options:"i"}},{"title":{$regex:/(Green)/, $options:"i"}}]} /*returns the post which has both*/
sort: {"url":1}/*sorts in ascending order, -1 desending order*/
skip : skips that number of record and prints the rest
limit: limits to that number
project: {"url":1, "_id":0} /*usually id prints with it so to not print it we initialize it as 0*/
