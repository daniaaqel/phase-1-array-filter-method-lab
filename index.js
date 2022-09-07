// Code your solution here
function findMatching(array,name){
    return array.filter((element)=>{
        return element.toUpperCase() === name.toUpperCase();
    })
}
function fuzzyMatch(array,nameStart){
    return array.filter((element)=> {
        return element.startsWith(nameStart);
    })
}

function matchName(array, name){
    return array.filter((element)=>{
        return element.name === name;
    })
}

