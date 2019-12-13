import {Task} from "../../../../domain/Task";

interface TaskUpdateDTO {
    id: number;
    title: string;
}

interface TaskCreateDTO {
    id: number;
    title: string;
}

/**
 * taskをupdateするためのDTO
 * @param task
 * @return TaskUpdateDTO
 */
const toUpdateTaskDTO = (task: Task): TaskUpdateDTO => {
    return {id: task.id, title: task.title};
};

/**
 * taskを新規に作成する時のDTO
 * @param task
 * @return TaskCreateDTO
 */
const toCreateTaskDTO = (task: Task): TaskCreateDTO => {
    return {id: task.id, title: task.title};
};

export {TaskCreateDTO, TaskUpdateDTO, toCreateTaskDTO, toUpdateTaskDTO}