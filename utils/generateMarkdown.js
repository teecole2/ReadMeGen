// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
# ${data.email}
# ${data.projectName}
# ${data.projectDescription}
# ${data.license}
# ${data.dependencies}
# ${data.commandTest}
# ${data.repoInfo}
# ${data.repoContribution}

`;
}

module.exports = generateMarkdown;
