import {Task} from "../../../../domain/Task";
import {TaskCreateDTO, TaskUpdateDTO} from "./TaskDTO";

abstract class TaskRepositoryInterface {
    abstract async create(taskCreateDTO: TaskCreateDTO): Promise<Task>

    abstract async update(taskUpdateDTO: TaskUpdateDTO): Promise<Task>

    abstract async delete(id: number): Promise<null>
}

export {TaskRepositoryInterface}