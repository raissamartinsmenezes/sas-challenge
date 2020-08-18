![sas-banner](./src/docs/images/sas-logo.jpg)

# SAS Challenge

A application to answer questions which consults an open API to get those. 

<!-- ![concrete-demo](./src/docs/images/concrete-demo.gif) -->

## Challenge Requirements

### Home Screen

Home Screen | Done
---------- | ------
You should list the categories of questions available in the api | ❌

### Question screen

Question screen | Done
------------ | ------
When the user selects a category, you must search for a medium and multiple choice question of the chosen category and display the question with the answer options to be selected. Below the options there should be a button to answer | ✔️

### Answer

Answer | Done
--------------- | ------
When answering the question, inform the user if he got it right or wrong | ✔️
If the user hits 2 followed by the same level, the question to be shown must be of greater difficulty than the current question. The difficulty should not be changed if it is already at the difficult level | ✔️
If the user misses 2 followed by the same level, the question to be shown must be less difficult than the current question. The difficulty should not be changed if it is already at the easy level | ✔️
The chosen answer, the difficulty, the feedback, the date / time of the answer and the indication of whether he got the question right or wrong must be persisted | ✔️

### Final Flow

Final Flow | Done
--------------- | ------
When the student reaches a total of 10 questions answered, his result should be shown, showing the number of correct and general errors and by level of difficulty | ✔️
The user can close the result and return to the initial screen where the list of categories is shown | ✔️

## Build With

<!-- - [Yarn package](https://yarnpkg.com/lang/en/) ![yarn-badge](https://img.shields.io/badge/yarn-1.19.1-blue)
- [React.js](https://github.com/facebook/react) - This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser.
- [react-router-dom](https://reacttraining.com/react-router/web/guides/quick-start) - The components router. 
- [VsCode](https://code.visualstudio.com/) - Code Editor | IDE -->

```
"dependencies": {
    "@react-native-community/masked-view": "0.1.10",
    "@react-navigation/native": "^5.7.2",
    "@react-navigation/stack": "^5.8.0",
    "@reduxjs/toolkit": "^1.4.0",
    "expo": "~38.0.9",
    "expo-splash-screen": "^0.3.1",
    "expo-status-bar": "^1.0.0",
    "expo-updates": "~0.2.10",
    "lodash": "^4.17.20",
    "react": "~16.11.0",
    "react-dom": "~16.11.0",
    "react-native": "~0.62.2",
    "react-native-gesture-handler": "~1.6.1",
    "react-native-reanimated": "~1.9.0",
    "react-native-safe-area-context": "~3.0.7",
    "react-native-screens": "~2.9.0",
    "react-native-unimodules": "~0.10.1",
    "react-native-web": "~0.11.7",
    "react-redux": "^7.2.1",
    "yarn": "^1.22.4"
  },
  "devDependencies": {
    "@babel/core": "~7.9.0",
    "babel-jest": "~25.2.6",
    "jest": "~25.2.6",
    "react-test-renderer": "~16.11.0"
  }
```

## Assets

- [Layout and Assets](https://www.figma.com/proto/ElMZtMsMUZ5Yku7AEFDkuF/Teste-T%C3%A9cnico-Dev-Mobile-SAS)
- [Prototype](https://www.figma.com/file/ElMZtMsMUZ5Yku7AEFDkuF/Teste-T%C3%A9cnico---Dev-Mobile-SAS?node-id=0%3A1)
- [Open Trivia DB - API](https://opentdb.com/api_config.php) 

<!-- endpoints:
    - Details of a user: https://api.github.com/users/{username}
    - Repositories of a user: https://api.github.com/users/{username}/repos -->

## Getting Started

### Requirements

To run this project you will need [![node-badge](https://img.shields.io/badge/node-v12.13.1-blue)](https://nodejs.org/en/) or [![yarn-badge](https://img.shields.io/badge/yarn-1.19.1-blue)](https://yarnpkg.com/lang/en/) installed in your computer, if you have not, you can click on node or yarn badge and the link will redirect to the installer,

You will need to instal the latest version of the Expo CLI:

```
npm install -g expo-cli
```
or

```
yarn add -g expo-cli
```

After that the environment it will ready for start.

### Installation

Download the project or clone it, then enter the `./sas-challenge` directory and run:

```
yarn install
```

to install all the project dependencies, or:

```
npm install
```

if you are using [![npm](https://img.shields.io/badge/npm-6.12.1-blue)](https://www.npmjs.com/) or higher as package manager.

### Running

To run the app in the development mode, enter the `./sas-challenge` directory and run:

```
expo start
```

Open [http://localhost:19002](http://localhost:19002) read the QRCode with the Expo App on your phone to see the project.

## Author

[Raissa Martins](https://www.linkedin.com/in/raissamartinsmenezes/) - mobile developer jr. at @concretesolutions | teacher and monitor at @reprograma | flutter & react 