# Dog Facts API v1 Replica

A simplified version of the Dog Facts API built using Node.js and Express.js. This API allows users to retrieve dog facts in JSON format.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What you need to install the software:

- Node.js
- NPM (Node Package Manager)

### Installing

A step-by-step series of examples that tell you how to get a development environment running.

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the project dependencies by running:

`
npm install
`
## Using the API

Endpoints

GET /facts: Retrieves dog facts.

Parameters:
number: An integer specifying the number of dog facts to return. If not provided, all facts are returned.
Examples
Request: GET /facts?number=2

Response:

{
  "facts": [
    "A group of pugs is called a grumble.",
    "Dogs can understand more than 150 words."
  ],
  "success": true
}
