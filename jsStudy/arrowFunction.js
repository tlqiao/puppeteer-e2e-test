function add(a,b) {
    return a+b
}
var obj={
    birth : 1990,
    getAge: function () {
        return 100
    }
};
var double = num => num * 2;
var addTwo = (a,b) => {return a+b};

const addThree = async (a,b) => {
    return a+b;
}

console.log(obj.getAge());
console.log(add(1,2));
console.log(double(3))
console.log(addTwo(1,3))
console.log(addThree(1,4))