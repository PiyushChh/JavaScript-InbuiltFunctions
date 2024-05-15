const ages=[5,10,20,25,32,3,100]

function implementForEach(ages,callback){
    for(let age of ages){
        callback(age)
    }
}

function implementMap(ages,callback){
    let arr=[]
    for(let age of ages){
        arr.push(callback(age));
    }
    return arr;
}

function implementFilter(ages,callback){
    let arr=[]
    for(let age of ages){
        if(callback(age)){
            arr.push(age);
        }
    }
    return arr;
}

function implementReduce(ages,callback,initial){
    let total=initial
    for(let age of ages){
        total=callback(total,age);
    }
    return total;
}

implementForEach(ages,age=>console.log(age));

const map=implementMap(ages,age=>Math.sqrt(age));
console.log(map);

const filter=implementFilter(ages,age=>age>10);
console.log(filter);

const reduce=implementReduce(ages,(total,age)=>total
+age,0);
console.log(reduce);
