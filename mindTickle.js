/**
 *
 * Task runner:
 * Performs tasks sequentially
 *
 * Additions:
 * 1. retry
 * 2. timeout
 * 3. concurrency
 *
 */

class TaskRunner {
  isExecuting = false;
  stackObj = [];

  continueEnqueue() {
    if (this.stackObj.length > 0) {
      const { task, callback } = this.stackObj.pop();
      this.isExecuting = false;
      this.enqueue(task, callback);
    }
  }

  completeTask(...args) {
    callback(args[1], null);
    this.continueEnqueue();
  }

  rejectTask(...args) {
    callback(null, args[1]);
    this.continueEnqueue();
  }

  enqueue(task, callback) {
    if (this.isExecuting) {
      this.stackObj.push({ task, callback });
    } else {
      this.isExecuting = true;
      task(
        this.completeTask.bind(this, callback),
        this.rejectTask.bind(this, callback)
      );
    }
  }
}

// 1. wait for execution time of the task

// Usage:

const taskRunner = new TaskRunner();

let firstTask = (completeTask, rejectTask) => {
  setTimeout(() => {
    completeTask("First task complete");
  }, 2000);
};

let secondTask = (completeTask, rejectTask) =>
  setTimeout(() => {
    rejectTask("Second task rejected");
  }, 5000);
const callback = (succ, err) => console.log(succ, err);

taskRunner.enqueue(secondTask, callback);
taskRunner.enqueue(firstTask, callback);
