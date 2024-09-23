import { TaskRepository } from './repositories/TaskRepository';
import { TaskManager } from './services/TaskManager';

const taskRepo = new TaskRepository();

const taskManager = new TaskManager(taskRepo);

taskManager.addTask('First Task', 'Buy eggs');
taskManager.addTask('Second Task', 'Buy milk');
taskManager.addTask('Another Task', 'This is another task');

const task = taskManager.findTaskById(2);

if (task) {
    console.log(`Found task: [ID: ${task.getId()}] ${task.getTitle()} - ${task.getDescription()}`);

    task.toggleComplete();
    console.log(`Task [ID: ${task.getId()}] marked as completed: ${task.isCompleted()}`);
} else {
    console.log('Task not found');
}

console.log('Incomplete tasks:', taskManager.filterByStatus(false));

console.log('Sorted tasks:', taskManager.sortByTitle());

