"use strict";

const { clear } = require("@11ty/eleventy/src/TemplateCache");

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
// left numero menores que value 
// rigth numero mayores que value
function BinarySearchTree(value) { // mi funcio constructora en este cas0 BinarySearchTree VALUE ES 20
  this.value = value; 
  this.right = null;
  this.left = null;
}
BinarySearchTree.prototype.insert = function (value){ // para insertar nodos
if(value > this.value){
  if(this.right !== null){
    this.right.insert(value)
  }
  else{
    this.right = new BinarySearchTree (value)
  }
}
if(value < this.value){
  if(this.left !== null){
    this.left.insert(value)
  }
  else {
    this.left = new BinarySearchTree (value)
    }
  }
}

BinarySearchTree.prototype.contains = function (value){ // conti8ene
  if(this.value ===  value){
    return true ;
  }
  else if (value > this.value){
    if(this.right === null){
      return false ;
     }
    return this.right.contains(value)
    }
      else {
    if(this.value === value){
    return true ;
   }
   else if( value < this.value){
    if(this.left === null){
      return false;
    }
    return this.left.contains(value)
   }

  }
} 

  BinarySearchTree.prototype.depthFirstForEach = function(cb, orderp) {
    let order = (['in-order', 'pre-order', 'post-order'].indexOf(orderp) > -1) ? orderp : 'in-order';
    
    if (order === 'pre-order') cb(this.value);
    if (this.left) this.left.depthFirstForEach(cb, order);
    if (order === 'in-order') cb(this.value);
    if (this.right) this.right.depthFirstForEach(cb, order);
    if (order === 'post-order') cb(this.value);// otra forma de hacerlo
}
BinarySearchTree.prototype.breadthFirstForEach = function (cb,array=[]){
if(this.left)array.push(this.left);
if(this.right)array.push(this.right);
cb(this.value);
if(array.length > 0){
  array.shift().breadthFirstForEach(cb, array)
}
}

BinarySearchTree.prototype.size = function(){
  if(this.right === null && this.left === null) return 1;
  if(this.left !== null  && this.right === null) return 1 + this.left.size();
  if(this.right !== null && this.left === null) return 1 + this.right.size();
  if(this.right !== null && this.left !== null) return 1 + this.right.size() + this.left.size()
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
