/// <reference types="jest" />

jest.mock('@actions/core', () => ({
  // Mock @actions/core.getInput to always return 'World' for 'name'
  getInput: (name: string) => (name === 'name' ? 'World' : ''),
  // Mock @actions/core.info and @actions/core.setFailed
  info: jest.fn(),
  setFailed: jest.fn(),
}));

import * as core from '@actions/core';
import '../src/index';

describe('greet action', () => {
  it('greets with the provided name', () => {
    expect(core.info).toHaveBeenCalledWith('Hello, World! 👋');
  });
});
