import { Task } from '../models/Task';


export interface ITaskRepository {
    addTask(task: Task): void;
    removeTask(id: number): void;
    findTaskById(id: number): Task | undefined;
    getAllTasks(): Task[];
}

export class TaskRepository implements ITaskRepository {
    private tasks: Task[] = [];

   /**
     * Adds a new task to the repository.
     * @param task Task
     */
    addTask(task: Task): void {
        this.tasks.push(task);
    }

    /**
     * Deletes a task by its ID.
     * @param id Task identifier
     */
    removeTask(id: number): void {
        this.tasks = this.tasks.filter(task => task.getId() !== id);
    }

    /**
     * Finds a task by its ID.
     * @param id Task ID
     * @returns Task or undefined if not found
     */
    findTaskById(id: number): Task | undefined {
        return this.tasks.find(task => task.getId() === id);
    }

    /**
     * Gets all tasks from the repository.
     * @returns Array of tasks
     */
    getAllTasks(): Task[] {
        return this.tasks;
    }
}
