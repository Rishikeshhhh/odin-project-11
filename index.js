import UI from './modules/ui';
import Project from './modules/project';
import Todo from './modules/todo';

const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
  ui.render();

  document.getElementById('add-project-btn').addEventListener('click', () => {
    const projectName = document.getElementById('project-name').value;
    if (projectName) {
      const project = new Project(projectName);
      ui.addProject(project);
      ui.render();
      document.getElementById('project-name').value = '';
    }
  });

  document.getElementById('add-todo-btn').addEventListener('click', () => {
    const title = document.getElementById('todo-title').value;
    const description = document.getElementById('todo-description').value;
    const dueDate = document.getElementById('todo-due-date').value;
    const priority = document.getElementById('todo-priority').value;
    const notes = document.getElementById('todo-notes').value;
    const checklist = document.getElementById('todo-checklist').value.split(',').map(item => item.trim());
    const projectName = document.getElementById('project-select').value;

    if (title && projectName) {
      const todo = new Todo(
        title,
        description,
        dueDate,
        priority,
        notes,
        checklist
      );
      ui.addTodoToProject(projectName, todo);
      ui.render();
      document.getElementById('todo-title').value = '';
      document.getElementById('todo-description').value = '';
      document.getElementById('todo-due-date').value = '';
      document.getElementById('todo-priority').value = '';
      document.getElementById('todo-notes').value = '';
      document.getElementById('todo-checklist').value = '';
    }
  });
});
