import {TaskRepository} from "../../../interface/database/mysql/TaskRepository";
import {Task} from "../../../domain/Task";
import {toCreateTaskDTO} from "../../../interface/database/repsitory/task/TaskDTO";

class TaskCreateUseCase {
    private taskRepository: TaskRepository;

    constructor(taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }

    public createTask(task: Task): Promise<Task> {
        const taskDTO = toCreateTaskDTO(task);
        return this.taskRepository.create(taskDTO);
    }
}