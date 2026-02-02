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
  },
  {
    id: "Q4",
    question: "What is the main purpose of Roles?",
    answers: {
      a: "UI customization",
      b: "Record-level data visibility",
      c: "Authentication",
      d: "API access"
    },
    correctAnswer: "b"
  },
  {
    id: "Q5",
    question: "Which feature is used to extend user permissions without changing profile?",
    answers: {
      a: "Roles",
      b: "Sharing Rules",
      c: "Permission Sets",
      d: "Org Settings"
    },
    correctAnswer: "c"
  },
  {
    id: "Q6",
    question: "What is the default access level of records set by?",
    answers: {
      a: "Profiles",
      b: "OWD",
      c: "Roles",
      d: "Permission Sets"
    },
    correctAnswer: "b"
  },
  {
    id: "Q7",
    question: "Which OWD setting allows users to see only their own records?",
    answers: {
      a: "Public Read Only",
      b: "Public Read Write",
      c: "Private",
      d: "Controlled by Parent"
    },
    correctAnswer: "c"
  },
  {
    id: "Q8",
    question: "Which component decorator makes a property reactive in LWC?",
    answers: {
      a: "@api",
      b: "@wire",
      c: "@track",
      d: "@readonly"
    },
    correctAnswer: "c"
  },
  {
    id: "Q9",
    question: "Which file is mandatory in an LWC component?",
    answers: {
      a: ".css",
      b: ".html",
      c: ".js-meta.xml",
      d: ".svg"
    },
    correctAnswer: "c"
  },
  {
    id: "Q10",
    question: "Which directive is used for looping in LWC templates?",
    answers: {
      a: "for:each",
      b: "iterator",
      c: "map",
      d: "loop"
    },
    correctAnswer: "a"
  },
  {
    id: "Q11",
    question: "Which directive is used for conditional rendering?",
    answers: {
      a: "if:true",
      b: "for:each",
      c: "iterator",
      d: "render"
    },
    correctAnswer: "a"
  },
  {
    id: "Q12",
    question: "Which decorator is used to expose a property to parent component?",
    answers: {
      a: "@track",
      b: "@wire",
      c: "@api",
      d: "@expose"
    },
    correctAnswer: "c"
  },
  {
    id: "Q13",
    question: "Which service is used to fetch Salesforce data in LWC?",
    answers: {
      a: "Apex REST",
      b: "Lightning Data Service",
      c: "Workflow",
      d: "Process Builder"
    },
    correctAnswer: "b"
  },
  {
    id: "Q14",
    question: "Which lifecycle hook runs when component is inserted into DOM?",
    answers: {
      a: "renderedCallback",
      b: "connectedCallback",
      c: "disconnectedCallback",
      d: "constructor"
    },
    correctAnswer: "b"
  },
  {
    id: "Q15",
    question: "Which file controls component visibility in LWC?",
    answers: {
      a: ".js",
      b: ".html",
      c: ".css",
      d: ".js-meta.xml"
    },
    correctAnswer: "d"
  },
  {
    id: "Q16",
    question: "Which access level allows editing records?",
    answers: {
      a: "Read",
      b: "Edit",
      c: "View",
      d: "None"
    },
    correctAnswer: "b"
  },
  {
    id: "Q17",
    question: "What is the max number of roles in a role hierarchy?",
    answers: {
      a: "100",
      b: "250",
      c: "500",
      d: "Unlimited"
    },
    correctAnswer: "d"
  },
  {
    id: "Q18",
    question: "Which sharing mechanism is manual?",
    answers: {
      a: "OWD",
      b: "Role Hierarchy",
      c: "Manual Sharing",
      d: "Criteria Sharing"
    },
    correctAnswer: "c"
  },
  {
    id: "Q19",
    question: "Which tool is used to deploy LWC?",
    answers: {
      a: "Workbench",
      b: "Data Loader",
      c: "Salesforce CLI",
      d: "Change Sets"
    },
    correctAnswer: "c"
  },
  {
    id: "Q20",
    question: "Which decorator is used to call Apex in LWC?",
    answers: {
      a: "@api",
      b: "@track",
      c: "@wire",
      d: "@aura"
    },
    correctAnswer: "c"
  },
    {
    id: "Q21",
    question: "Which Salesforce feature defines what a user can do after login?",
    answers: {
      a: "Role",
      b: "Profile",
      c: "Sharing Rule",
      d: "OWD"
    },
    correctAnswer: "b"
  },
  {
    id: "Q22",
    question: "Which access is required to delete a record?",
    answers: {
      a: "Read",
      b: "Edit",
      c: "Delete",
      d: "Transfer"
    },
    correctAnswer: "c"
  },
  {
    id: "Q23",
    question: "Which permission allows users to run reports?",
    answers: {
      a: "Run Reports",
      b: "Create Report",
      c: "Read Access",
      d: "Report Access"
    },
    correctAnswer: "a"
  },
  {
    id: "Q24",
    question: "Which Salesforce security layer is evaluated first?",
    answers: {
      a: "Sharing Rules",
      b: "Roles",
      c: "Profiles",
      d: "OWD"
    },
    correctAnswer: "c"
  },
  {
    id: "Q25",
    question: "Which decorator is used to receive data from a parent component?",
    answers: {
      a: "@track",
      b: "@wire",
      c: "@api",
      d: "@parent"
    },
    correctAnswer: "c"
  },
  {
    id: "Q26",
    question: "How many HTML templates can one LWC component have?",
    answers: {
      a: "One",
      b: "Two",
      c: "Multiple",
      d: "Unlimited"
    },
    correctAnswer: "a"
  },
  {
    id: "Q27",
    question: "Which method is used to communicate from child to parent in LWC?",
    answers: {
      a: "@api",
      b: "Custom Events",
      c: "@wire",
      d: "Apex Method"
    },
    correctAnswer: "b"
  },
  {
    id: "Q28",
    question: "Which lifecycle hook runs after every render?",
    answers: {
      a: "connectedCallback",
      b: "constructor",
      c: "renderedCallback",
      d: "disconnectedCallback"
    },
    correctAnswer: "c"
  },
  {
    id: "Q29",
    question: "Which file defines whether an LWC is exposed to App Builder?",
    answers: {
      a: ".js",
      b: ".html",
      c: ".css",
      d: ".js-meta.xml"
    },
    correctAnswer: "d"
  },
  {
    id: "Q30",
    question: "Which is the default data binding type in LWC?",
    answers: {
      a: "Two-way",
      b: "One-way",
      c: "Event-based",
      d: "Manual"
    },
    correctAnswer: "b"
  },
  {
    id: "Q31",
    question: "Which keyword is used to export a class in LWC?",
    answers: {
      a: "export",
      b: "public",
      c: "default",
      d: "extends"
    },
    correctAnswer: "a"
  },
  {
    id: "Q32",
    question: "Which base class must every LWC extend?",
    answers: {
      a: "Component",
      b: "LightningElement",
      c: "AuraComponent",
      d: "BaseElement"
    },
    correctAnswer: "b"
  },
  {
    id: "Q33",
    question: "Which directive is used to uniquely identify items in a loop?",
    answers: {
      a: "key",
      b: "id",
      c: "index",
      d: "name"
    },
    correctAnswer: "a"
  },
  {
    id: "Q34",
    question: "Which sharing rule is based on record owner?",
    answers: {
      a: "Criteria-based",
      b: "Owner-based",
      c: "Manual",
      d: "Implicit"
    },
    correctAnswer: "b"
  },
  {
    id: "Q35",
    question: "Which feature allows sharing records automatically?",
    answers: {
      a: "Manual Sharing",
      b: "Role Hierarchy",
      c: "Sharing Rules",
      d: "Profiles"
    },
    correctAnswer: "c"
  },
  {
    id: "Q36",
    question: "Which tool is used to create Lightning Apps?",
    answers: {
      a: "Object Manager",
      b: "App Manager",
      c: "Schema Builder",
      d: "Flow Builder"
    },
    correctAnswer: "b"
  },
  {
    id: "Q37",
    question: "Which permission allows exporting reports?",
    answers: {
      a: "Run Reports",
      b: "Export Reports",
      c: "Create Report",
      d: "Download Access"
    },
    correctAnswer: "b"
  },
  {
    id: "Q38",
    question: "Which event is used to notify parent component in LWC?",
    answers: {
      a: "Lightning Event",
      b: "DOM Event",
      c: "Custom Event",
      d: "Aura Event"
    },
    correctAnswer: "c"
  },
  {
    id: "Q39",
    question: "Which Salesforce feature restricts field visibility?",
    answers: {
      a: "Roles",
      b: "OWD",
      c: "Field-Level Security",
      d: "Sharing Rules"
    },
    correctAnswer: "c"
  },
  {
    id: "Q40",
    question: "Which file is optional in an LWC component?",
    answers: {
      a: ".js",
      b: ".html",
      c: ".js-meta.xml",
      d: ".css"
    },
    correctAnswer: "d"
  },
  {
    id: "Q41",
    question: "Which access allows transferring record ownership?",
    answers: {
      a: "Read",
      b: "Edit",
      c: "Transfer",
      d: "Delete"
    },
    correctAnswer: "c"
  },
  {
    id: "Q42",
    question: "Which decorator is NOT supported in LWC?",
    answers: {
      a: "@api",
      b: "@track",
      c: "@wire",
      d: "@aura"
    },
    correctAnswer: "d"
  },
  {
    id: "Q43",
    question: "Which file controls component targets like record page or app page?",
    answers: {
      a: ".js",
      b: ".html",
      c: ".css",
      d: ".js-meta.xml"
    },
    correctAnswer: "d"
  },
  {
    id: "Q44",
    question: "Which LWC lifecycle hook is called when component is removed?",
    answers: {
      a: "renderedCallback",
      b: "connectedCallback",
      c: "disconnectedCallback",
      d: "constructor"
    },
    correctAnswer: "c"
  },
  {
    id: "Q45",
    question: "Which Salesforce feature is used to give temporary access?",
    answers: {
      a: "Profile",
      b: "Role",
      c: "Permission Set",
      d: "OWD"
    },
    correctAnswer: "c"
  },
  {
    id: "Q46",
    question: "Which command deploys LWC to Salesforce?",
    answers: {
      a: "sf lwc deploy",
      b: "sf project deploy start",
      c: "sf push code",
      d: "sf deploy lwc"
    },
    correctAnswer: "b"
  },
  {
    id: "Q47",
    question: "Which folder is mandatory inside an LWC component?",
    answers: {
      a: "templates",
      b: "lwc",
      c: "component",
      d: "modules"
    },
    correctAnswer: "b"
  },
  {
    id: "Q48",
    question: "Which is INVALID inside an LWC component folder?",
    answers: {
      a: "component.html",
      b: "component.js",
      c: "component.css",
      d: "component.apxc"
    },
    correctAnswer: "d"
  },
  {
    id: "Q49",
    question: "Which Salesforce license gives maximum access?",
    answers: {
      a: "Platform User",
      b: "Standard User",
      c: "System Administrator",
      d: "Chatter Free"
    },
    correctAnswer: "c"
  },
  {
    id: "Q50",
    question: "Which Salesforce feature controls tab visibility?",
    answers: {
      a: "Roles",
      b: "Profiles",
      c: "Sharing Rules",
      d: "OWD"
    },
    correctAnswer: "b"
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