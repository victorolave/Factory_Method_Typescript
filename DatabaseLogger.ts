export class DatabaseLogger {
    
    private message: string;

    constructor (message: string)
    {
        this.message = message;
    }

    log()
    {
        console.log("By Database: " + this.message);    
    }
}