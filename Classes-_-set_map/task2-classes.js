class user {
    constructor(name, surname, year){
        this.name = name;
        this.surname = surname;
        this. year = year;
    }

    getFullName() {
        return this.name + " " + this.surname;
    }
}

class student extends user {
    constructor(name, surname, year){
        super(name, surname);
        this.year = year;
        if(year < 2018 || year > 2021){
            throw new RangeError ('range of admision must be between 2018-2022');
        }
    }

    getCourse(){
        let numYears = 2022 - this.year;
        let course = (numYears === 4) ? 'Forth':
                     (numYears === 3) ? 'Third':
                     (numYears === 2) ? 'Second':
                     'First';
        return `${numYears} - ${course} course.`
    }

}
