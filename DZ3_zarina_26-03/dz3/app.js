for(var i = 0; i <= 100; i++){
    if (i % 5 === 0 && i % 3 === 0){
        console.log('fizzbuzz');
    }else if (i % 5 === 0){
        console.log('buzz');
    }else if (i % 3 === 0){
        console.log('fizz');
    }else {
        console.log(i);
    }
}


var slova =  ['milk', 'beer', 'beer', 'milk', 'milk'];
var once = ['milk']
var two = ['beer']
for (var i = 0; i < slova.length; i++){
    if(once.includes(slova[i].toLowerCase())){
        console.info(`${slova[i]} good`);
        continue
    }if(two.includes(slova[i].toLowerCase())){
        console.info(`${slova[i]} bad`);
        continue
    }
    console.log(`${slova[i]}`)
}