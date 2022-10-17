const {NotImplementedError} = require('../extensions/index.js');
const {ListNode} = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
    //пройти по всем узлам сравниваю вэлью каждого узла, если вэлью совпадает, удалить
    let currentNode = l;
    let prev = null;

    do {
        if (currentNode.value === k) {
            if (prev === null) {
                l = currentNode.next;
            } else {
                prev.next = currentNode.next;
            }
        } else {
            prev = currentNode;
        }
        currentNode = currentNode.next;
    }
    while (currentNode !== null);
    return l;
    // let node = this.head;
    // // Итерирование до тех пор, пока не будет найден нужный элемент
    //
    // while (node !== null) {
    //   // Если есть следующий элемент и его значение равно искомому --
    //   // выставление ссылки на элемент, который следует за следующим, в текущий элемент O(1)
    //   if (node.next !== null && node.next.key === k) {
    //       this.node = node.next.next; //node.setNext(node.next.next);
    //     return;
    //   }
    //   node = node.next;
    // }
}

module.exports = {
    removeKFromList
};

