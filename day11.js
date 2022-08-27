// callback: gọi 1 function trong 1 function khác

function funcA(){
    console.log('Meo');
}

function funcB(callback){
    callback();
}

funcB(funcA);