//this will get the next branch of the tree
Tree.prototype.traverse = function () {
    this.root.visit(this.root);
}

function Tree() {
    this.root = null;
}

//this will search a node that you put
Tree.prototype.search=function(value){
    var found = this.root.search(value);
    return found;
}

//thus add a node or value to this shit
Tree.prototype.addNode = function (value) {
    var n = new Node(value);

    if (this.root == null) {
        this.root = n;
    
        this.root.x=width/2;
        this.root.y=16;
    } else {
        this.root.addNode(n);
    }

}