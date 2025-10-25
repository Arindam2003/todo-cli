# 📝 arindam / todo-cli

A simple **command-line Todo application** built with Node.js.  
Manage your tasks directly from the terminal! Todos are stored globally in your current directory.

---

## 📦 Installation

Install globally using npm:

```bash
npm install -g @arindam/todo-cli
```
Install local folder using npm:

```bash
npm install @arindam/todo-cli
```

## 🚀 Usage

1. Add a new task:

```bash
todo add "Your task here"
```

Output:

```bash
✅ Added: "Learn Node.js"
```


2. List all tasks with their status:

```bash
todo list
```

Output:

```bash
Your Todos:
1. Learn Node.js — ⏳ Pending
2. Build CLI project — ✔ Done
3. Write documentation — ⏳ Pending
```

3. Mark a task as completed by its number:

```bash
todo done <task-number>
todo done 1
```

Output:

```bash
🎉 Marked as done: "Learn Node.js"
```

4. Delete a task by its number:

```bash
todo delete <task-number>
todo delete 2
```
Output:

```bash
🗑 Deleted: "Build CLI project"
```

## Features
- Add, list, complete, and delete tasks from the command line.
- Tasks are stored in a JSON file in the current directory.
- Simple and intuitive commands for easy task management.
- Color-coded output for better readability.
- Cross-platform support (Windows, macOS, Linux).
- Lightweight and fast.
- No external database required; tasks are stored locally.
- Open-source and customizable.
- Supports task prioritization and deadlines (future feature).
- Ability to export tasks to different formats (future feature).
- Integration with calendar applications (future feature).
- Easy installation and setup.

## Development
To contribute or modify the project, clone the repository and install dependencies:

```bash
git clone https://github.com/Arindam2003/todo-cli
cd todo-cli
npm install
```

## ❤️Author
Developed by Arindam Dinda -- [GitHub](https://github.com/Arindam2003/todo-cli)

## 📄 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.



