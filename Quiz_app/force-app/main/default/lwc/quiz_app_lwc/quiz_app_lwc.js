import { LightningElement, track } from 'lwc';

export default class Quiz_app_lwc extends LightningElement {
    @track selectedAnswers = {}; // for storing user selected answers
    @track correctAnswersCount = 0;
    Questions = [
  {
    id: "Q1",
    question: "Which Salesforce feature controls record-level access?",
    answers: {
      a: "Profiles",
      b: "Roles",
      c: "Permission Sets",
      d: "Page Layouts"
    },
    correctAnswer: "b"
  },
  {
    id: "Q2",
    question: "What does a Profile control in Salesforce?",
    answers: {
      a: "Record ownership",
      b: "Data storage limits",
      c: "Object and field permissions",
      d: "Sharing rules"
    },
    correctAnswer: "c"
  },
  {
    id: "Q3",
    question: "Which access level allows read-only access to a record?",
    answers: {
      a: "Read",
      b: "Edit",
      c: "Full Access",
      d: "Transfer"
    },
    correctAnswer: "a"
  }
];

    get allNotSelected() {   
        return Object.keys(this.selectedAnswers).length < this.Questions.length;
    }


        changeHandler(event) {
        console.log("name: ", event.target.name);
        console.log("value: ", event.target.value);
        const {name, value} = event.target;
        // Store only the question ID and the selected answer (a, b, c, d)
        this.selectedAnswers = {...this.selectedAnswers, [name]: value};
    }


    submitHandler(event) {
        event.preventDefault();
        let c = this.Questions.filter(item=>this.selectedAnswers[item.id] === item.correctAnswer)
        this.correctAnswersCount = c.length;
        alert('Your score is ' + this.correctAnswersCount + ' out of ' + this.Questions.length);        
    }

    resetHandler() {
        this.selectedAnswers = {};
        this.correctAnswersCount = 0;        
    }

    
}