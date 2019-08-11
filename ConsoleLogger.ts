export class ConsoleLogger {
    
    private message: string;

    constructor (message: string)
    {
        this.message = message;
    }

    log()
    {
        console.log(this.message);    
    }
}