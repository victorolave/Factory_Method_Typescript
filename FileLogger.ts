export class FileLogger {
    
    private message: string;

    constructor (message: string)
    {
        this.message = message;
    }

    log()
    {
        console.log("By File: " + this.message);    
    }
}