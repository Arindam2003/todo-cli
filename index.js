#!/usr/bin/env node

import { Command } from 'commander';
import fs from 'fs';
import chalk from 'chalk';
import os from 'os';
import path from 'path';

const program = new Command();
const FOLDER_PATH = path.join(process.cwd(), 'todo-cli');
const TODO_FILE_PATH = path.join(FOLDER_PATH, 'todos.json');
// const FILE_PATH = path.join(process.cwd(), 'todos.json');

function ensureFileExists() {
    if (!fs.existsSync(FOLDER_PATH)) {
        fs.mkdirSync(FOLDER_PATH);
        // console.log(chalk.green('Created folder:'), FOLDER_PATH);
    }
    if (!fs.existsSync(TODO_FILE_PATH)) {
        fs.writeFileSync(TODO_FILE_PATH, JSON.stringify([]));
        // console.log(chalk.green('Created file:'), TODO_FILE_PATH);
    }
    // console.log(chalk.blue('Todo storage initialized.'));
}

function loadTodos() {
    ensureFileExists();
    const data = fs.readFileSync(TODO_FILE_PATH, 'utf-8');
    return JSON.parse(data);
}

function saveTodos(todos) {
    ensureFileExists();
    fs.writeFileSync(TODO_FILE_PATH, JSON.stringify(todos, null, 2));
}

function listTodos() {
    const todos = loadTodos();
    if (todos.length === 0) {
        console.log(chalk.gray('No todos yet. Add one using "todo add <task>".'));
        return;
    }

    console.log(chalk.cyan('\nYour Todos:'));
    todos.forEach((todo, index) => {
        const status = todo.done ? chalk.green('✔ Done') : chalk.yellow('⏳ Pending');
        console.log(`${index + 1}. ${todo.text} — ${status}`);
    });
    console.log('');
}

program
    .name('todo-cli')
    .description('Create your todo using command line')
    .version('1.0.0');

program
    .command('add <task>')
    .description('Add a new todo')
    .action((task) => {
        const todos = loadTodos();
        todos.push({ text: task, done: false });
        saveTodos(todos);
        console.log(chalk.green(`✅ Added: "${task}"`));
    });

program
    .command('delete <index>')
    .description('Delete a todo by its number')
    .action((index) => {
        const todos = loadTodos();
        const i = parseInt(index) - 1;
        if (i < 0 || i >= todos.length) {
            console.log(chalk.red('❌ Invalid index.'));
            return;
        }
        const removed = todos.splice(i, 1);
        saveTodos(todos);
        console.log(chalk.yellow(`🗑️ Deleted: "${removed[0].text}"`));
    });

program
    .command('done <index>')
    .description('Mark a todo as done')
    .action((index) => {
        const todos = loadTodos();
        const i = parseInt(index) - 1;
        if (i < 0 || i >= todos.length) {
            console.log(chalk.red('❌ Invalid index.'));
            return;
        }
        todos[i].done = true;
        saveTodos(todos);
        console.log(chalk.green(`🎉 Marked as done: "${todos[i].text}"`));
    });

program
    .command('list')
    .description('List all todos')
    .action(() => listTodos());

program.parse();


