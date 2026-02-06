import * as core from '@actions/core';

// Main function to run the GitHub Action
function run(): void {
  try {
    const name = core.getInput('name');
    core.info(`Hello, ${name}! 👋`);
  } catch (error) {
    core.setFailed(`Action failed with error: ${error}`);
  }
}

run();
