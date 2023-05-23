class DB{
    
    
    constructor(){
        this.count = 0;
        this.users = new Map()
    }

    create(obj){

        if(typeof obj !== 'object'|| Array.isArray(obj) || obj === null){
            throw new TypeError ("Parameter is not an object")
        }
        
        // property validation
        if(!obj.name){
            throw new Error("Object doesn't have propety 'name'")
        }
        
        if(!obj.age){
            throw new Error("Object doesn't have propety 'age'")
        }
        if(!obj.country){
            throw new Error("Object doesn't have propety 'country'")
        }
        if(!obj.salary){
            throw new Error("Object doesn't have propety 'salary'")
        }

        // property type validation
        if(typeof obj.name !== 'string'){
            throw new TypeError("name is not a string")
        }
        if(typeof obj.age !== 'number'){
            throw new TypeError("age is not a number")
        }
        if(typeof obj.country !== 'string'){
            throw new TypeError("country is not a string")
        }
        if(typeof obj.salary !== 'number'){
            throw new TypeError ("salary is not a number")
        }
        
        if(Object.getOwnPropertyNames(obj).length !== 4){
            throw new Error("Too many properties")
        }


        let id = (this.count + 1).toString();
        this.count += 1;
        this.users.set(id, obj);
        return id
    }

    read(id){
        if(arguments.length === 0){
            throw Error("Parameter is not passed to the method ")
        }

        if(typeof id !== 'string'){
            throw new TypeError ("Parameter is not a string")
        }
        

        if(this.users.has(id)){
            return this.users.get(id)
        }else{
            return null
        }
    }

    readAll(){
        if(arguments.length > 0){
            throw new Error("Method shouldn't take argument")
        }
        let userArr =[];
        this.users.forEach((value, key) => {
            userArr.push(this.users.get(key));
        })
        return userArr;
    }

    update(id , obj){
        //id validation
        if(typeof id !== 'string'){
            throw new TypeError ("Parameter is not a string")
        }
        
        if(!this.users.has(id)){
            throw new Error("Non-existing id")
        }

        //object validation
        if(typeof obj !== 'object'|| Array.isArray(obj) || obj === null){
            throw new TypeError ("Parameter is not an object")
        }

        for(let key in obj){
            if(!this.users.get(id).hasOwnProperty(key)){
                throw new Error ("Key is not valid");
            }
        }

        // property type validation
        if(obj.name && typeof obj.name !== 'string'){
            throw new TypeError("name is not a string")
        }
        if(obj.age && typeof obj.age !== 'number'){
            throw new TypeError("age is not a number")
        }
        if(obj.country && typeof obj.country !== 'string'){
            throw new TypeError("country is not a string")
        }
        if(obj.salary && typeof obj.salary !== 'number'){
            throw new TypeError ("salary is not a number")
        }

        for(let key in obj){
            this.users.get(id)[key] = obj[key]
        }
        return id;
        
    }

    delete(id){
        if(typeof id !== 'string'){
            throw new TypeError ("Parameter is not a string")
        }

        if(!this.users.has(id)){
            throw new Error("Non-existing id")
        }
        return this.users.delete(id);

    }

}

