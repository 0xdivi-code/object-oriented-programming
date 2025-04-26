function HTMLELement() {
    this.click = function(){
        console.log('clicked!')
    }

    HTMLELement.prototype.focus = function(){
        console.log('focused!')
    }
}

function HTMLSelectElement(items = []) {
    this.items = items;

    this.addItem = function(item){
        this.addItem.push(item);
    }

    this.removeItem = function(){
        this.removeItem.splice(this.items.indexOf(items), 1)
    }
}

HTMLSelectElement.prototype = new HTMLElement();
HTMLSelectElement.prototype.constructor = HTMLSelectElement();