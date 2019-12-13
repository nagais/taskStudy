import {TaskRepositoryInterface} from "../repsitory/task/TaskRepositoryInterface";
import {TaskCreateDTO, TaskUpdateDTO} from "../repsitory/task/TaskDTO";
import {Task} from "../../../domain/Task";
import {IDBConnection} from "./IDBConnection";

class TaskRepository extends TaskRepositoryInterface {

    private connection: IDBConnection;

    public constructor(connection: IDBConnection) {
        super();
        this.connection = connection;
    }

    async create(taskCreateDTO: TaskCreateDTO): Promise<Task> {
        return await this.connection.execute(
            `INSERT INTO Tasks (id, title) VALUES ("${taskCreateDTO.id}", "${taskCreateDTO.title}")`
        );
    };

    async delete(id: number): Promise<null> {
        await this.connection.execute("delete from Tasks where id = ?", id);
        return null
    }

    async update(taskUpdateDTO: TaskUpdateDTO): Promise<Task> {
        return await this.connection.execute(
            "update Tasks set title = ? where id = ?", [taskUpdateDTO.title, taskUpdateDTO.id]
        )
    }
}

export {TaskRepository};
