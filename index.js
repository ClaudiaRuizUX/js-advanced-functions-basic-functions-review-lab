
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`
}

///--------------------------------

function wrapAdjective(adjective="special", flair="*") { 
    return (`You are ${flair} ${adjective} ${flair}!`);
}

let result = wrapAdjective("special", "*");
let emphatic = wrapAdjective("a hard worker", "||");

///--------------------------------

let Calculator = {
    add: function (a, b) { return a + b},
    subtract: function (a, b) { return a - b},
    multiply: function (a, b) { return a * b},
    divide: function (a, b) { return a / b}
};

///--------------------------------

arrayOfTransforms = [
    function(a){ return a * 2 },
    function(a){ return a + 1000},
    function(a){ return a % 7 }
]
function actionApplyer (a, arrayOfTransforms){
    let message = "13, multiplied by 2, added to 1000 and then modulo 7 is 4. Apply each function in the Array of functions on the given base (13) OR on the result of the use of the previous function to get this result"
    for (let i = 0; i<3; i++) {
    return arrayOfTransforms[1](a)
    }
}
