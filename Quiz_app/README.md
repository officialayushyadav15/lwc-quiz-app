# 🧠 Quiz App using Lightning Web Components (LWC)

This project is a simple quiz application built using **Lightning Web Components**.
It randomly picks questions, lets the user answer them, validates completion, calculates the score, and supports reset with a fresh set of questions.

---

## 📂 Component Structure

The component contains:

* **HTML file** – handles UI and user interaction
* **JavaScript file** – holds data, logic, and state

(No CSS file is used as it is my begning of lwc.)

---

## 🔹 HTML FILE EXPLANATION (`quiz_app_lwc.html`)

### 1️⃣ `<lightning-card>`

```html
<lightning-card title="Quiz App">
```

* Wraps the entire quiz UI.
* Gives a standard Salesforce card layout with a title.

---

### 2️⃣ `<form>`

```html
<form>
```

* Groups all quiz inputs.
* Helps reset radio buttons easily using `form.reset()` in JS.

---

### 3️⃣ Looping through questions

```html
<template for:each={questionsWithNumber} for:item="quiz">
```

* Iterates over the questions array.
* `questionsWithNumber` adds question numbering (1, 2, 3…).
* Each question block is rendered dynamically.

```html
<div key={quiz.id}>
```

* `key` is mandatory for LWC loops.
* Uses question ID to uniquely identify each block.

---

### 4️⃣ Displaying question text

```html
<strong>{quiz.number}. {quiz.question}</strong>
```

* Shows question number and question text.

---

### 5️⃣ Radio button options

Each option follows the same pattern:

```html
<input
  type="radio"
  name={quiz.id}
  value="a"
  onchange={changeHandler} />
```

Important points:

* `name={quiz.id}` groups options per question.
* Only one option can be selected per question.
* `value` stores selected option (`a`, `b`, `c`, or `d`).
* `onchange` updates selected answers in JS.

SLDS classes are used for proper Salesforce styling.

---

### 6️⃣ Score section (conditional)

```html
<template if:true={showScore}>
```

* Score is shown **only after clicking Submit**.
* Uses `showScore` boolean from JS.

```html
You have scored {correctAnswersCount} out of {quizQuestions.length}
```

* Displays total correct answers.

---

### 7️⃣ Submit button

```html
<lightning-button
  label="Submit"
  disabled={allNotSelected}
  onclick={submitHandler}>
```

* Disabled until all questions are answered.
* Calls `submitHandler` to calculate score.

---

### 8️⃣ Reset button

```html
<lightning-button
  label="Reset"
  onclick={resetHandler}>
```

* Clears selections.
* Loads a fresh set of random questions.

---

## 🔹 JAVASCRIPT FILE EXPLANATION (`quiz_app_lwc.js`)

---

### 1️⃣ Imports

```js
import { LightningElement, track } from 'lwc';
```

* `LightningElement` is required for all LWCs.
* `@track` makes properties reactive.

---

### 2️⃣ Reactive properties

```js
@track selectedAnswers = {};
@track correctAnswersCount = 0;
@track quizQuestions = [];
@track showScore = false;
```

What each one does:

* `selectedAnswers` → stores user selections `{ Q1: "b", Q2: "c" }`
* `correctAnswersCount` → number of correct answers
* `quizQuestions` → randomly selected questions for the quiz
* `showScore` → controls score visibility

---

### 3️⃣ Master questions list

```js
Questions = [ ...50 questions... ];
```

* Contains all available quiz questions.
* Each question has:

  * `id`
  * `question`
  * `answers` (a–d)
  * `correctAnswer`

---

### 4️⃣ `connectedCallback()`

```js
connectedCallback() {
  this.quizQuestions = this.getRandomQuestions(10);
}
```

* Runs when the component loads.
* Selects **10 random questions** from the master list.

---

### 5️⃣ Random question generator

```js
getRandomQuestions(count) {
  const shuffled = [...this.Questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
```

Steps:

1. Clones the questions array.
2. Shuffles it randomly.
3. Picks the first `count` questions.

---

### 6️⃣ Adding question numbers

```js
get questionsWithNumber() {
  return this.quizQuestions.map((q, index) => ({
    ...q,
    number: index + 1
  }));
}
```

* Adds numbering without modifying original data.
* Keeps UI logic separate from raw data.

---

### 7️⃣ Submit button enable/disable logic

```js
get allNotSelected() {
  return Object.keys(this.selectedAnswers).length < this.quizQuestions.length;
}
```

* Counts answered questions.
* Disables Submit button until all questions are answered.

---

### 8️⃣ Handling answer selection

```js
changeHandler(event) {
  const { name, value } = event.target;
  this.selectedAnswers = { ...this.selectedAnswers, [name]: value };
}
```

What happens:

* `name` → question ID
* `value` → selected option
* Updates `selectedAnswers` immutably (important for reactivity).

---

### 9️⃣ Submit handler

```js
submitHandler(event) {
  event.preventDefault();

  const correct = this.quizQuestions.filter(
    q => this.selectedAnswers[q.id] === q.correctAnswer
  );

  this.correctAnswersCount = correct.length;
  this.showScore = true;
}
```

Steps:

1. Stops form reload.
2. Compares user answers with correct answers.
3. Counts correct responses.
4. Displays score.

---

### 🔁 Reset handler

```js
resetHandler() {
  this.selectedAnswers = {};
  this.correctAnswersCount = 0;
  this.showScore = false;
  this.quizQuestions = this.getRandomQuestions(10);

  this.template.querySelector('form').reset();
}
```

What it does:

* Clears selected answers.
* Resets score.
* Hides score message.
* Loads new random questions.
* Clears radio button selections using form reset.

