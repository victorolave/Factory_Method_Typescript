import { ConsoleLogger } from './ConsoleLogger';
import { FileLogger } from './FileLogger';
import { DatabaseLogger } from './DatabaseLogger';

export class LoggerFactory {

    getLogger(type: Object);

    getLogger(type: 'Console'): ConsoleLogger;
    getLogger(type: 'File'): FileLogger;
    getLogger(type: 'Database'): DatabaseLogger;

    public getLogger(option): ConsoleLogger | FileLogger | DatabaseLogger {

        if (option.type === 'Console') {
            const console = new ConsoleLogger(option.message);
            return console;
        }
        else if (option.type === 'File') {
            const file = new FileLogger(option.message);
            return file;
        }
        else if (option.type === 'Database') {
            const db = new DatabaseLogger(option.message);
            return db;
        }
        else 
        {
            console.error("Type Not Found");
        }
    } 

}