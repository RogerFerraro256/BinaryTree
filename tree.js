
Tree.prototype.traverse = function () {
    this.root.visit(this.root);
}

function Tree() {
    this.root = null;
}

Tree.prototype.search=function(value){
    var found = this.root.search(value);
    return found;
}

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