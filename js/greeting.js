const userName = prompt('What is your name?');
const verifyName = function verifyNames(){
    if(userName === 'Marla'){
        console.log('Hooray!');
    }
    else{
        console.log('oops');
    }
};

verifyName();
