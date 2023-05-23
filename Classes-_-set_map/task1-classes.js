class Validator{
    isEmail(email){
        if(typeof email !== 'string'){
            throw new TypeError("Argument is not a string");
        }
        return (/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i.test(email));

    }

    isDomain(domain){
        if(typeof domain !== 'string'){
            throw new TypeError("Argument is not a string");
        }
       
        return (/^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i.test(domain));
    }

    isDate(date){
        if(typeof date !== 'string'){
            throw new TypeError("Argument is not a string");
            
        }

        return (/^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/.test(date));
    }

    isPhone(phone){
        if(typeof phone !== 'string'){
            throw new TypeError("Argument is not a string");
            
        }
        return /^\+375 \((17|29|33|44)\) [0-9]{3}-[0-9]{2}-[0-9]{2}$/.test(phone)
    }

    


}
