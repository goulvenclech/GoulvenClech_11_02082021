# Kasa

[![Netlify Status](https://api.netlify.com/api/v1/badges/d3b121d4-6665-4f72-8961-92ce3f533732/deploy-status)](https://app.netlify.com/sites/epic-meitner-071d89/deploys)

Kasa est une application de location d’appartements entre particuliers. Projet 11 de la formation OpenClassrooms "Développeur Front End". Pour ce projet, j'utilise TypeScript, React et React Router. En essayant de tendre vers une approche [fonctionnelle](https://en.wikipedia.org/wiki/Functional_programming) statiquement typée.

Le typage statique avec TypeScript à plusieurs avantages : 
-> Déléguer au compilateur le soin de vérifier qu'il n'y a pas d'erreurs de types, plutôt que compter sur sa vigilance ou sur des tests que l'on aurait écrit
-> Documenter son code, en indiquant le type des variables, l'interface des objets et le type de retour d'une fonction... Ce qui le rend plus lisible et maintenable 
-> L'intégration à l'IDE (dans mon cas VS Code) est très bien faite et rend l'écriture de code très agréable

Néanmoins, je ne suis pas pleinement convaincu par TypeScript : Premièrement il ne règle pas tout les problèmes de design de JavaScript, par exemple toutes les strutures de données restent mutables. Deuxièmement, ses "unions" sont en fait des variants non-discriminants, qui n'ont pas "conscience" du type qu'elles contiennent (contrairement à des variants discriminants ou types sommes) ce qui empêche de les utiliser pour faire des Switch logiques, nous privant donc d'un des outils les plus pratiques du typage statique.

Adresse du répo : https://github.com/GoulvenC/GoulvenClech_11_02082021

Démo live : https://oc-p11.goulven-clech.dev/

## Installation

Kasa est basé sur [React](https://reactjs.org/), [React Router](https://reactrouter.com/) et [TypeScript](https://www.typescriptlang.org/). J'utilise l'outil de développement Front End [Vite JS](https://vitejs.dev/) ainsi que le gestionnaire de packet [Yarn](https://yarnpkg.com/). Pour gérer les styles j'utilise [PostCSS](https://github.com/postcss/postcss) avec les plugins [TailwindCSS](https://tailwindcss.com/) ([JIT](https://tailwindcss.com/docs/just-in-time-mode)) et [autoprefixer](https://github.com/postcss/autoprefixer). Les tests utilisent [Jest](https://jestjs.io) et [TS-Jest](https://github.com/kulshekhar/ts-jest).

1 - Installez [Yarn](https://yarnpkg.com/) sur votre système

2 - Téléchargez ce projet et ouvrez le dossier

3 - Installez les dépendances en tapant dans un terminal `yarn install`

3 - Lancez le live serveur de ViteJS en tapant dans un terminal `yarn dev`

4 - Lancez les tests en tapant dans un terminal `yarn test`. Les résultats sont consultables sur la page `/coverage/lcov-report/`.

5 - Pour obtenir une version production, tapez dans un terminal `yarn build`

## Organisation du projet

***(Work in progress)***

## License 

Il s'agit d'un projet dans le cadre de la formation [Développeur Front-End](https://openclassrooms.com/fr/paths/314-developpeur-front-end) d'OpenClassrooms. Le code est librement réutilisable, mais les images / logo et tout les éléments issus de l'énoncé ne m'appartiennent pas.

Si vous êtes aussi étudiant d'OC, vous pouvez librement vous inspirer de mon travail, mais je vous déconseille bien évidémment d'en copier des parties.