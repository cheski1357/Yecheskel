class Student {
    constructor(first, last, age, grade){
        this.first=first;
        this.last = last;
        this.age = age;
        this.grade = grade;

    }
}

const joe = new Student('joe','Biden', 34, 'D');
console.log(joe);

const students = [
    joe, 
new Student('Theo', 'vanG', 34, 'C'),
new Student ('Marie', 'alRietti', 56, 'B')];

console.log(students)

function printStudents(backwards, ...studentArray){
    studentArray.forEach(student => {
        const {first, last, age, grade}= student;
        console.log(`${first} ${last} ${age} ${grade}`)
        
    });  

}
printStudents(...students);





































