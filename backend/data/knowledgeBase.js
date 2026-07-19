const knowledgeBase = {

  frontend: {

    react: `
React is a JavaScript library for building user interfaces.

Core ideas:

• Components
• JSX
• Props
• State
• Hooks

React builds interfaces using reusable components.

Example:

function Button(){

  return <button>Click Me</button>

}
`,

    html: `
HTML is the structure of every webpage.

It defines:

• headings

• paragraphs

• forms

• buttons

• images

HTML is NOT a programming language.
`,

    javascript: `
JavaScript gives websites behavior.

Examples:

• Click events

• API requests

• Animations

• Logic

• Dynamic pages
`

  },

  backend: {

    node: `
Node.js allows JavaScript to run on servers.

It is event-driven and asynchronous.

Node is commonly used for:

• APIs

• Authentication

• Databases

• Real-time applications
`,

    express: `
Express.js is a lightweight framework built on Node.js.

It handles:

• Routes

• Middleware

• APIs

• Authentication

• Error handling
`

  },

  mechanical: {

    torque: `
Torque is the turning effect of a force.

Formula

τ = r × F

Where

τ = Torque

r = Distance from pivot

F = Force

Unit:

Newton metre (Nm)
`,

    stress: `
Stress is force per unit area.

Formula

σ = F / A

Units:

Pascal (Pa)

Stress measures internal resistance.
`

  },

  ai: {

    machinelearning: `
Machine Learning is a branch of AI where computers learn patterns from data.

Types:

• Supervised Learning

• Unsupervised Learning

• Reinforcement Learning
`,

    neuralnetwork: `
Neural Networks are mathematical models inspired by the human brain.

They consist of:

• Input Layer

• Hidden Layers

• Output Layer
`
  }

};

module.exports = knowledgeBase;