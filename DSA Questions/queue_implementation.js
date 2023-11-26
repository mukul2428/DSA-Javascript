class Queue {
    constructor(){
        this.items = [];
    }
    //check if queue is empty
    isEmpty(){
        return this.items.length === 0;
    }
    //add an element to queue
    enqueue(item){
        this.items.push(item);
    }
    //remove and return the front element of queue
    dequeue(){
        if(this.isEmpty()){
            return null;
        }
        return this.items.shift();
    }
    //return the front element of queue without removing it
    front(){
        if(this.isEmpty()){
            return null;
        }
        return this.items[0];
    }
    //return the size of queue
    size(){
        return this.items.length;
    }
    //clear the queue
    clear(){
        this.items = [];
    }
}
//example ussage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // 1
console.log(queue.front()); //2
console.log(queue.size()); //2
console.log(queue.isEmpty()); //false

queue.clear();
console.log(queue.isEmpty()); //true