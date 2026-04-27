const Task = require('../src/task');
const { isValidTaskTitle } = require('../src/utils');

test('creates a new task with title and incomplete status', () => {
  const task = new Task('Complete Jenkins Assignment');

  expect(task.title).toBe('Complete Jenkins Assignment');
  expect(task.completed).toBe(false);
});

test('validates correct task title', () => {
  expect(isValidTaskTitle('Prepare CI Pipeline')).toBe(true);
});

test('rejects empty task title', () => {
  expect(isValidTaskTitle('')).toBe(false);
});

test('rejects non-string task title', () => {
  expect(isValidTaskTitle(null)).toBe(false);
});