class List {
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data)
    }
}


class TodoList extends List {
    constructor(){
        super();
        this.usuario = "Jean Borges";       
    }
    monstraUsuario(){
        console.log(this.usuario);
    }    

}

const TodosList = new TodoList();
document.getElementById('addtodo').onclick = function() {
    TodosList.add('Novo todo');
}    
    
TodosList.monstraUsuario();

//arrow function

//função anonima normal
const arr = [1, 3, 5, 6, 8, 9];

const newArray = arr.map(function(item){
    return item *2;
});

console.log(newArray);

//arrow function

const newArray2 = arr.map(item => {
    return item *2;
});

console.log(newArray2);

//arrow function otimizada

const newArray3 = arr.map(item => item *2);

console.log(newArray3);