class Father{
    constructor(){

    }
    readBooks(){
        console.log('hello');
    }
}

class Son extends Father{

}

let mySon = new Son()
mySon.readBooks()