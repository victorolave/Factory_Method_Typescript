import { LoggerFactory } from './loggerFactory';

const loggerFactory = new LoggerFactory();

const Console = loggerFactory.getLogger({message: 'Bye World', type: 'File'});
Console.log();
