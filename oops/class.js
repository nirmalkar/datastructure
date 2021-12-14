class Person {
    constructor(name, DOB){
        this.name = name
        this.year = DOB
    }
    getAge(){
        console.log(this)
        const currentDate = new Date
        return `Hemant is ${currentDate.getFullYear() - this.year.split("-")[2]} years old!!`
    }
    static getGreeting(name){
        console.log(this)
        return `Hello ${name}! Good morning!! Your DOB is ${this.year}`
    }
}


const personOne = new Person("Hemant", "06-07-1994")
console.log(personOne.getAge())
console.log(Person.getGreeting("Hemant"))