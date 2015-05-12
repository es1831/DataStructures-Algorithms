var Node = function(data){
  this.data = data;
  this.next = null;
}

var Stack = function(){
  this.head = null;
}

Stack.prototype.push = function(data){
  var newNode = new Node(data);
  if(this.head){
    newNode.next = this.head;
    this.head = newNode;
  }
  else{
    this.head = newNode;
  }
}

Stack.prototype.pop = function(){
  if(this.head){
    var remove = this.head.data;
    this.head = this.head.next;
    return remove;
  }
  else{
    return;
  }
}
