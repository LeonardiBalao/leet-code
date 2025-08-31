var ListNode = function (val) {
    this.val = val;
    this.next = null;
}

var MyQueue = function () {
    this.head = new ListNode(0);
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    let curr = this.head;
    while (curr.next) {
        curr = curr.next;
    }
    curr.next = new ListNode(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    const element = this.head.next;
    this.head.next = this.head.next.next;
    return element.val;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    return this.head.next.val;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.head.next === null;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */