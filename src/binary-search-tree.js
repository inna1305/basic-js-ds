const {NotImplementedError} = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    constructor() {
        this.rootField = null; //дерево пустое, элементов нет
    }

    root() {
        return this.rootField;
        // remove line with error and write your code here
    }

    add(data) {
        this.rootField = addWithin(this.rootField, data);//добавить внутрь дерева

        function addWithin(node, data) {
            if (!node) {//если узла нет, добавить новый узел (вершина). добавление происходит здесь
                return new Node(data);
            }

            if (node.data === data) {//если такой узел уже есть, ничего не делать
                return node;
            }

            if (data < node.data) {
                node.left = addWithin(node.left, data); //если значение меньше, в левый потопок кладется узел который вернет функция аддвизин
            } else {//рекурсия потому что разветвление и нужно проверить значения потомков слева и справа
                node.right = addWithin(node.right, data);//если больше то в правый
            }
            return node;
        }

        // remove line with error and write your code here
    }

    has(data) {
        return searchWithin(this.rootField, data);//вернуть результат работы функции поиска с передачей дерева и искомого значения

        function searchWithin(node, data) {
            if (!node) { //если нет такого узла то и элемента нет
                return false;
            }
            if (node.data === data) {//значение найдено!
                return true;
            }//если узел есть, но значение не равно искомому:
            return data < node.data ? searchWithin(node.left, data) : searchWithin(node.right, data);
        }
    }

    find(data) {
        return searchWithin(this.rootField, data);//вернуть результат работы функции поиска с передачей дерева и искомого значения

        function searchWithin(node, data) {
            if (!node) { //если нет такого узла то и элемента нет
                return null;
            }
            if (node.data === data) {//значение найдено!
                return node;
            }//если узел есть, но значение не равно искомому:
            return data < node.data ? searchWithin(node.left, data) : searchWithin(node.right, data);
        }
    }

    remove(data) {
        this.rootField = removeNode(this.rootField, data);//в рут кладется результат преобразований

        function removeNode(node, data) {
            if (!node) {
                return null;//если нет узла, нал остается
            }

            if (data < node.data) { //если переданное значение меньше значения узла, идти налево и удалить
                node.left = removeNode(node.left, data);//в каждой фазе рекурсии дерево обновляется
                return node;
            } else if (data > node.data) {
                node.right = removeNode(node.right, data);
                return node;
            } else {//если узел есть, но значение не меньше и не больше значения ноды
                if (!node.left && !node.right) { //если отсутствует оба потомка
                    return null;
                }
                if (!node.left) {//если отсутствует левый потомок узел отбросить и его поддерево положить вправо
                    node = node.right;
                    return node;
                }
                if (!node.right) {//если отсутствует правый потомок
                    node = node.left;
                    return node;
                }
                //когда есть оба поддерева, ищем минимальное среди правого поддерева либо макс левого
                let minFromRight = node.right;//справа все элементы больше чем текущий, начинаем искать с корня праовго поддерева
                while (minFromRight.left) {//левее все элементы меньше чем текущий. пока есть элемент слева, перемещаемся к нему
                    minFromRight = minFromRight.left;//сдвигаем указатель на элемент  левее
                }
                node.data = minFromRight.data;//после того как минимальный найден, помещаем его значение в значение удаляемого узла
                node.right = removeNode(node.right, minFromRight.data); //удаляем минимальное значение из правого поддерева
                return node;
            }
        }
    }


    min() {
        if (!this.rootField) {
            return;//дерева нет, минимального нет
        }
        let node = this.rootField//здесь будет самый маленький элемент
        while (node.left) {
            node = node.left;
        }
        return node.data;
    }

    max() {
        if (!this.rootField) {
            return;//дерева нет, минимального нет
        }
        let node = this.rootField//здесь будет самый маленький элемент
        while (node.right) {
            node = node.right;
        }
        return node.data;
    }
}

module.exports = {
    BinarySearchTree
};

const tree = new BinarySearchTree();
tree.add(2);
tree.add(7);
tree.add(1);
tree.add(8);
tree.add(4);
tree.add(32);
tree.add(12);
tree.add(14);
tree.find(8).data