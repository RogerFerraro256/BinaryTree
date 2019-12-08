
//creates the fucking node
function Node(value,x,y) {
    this.value = value;
    this.left = null;
    this.right = null;

    this.x=x;
    this.y=y;

}

//help with searching the value, returning the node.
Node.prototype.search = function (value) {
    if (this.value == value) {
        return this;
        
    } else if (value < this.value && this.left != null) {
        return this.left.search(value);
    } else if (value > this.value && this.right != null) {
        return this.right.search(value);
    } 
    

}
 
//this will add the value and draw in the dumb graphic view
Node.prototype.visit = function (parent) {
    if (this.left != null) {
        this.left.visit(this);

    }

    console.log(this.value);
    
    fill(255);
    noStroke();
    
    textAlign(CENTER);
    text(this.value,this.x,this.y);

    stroke(255);
    noFill();
    ellipse(this.x,this.y,40,40);

    stroke(255);
    line(parent.x,parent.y,this.x,this.y);

    if (this.right != null) {
        this.right.visit(this);
    }


}

//this will create the new node and put it in place
Node.prototype.addNode = function (n) {


    //i tried to make this work but unfortunately it didnt happened

    if (n.value < this.value) {
        if (this.left == null) {
            this.left = n;
            this.left.x=this.x-50;
            this.left.y=this.y+20;
        } else {
            this.left.addNode(n);
        }

    } else if (n.value > this.value) {
        if (this.right == null) {
            this.right = n;
            this.right.x=this.x+50;
            this.right.y=this.y+20;
        } else {
            this.right.addNode(n);
        }
    }
}
