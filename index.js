var inquirer= require('inquirer')
var fs= require('fs')

inquirer
  .prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    },
    {
      type: 'input',
      name: 'profile',
      message: 'What is the  URL to your GitHub profile?'

    },
    {
      type: 'input',
      name: 'projectName',
      message: 'What is your project name?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a short description of your project'
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license should your project have?',
      choices: ['MIT','APACHE 2.0','GPL 3.0','BSD 3','None']
    },
    {
      type: 'default',
      name: 'dependencies',
      message: 'What command should be run to install dependencies?',
      default: 'npm i',
    },
    
    {
      type: 'default',
      name: 'runTest',
      message: 'What command should be run to run tests?',
      default: 'npm test',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What does the user need to know about using the repo?',
      
    },
    
    
  ])
  .then(answers => {
    const {username,email,profile,projectName,description,license,dependencies,runTest,usage} = answers
    let readMe =
    `#${projectName}\n
![GitHub license](${license})\n

##${description}\n

## Table of Contents
* [Installation](#installation)\n

* [Usage](#usage)\n

* [License](#license)\n

* [Contributing](#contributing)\n

* [Tests](#tests)\n

* [Questions](#questions)\n


## Installation
      
To install necessary dependencies, run the following command: 
\`\`\`
${dependencies}
\`\`\`

## Usage

${usage}

## License

This project is licensed under the ${license}.

## Tests

To run tests, run the following command:
\`\`\`
${runTest}
\`\`\`

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${email}.You can find more of my work at [${username}](${profile})`

      fs.writeFile('README.md',readMe,err =>{
        console.log(err)
        console.log('Generating README...')
      })

  })