// code your solution here
function saturdayFun(fun) {
    return `This Saturday, I want to ${fun ? fun : "roller-skate"}!`
}

function mondayWork(fun) {
    return `This Monday, I will ${fun ? fun : "go to the office"}.`
}

function wrapAdjective(special) {

    return function (fun) {
        return `You are ${special + fun + special}!`
    }
}
