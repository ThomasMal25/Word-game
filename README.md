# React + Vite

# Word Game

This is a simple synonym matching game built using React. The game presents a word, and the player must select the correct synonym from a list of options. The game tracks the player's score and provides feedback based on their performance.

## Features

- Displays a word with multiple options to choose from.
- Tracks the player's progress and score.
- Provides a final score after all questions are answered.
- Responsive and interactive UI with feedback for correct/incorrect answers.

## React technical features used

- use of state hook
- condintional redering
- .map for dynamic rendering

### Data Structure (`synonym.js`)

The game uses a list of words and their possible synonyms stored in the `synonym.js` file. Each object contains:

- `word`: The main word that the player is given.
- `options`: A list of possible synonym options.
- `correct`: The correct synonym for the word.

## Gameplay

1. The game displays a word and a list of possible synonyms.
2. The player clicks on the correct synonym.
3. Once the player selects an option, they can click the "Next" button to proceed to the next word.
4. The game tracks the player's score, and the final score is displayed at the end of the game.

## Styling

The app is styled using two CSS files:

- **App.css**: General styling for the app.
- **game.css**: Styles specific to the word game, such as button and list item styling.

## Future Improvements

- Add a timer to make the game more challenging.
- Include more words and synonyms to increase the variety.
- Implement different levels of difficulty.
- Add animations for correct and incorrect answers.
