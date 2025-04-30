const _items = new WeakMap();

class Stack {
    constructor(_items){
        _items.set(this, [])
    }

push(obj){
    _items.get(this).push(obj);
}

pop(){
    const itemArray = _items.get(this);

   if (itemArray.length === 0)
    throw new Error ('stack is Empty');

return itemArray.pop();
   
}

peek(){
    const itemArray = _items.get(this);

    if (itemArray.length === 0)
     throw new Error ('stack is Empty');

    return itemArray[itemArray.length - 1];
}

get count (){
    _items.get(this).length
}

}

const stack = new Stack()