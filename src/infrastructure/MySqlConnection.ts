import {IDBConnection} from "../interface/database/mysql/IDBConnection";
import {createPool, Pool, Query} from "mysql";
import * as util from "util";

/**
 * reference : https://github.com/sadnessOjisan/ts-clean
 */
export class MySqlConnection extends IDBConnection {
    private pool: Pool;

    public constructor() {
        super();
        this.pool = createPool({
            connectionLimit: Number(process.env.CONNECTION_LIMIT),
            host: process.env.DB_HOST_DEV,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            port: Number(process.env.TIMEZONE),
            timezone: process.env.TIMEZONE,
            insecureAuth: false
        });
        this.pool.getConnection(
            (error, connection): void => {
                if (error) {
                    console.error(error);
                }

                if (connection) connection.release();
                return;
            }
        );

        // @ts-ignore
        this.pool.query = util.promisify(this.pool.query);

        this.pool.on(
            "connection",
            (connection): void => {
                console.log("mysql connection create")
            }
        );

        this.pool.on(
            "release",
            (connection): void => {
                console.log("Connection %d released", connection.threadId)
            }
        );
    }

    execute(query: string, params: number | string | null = null): Query {
        if (params != null) {
            return this.pool.query(query, params);
        }
        return this.pool.query(query)
    }
}