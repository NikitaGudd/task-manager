export class Task {
    private id: number;
    private title: string;
    private description: string;
    private completed: boolean;

     /**
     * Constructor for creating a new task.
     * @param id Unique task identifier
     * @param title Task title
     * @param description Description of the task
     */
    constructor(id: number, title: string, description: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = false;
    }

    /**
     * Get the task ID.
     * @returns task ID
     */
    getId(): number {
        return this.id;
    }

    /**
     * Get the name of the task.
     * @returns The name of the task
     */
    getTitle(): string {
        return this.title;
    }

    /**
     * Get the task description.
     * @returns Task description
     */
    getDescription(): string {
        return this.description;
    }

    /**
     * Check if the task is completed.
     * @returns The status of the task
     */
    isCompleted(): boolean {
        return this.completed;
    }

    /**
     * Switch the task execution status.
     */
    toggleComplete(): void {
        this.completed = !this.completed;
    }
}
