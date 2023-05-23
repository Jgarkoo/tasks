class DB{
    
    
    constructor(){
        this.count = 0;
        this.users = new Map();
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

        if(Object.getOwnPropertyNames(obj).length !== 4){
            throw new Error("Too many properties")
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

    find(obj){
        if(typeof obj !== 'object'|| Array.isArray(obj) || obj === null){
            throw new TypeError ("Parameter is not an object")
        }
        
        //property typechecking
        if(obj.name && typeof obj.name !== 'string'){
            throw new TypeError("name is not a string")
        }
        if(obj.age && typeof obj.age !== 'object' || Array.isArray(obj.age) || obj.age === null){
            throw new TypeError("age is not an object")
        }
        if(obj.country && typeof obj.country !== 'string'){
            throw new TypeError("country is not a string")
        }
        if(obj.salary && typeof obj.salary !== 'object' || Array.isArray(obj.salary) || obj.salary === null){
            throw new TypeError ("salary is not an object")
        }

        for(let key in obj){
            if(key !== 'name' && key !== 'age' && key !=='salary' && key !== 'country'){
                throw new Error("Query key is not valid");
            }
        }

        //age and salary validation
        for(let key in obj.age){
            if(key !== 'min' && key !== 'max' ){
                throw new Error("Age key is not valid")
            }
            if(typeof obj.age[key] !== 'number'){
                throw new TypeError('min and max have to be numbers');
            }
        }

        for(let key in obj.salary){
            if(key !== 'min' && key !== 'max' ){
                throw new Error("Salary key is not valid")
            }
            if(typeof obj.salary[key] !== 'number'){
                throw new TypeError('min and max have to be numbers');
            }
        }


        const arr = [];
        this.users.forEach((value, key) =>{
            let condition = true;
            for(let elem in obj){
                if(obj.name && obj.name !== value.name){
                    condition = false;
                }else if(obj.country && obj.country !== value.country){
                    condition = false;
                }else if(obj.age && ((obj.age.min && value.age < obj.age.min) || (obj.age.max && value.age > obj.age.max))){
                    condition = false;
                }else if(obj.salary && ((obj.salary.min && value.salary < obj.salary.min) || (obj.salary.max && value.salary > obj.salary.max))){
                    condition = false;
                }
            }
            if(condition){
                arr.push(value)
            }
        })    
        
        return arr





    }
    
}

