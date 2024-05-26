import Project from './project';
import Todo from './todo';
import { saveToLocalStorage, loadFromLocalStorage } from './storage';

class UI {
  constructor() {
    this.projects = [];
    this.loadProjects();
    this.defaultProject = this.projects[0] || new Project('Default');
    if (!this.projects.length) {
      this.projects.push(this.defaultProject);
    }
  }

  loadProjects() {
    const projectsData = loadFromLocalStorage('projects');
    if (projectsData) {
      this.projects = projectsData.map(projData => {
        const project = new Project(projData.name);
        projData.todos.forEach(todoData => {
          const todo = new Todo(
            todoData.title,
            todoData.description,
            todoData.dueDate,
            todoData.priority,
            todoData.notes,
            todoData.checklist
          );
          todo.completed = todoData.completed;
          project.addTodo(todo);
        });
        return project;
      });
    }
  }

  saveProjects() {
    saveToLocalStorage('projects', this.projects);
  }

  addProject(project) {
    this.projects.push(project);
    this.saveProjects();
  }

  addTodoToProject(projectName, todo) {
    const project = this.projects.find(proj => proj.name === projectName);
    if (project) {
      project.addTodo(todo);
      this.saveProjects();
    }
  }

  deleteTodoFromProject(projectName, todoTitle) {
    const project = this.projects.find(proj => proj.name === projectName);
    if (project) {
      project.removeTodo(todoTitle);
      this.saveProjects();
    }
  }

  render() {
    const app = document.getElementById('app');
    const projectListDiv = document.getElementById('project-list');
    projectListDiv.innerHTML = '';
    
    this.projects.forEach(project => {
      const projectDiv = document.createElement('div');
      projectDiv.innerHTML = `<h2>${project.name}</h2>`;
      project.getTodos().forEach(todo => {
        const todoDiv = document.createElement('div');
        todoDiv.innerHTML = `<p>${todo.title} - ${todo.dueDate}</p>`;
        projectDiv.appendChild(todoDiv);
      });
      projectListDiv.appendChild(projectDiv);
    });
    
    this.populateProjectSelect();
  }

  populateProjectSelect() {
    const projectSelect = document.getElementById('project-select');
    projectSelect.innerHTML = '<option value="">Select Project</option>';
    this.projects.forEach(project => {
      const option = document.createElement('option');
      option.value = project.name;
      option.textContent = project.name;
      projectSelect.appendChild(option);
    });
  }
}

export default UI;
