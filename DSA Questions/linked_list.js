class Node{
    constructor(data){
        this.data = data; //data to be stored in node
        this.next = null; //refernce to next node, initially null
    }
}

class LinkedList{
    constructor(){
        this.head = null; //head of list
    }

    //add a new node with given data to end of list
    append(data){
        const newNode = new Node(data); //create a new node
        if(!this.head){
            this.head = newNode; //if list is empty, set new node as head
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next; //traverse to last node
        }
        current.next = newNode; //set new node as next node of last node
    }

    //to display data
    display(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const linkedList = new LinkedList();

// Append nodes with data
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);

// Display the linked list
linkedList.display(); // Outputs: 10, 20, 30
