let ladder = {
    step: 0,
    up: function() {
        this.step++;
        return this;
        },
    down: function() {
        this.step--;
        return this;
        },
    showStep: function() {
        alert(this.step);
        return this;
    }
}

ladder.up().up().down().showStep();



/*
function test(){

}
const testObject = {
    name: 'Test',
   /!* sayHi: function (){
        console.log('Hi!')
    }*!/
}
testObject.sayHi = function (){
    console.log('Hi!!!')
}

testObject.sayHi();

*/

/*
const testObject = {
    name: 'Stas',
    sayHi: function () {
        console.log(`${this.name}: Hi!`);
    }
}
testObject.sayHi();
*/
/*
let skill ={
    name: "HTML",
    lvl: 5,
    showString: function (){
        return this.name + ':' + this.lvl;
    }
}
console.log(skill.showString());*/
