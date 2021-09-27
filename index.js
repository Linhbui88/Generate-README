var inquirer= require('inquirer')
var fs= require('fs')
const licenseChoices=[
  {name:'Apache2.0',
  link:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  },
  {name: 'BSD 3-Clause',
  link:'[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgr een.svg)](https://opensource.org/licenses/MPL-2.0)'
  },
  {name: 'MIT',
  link:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  },
  {name: 'IBM 1.0',
  link:'[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'
  },
]
var licenseNames=[]

licenseChoices.forEach((license)=>{
  licenseNames.push(license.name)
})

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
      name: 'selectedLicense',
      message: 'What kind of license should your project have?',
      choices: licenseNames
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
    const {username,email,profile,projectName,description,selectedLicense,dependencies,runTest,usage} = answers

    let linkLicense
    licenseChoices.forEach((license) =>{
      console.log(selectedLicense)
      console.log(license.name)
      if(selectedLicense===license.name){ 
        linkLicense= license.link
      }
    })
    
    let readMe =
    `#${projectName}\n
${linkLicense}\n

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

This project is licensed under the ${selectedLicense}.

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