# Kasa

[![Netlify Status](https://api.netlify.com/api/v1/badges/d3b121d4-6665-4f72-8961-92ce3f533732/deploy-status)](https://app.netlify.com/sites/epic-meitner-071d89/deploys)

Kasa est une application de location d’appartements entre particuliers. Projet 11 de la formation OpenClassrooms "Développeur Front End". Pour ce projet, j'utilise [TypeScript](https://www.typescriptlang.org/), [React](https://reactjs.org/) et [React Router](https://reactrouter.com/). En essayant de tendre vers une approche [fonctionnelle](https://en.wikipedia.org/wiki/Functional_programming) et [statiquement typée](https://fr.wikipedia.org/wiki/Typage_statique).

J'avais rapidement essayé [React](https://reactjs.org/) il y a un moment mais ceci est mon premier vrai projet avec. Comparé à [Vue](https://vuejs.org/) je trouve qu'il reste des problèmes de performances, que la courbe d'apprentissage est plus rude et je ne suis pas convaincu par les Hooks (bien qu'ils permettent d'isoler les effets)... Mais à coté de ça, j'ai pu profiter d'un écosystème riche, avec beaucoup de ressources, une très bonne intégration VS Code et avec [TypeScript](https://www.typescriptlang.org/) (meilleure que celle de [Vue](https://vuejs.org/) à l'époque où j'avais essayé), et réaliser une SPA moderne très rapidement et avec des composants bien plus lisibles et épurés qu'en JS Vanilla !

Notamment, j'ai beaucoup apprécié les composants fonctionnels, qui sont selon moi plus lisibles, plus maintenable (grâce à l'isolement des effets) et plus testables que les composants de classes. De fait, alors que le projet était demandé en composants classes, je pense qu'il s'agirait d'un mauvais choix en terme de maintenabilité et que cela risque de se transformer en dette technique (car [React](https://reactjs.org/) semble pousser vers les composants fonctionnels) : c'est pourquoi j'ai réalisé l'application uniquement en composant fonctionnel, et que je ferais une branche où je traduirais les principaux composants en classes, afin de comparer durant la soutenance et convaincre de mon choix.

Concernant le typage statique avec [TypeScript](https://www.typescriptlang.org/), j'y ai trouvé plusieurs avantages : 
-> Déléguer au compilateur le soin de vérifier qu'il n'y a pas d'erreurs de types, plutôt que compter sur sa vigilance ou sur des tests que l'on aurait écrit
-> Documenter son code, en indiquant le type des variables, l'interface des objets et le type de retour d'une fonction... Ce qui le rend plus lisible et maintenable 
-> L'intégration à l'IDE (dans mon cas VS Code) est très bien faite et rend l'écriture de code très agréable

Néanmoins, je ne suis pas pleinement convaincu par [TypeScript](https://www.typescriptlang.org/) : Premièrement il ne règle pas tout les problèmes de design de JavaScript, par exemple toutes les strutures de données restent mutables. Deuxièmement, ses "unions" sont en fait des variants non-discriminants, qui n'ont pas "conscience" du type qu'elles contiennent (contrairement à des variants discriminants ou types sommes) ce qui empêche de les utiliser pour faire des Switch logiques, nous privant donc d'un des outils les plus pratiques du typage statique.

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

Kase est une [single page application](https://en.wikipedia.org/wiki/Single-page_application), son point d'entrée est `index.html` qui appelle `App.tsx`, ce dernier contenant toute la logique Router (affiche la bonne page en fonction de l'URL) qui est gérée par [React Router](https://reactrouter.com/). En fonction de la page à afficher, le router va ensuite injecter dans le DOM le bon composant "Page" (`~/src/pages/*.tsx`) qui lui même va être un assemblement de composants custom (`~/src/components/*.tsx` & `~/src/components/*/*tsx`). Chaque composant embarque sa logique, son template HTML (`TSX`) et son style CSS (Tailwind). Le backend n'étant pas encore disponible, il a été simulé par un fichier JSON (`~/public/data.json`) et par des images placeholder (`~/assets/images

***Contenu du répo :***

`assets/images/` : contient les images placeholders

`public/` : contient le fichier JSON mockant le back end

`src/` :

- `/__test__/` : contient tout les tests de l'application

- `/components/` : contient les composants utilisés dans plusieurs pages de l'application

- `/components/*/` : dossier contenant les composants utilisés par une page donnée

- `/pages/` : contient tout les composants pages de l'application

- `App.tsx` : point d'entrée de [React](https://reactjs.org/), logique Router de l'application

- `env.d.ts` : variables d'environnements

`.gitignore` : ignore les dossiers `node_modules/`, `coverage/`, `dist/`, etc

`README.md` : le fichier que vous lisez actuellement

`index.html` : point d'entrée du site

`jest.config.js` : fichier config des tests [Jest](https://jestjs.io)

`package.json` & `yarn.lock` : fichiers utilisés par le gestionnaire de paquet [Yarn](https://yarnpkg.com/)

`postcss.config.js` & `tailwind.config.js` : fichiers config de [PostCSS](https://github.com/postcss/postcss) (et [TailwindCSS](https://tailwindcss.com/))

`tsconfig.json` : fichier config de [TypeScript](https://www.typescriptlang.org/)

`vite.config.ts` : fichier config de [Vite JS](https://vitejs.dev/)

## License 

Il s'agit d'un projet dans le cadre de la formation [Développeur Front-End](https://openclassrooms.com/fr/paths/314-developpeur-front-end) d'OpenClassrooms. Le code est librement réutilisable, mais les images / logo et tout les éléments issus de l'énoncé ne m'appartiennent pas.

Si vous êtes aussi étudiant d'OC, vous pouvez librement vous inspirer de mon travail, mais je vous déconseille bien évidémment d'en copier des parties.