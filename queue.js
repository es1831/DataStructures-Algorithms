var Node = function(data){
  this.data = data;
  this.next = null;
}
var Queue = function(){
  this.first = null;
  this.last = null;
}

Queue.prototype.enqueue = function(data){
  var newNode = new Node(data);
  if(!this.last){
    this.first = newNode;
    this.last = newNode;
  }
  else{
    this.last.next = newNode;
    this.last = newNode;
  }
}
Queue.prototype.dequeue = function(){
  if(this.first){
    var remove = this.first;
    this.first = this.first.next;
    return remove;
  }
  else{
    return;
  }
}
