# Rick and Morty - Mobile App

This project was made in react native for study purposes.

## Summary

  - [Introduction](#introduction)
      - [Main resources used](#main-resources-used)
      - [Prerequisites](#prerequisites)
  - [How to run](#how-to-run-the-app)
  - [Unit Tests](#unit-tests)
  - [Concepts](#conceitos)
  - [Author](#author)
  - [License](#license)
  
## Introduction

This section describes the dependencies used in the application as a whole, instructions on how to start the project in development mode and test execution.

### Main resources used

- [Node](https://nodejs.org/) - Required for npm.
- [NPM](https://www.npmjs.com) - NPM - Dependency Manager.
- [React-native](https://www.npmjs.com) - NPM - Dependency Manager.
- [Typescript](https://www.npmjs.com) - NPM - Dependency Manager.


### Prerequisites

What was needed to run the project:

- Node version v10.14.2
- GIT installed
- Android Studio or Xcode (emulators and configs)
- Prepared environment

## How to run the app

- Install dependencies:

```
npm i
```

- in ios case, after npm i (install pods):

```
cd ios && pod install && cd ..
```


- connect device android or open emulator:

```
npm run android
```

- in ios case:

```
npm run ios
```

## Unit tests

- Run in the directory:

```
npm run test
```


## Concepts

- Consumed REST api RickAndMorty with axios;
- React-native project generated with Typescript template;
- Used and implements React hooks and functional components;
- Animations made with React native Animated;


## Author

- **Mauricio Andrés Soto Pezoa** - [GitHub](https://github.com/soto92)


## License

This POC has a MIT License.