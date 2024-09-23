import { Task } from '../models/Task';
import { ITaskRepository } from '../repositories/TaskRepository';

export class TaskManager {
    constructor(private taskRepository: ITaskRepository) {}

   /**
     * Adds a new task.
     * @param title The name of the task
     * @param description Description of the task
     */
    addTask(title: string, description: string): void {
        const id = this.taskRepository.getAllTasks().length + 1; 
        const task = new Task(id, title, description);
        this.taskRepository.addTask(task);
    }

    /**
     * Deletes a task by its ID.
     * @param id Task identifier
     */
    removeTask(id: number): void {
        this.taskRepository.removeTask(id);
    }

    /**
     * Finds a task by its ID.
     * @param id Task identifier
     * @returns Task or undefined
     */
    findTaskById(id: number): Task | undefined {
        return this.taskRepository.findTaskById(id);
    }

    /**
     * Filters tasks by their status of completion.
     * @param completed Completed status (true or false)
     * @returns Array of filtered tasks
     */
    filterByStatus(completed: boolean): Task[] {
        return this.taskRepository.getAllTasks().filter(task => task.isCompleted() === completed);
    }

     /**
     * Sorts tasks by name.
     * @returns An array of sorted tasks
     */
    sortByTitle(): Task[] {
        return this.taskRepository.getAllTasks().sort((a, b) => a.getTitle().localeCompare(b.getTitle()));
    }
}
