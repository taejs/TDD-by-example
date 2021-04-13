import { SSL_OP_EPHEMERAL_RSA } from "constants";

const shell = require('shelljs');
interface Excutable { //command
    execute();
}
class ListReciever {
    printDirLists() {
        const result = shell.exec('ls');
    }
}

class ListCommand implements Excutable {
    reciever: ListReciever;

    constructor(reciever) {
        this.reciever = reciever;
    }

    execute() {
        this.reciever.printDirLists();
    }
}


class PwdReceiver {
    printWorkingDirectory() {
        const result = shell.exec('pwd');
    }
}
class PwdCommand implements Excutable {
    reciever: PwdReceiver;

    constructor(reciever) {
        this.reciever = reciever;
    }

    execute() {
        this.reciever.printWorkingDirectory();
    }
}

class HeavyTaskRunnerReciever {
    runHeavyTasks() {
        /* 10,000줄 짜리 함수 */
        console.log('아주 무거운 태스크를 수행하고 있습니다.');
    }
}
class RunHeavyTasksCommand implements Excutable {
    reciever: HeavyTaskRunnerReciever;

    constructor(reciever) {
        this.reciever = reciever;
    }

    execute() {
        this.reciever.runHeavyTasks();
    }
}

new ListCommand(new ListReciever()).execute();
new PwdCommand(new PwdReceiver()).execute();
new RunHeavyTasksCommand(new HeavyTaskRunnerReciever()).execute();
