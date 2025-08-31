
var MyStack = function () {
    this.size = 0;
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
    this.stack.push(x);
    this.size++;
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
    this.size--;
    return this.stack.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
    return this.stack[this.size - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
    return this.size === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */