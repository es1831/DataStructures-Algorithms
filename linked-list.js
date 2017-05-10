var Node = function (data) {
    this.data = data;
    this.next = null;
}

var LinkedList = function () {
    this.head = null;
}

LinkedList.prototype.insert = function (data) {
    if(!this.head) {
        var newHead = new Node(data);
        this.head = newHead;
    } else {
        var current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = newHead;
    }

}
LinkedList.prototype.delete = function (data) {
    if(!this.head) {
        return;
    } 
    if(this.head.data === data) {
        this.head = this.head.next;
        return;
    }
    var current = this.head;
    while(current.next.data !== data) {
        if(current.next === null) {
            return;
        }
        current = current.next;
    }
    current.next = current.next.next;
    return;
}
LinkedList.prototype.search = function(data) {
    if(!this.head) {
        return;
    }
    var current = this.head;
    while(current.data !== data){
        if(!current.next){
            return null;
        }
        current = current.next;
    }
    return current;
}