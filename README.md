![vscode-portfolio banner](./docs/mockup.png)

<div align="center">

[![Code style: prettier](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://standardjs.com/)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
![Language: Typescript](https://img.shields.io/badge/language-typescript-blue)
[![CI](https://github.com/karlosos/catan-dice-roller/actions/workflows/CI.yaml/badge.svg)](https://github.com/karlosos/catan-dice-roller/actions/workflows/CI.yaml)

</div>

---

<h4 align="center"><img src="./public/favicon-16x16.png" width="16px" />Catan Dice Roller</h4>

<p align="center">
  <a href="#about">About</a> •
  <a href="#development">Development</a> •
  <a href="#deployment">Deployment</a>
</p>

<p align="center">
<table>
<tbody>
<td align="center">
<img width="2000" height="0"><br>
Application: <b><a href="https://catan-dice-roller.vercel.app/">catan-dice-roller.vercel.app 🌐</a></b><br>
<img width="2000" height="0">
</td>
</tbody>
</table>
</p>

## About

If you don't have dice or enough space on the table use Catan Dice Roller. This web/mobile application will throw two dice for you and notify you when the robber is rolled same as in Catan Universe. The app has sounds 🔊 and cool animations 💫. Check it [here](https://catan-dice-roller.vercel.app/).

App was created using React. This is a PWA, you can install it and use the app offline.

## Roadmap

1. Defining user list (randomly select starti player, show who has the turn).
2. Statistics view. Show how many times each number was rolled.
3. Alternative random generator. Similar to Catan Universe.

## Development

You will need Node v16.13.1. I suggest using `nvm` for managing your node versions.

1. Install dependencies with `npm install`.
1. Run desktop application with `npm run start` or react app with `npm run react-start`.
1. Access application under `localhost:3000`.

Storybook can be launched with `npm run storybook`.

Code coverage can be checked using `npm run test:coverage`.

To format code run `npm run format`.

To perform static code analysis run `npm run lint`.

## Deployment

Application is automatically deployed to GithubPages using `.github/workflows/main.yml` workflow.
