const numberDiv = document.getElementById('numbers')
var color;






for(var i=0; i<=101; i++){
    let prime = true;
    if(i%2==0){
        color = 'green'
    } else {
        color = 'yellow'
    }

    if(i>1){
        for(let j=2; j<i; j++){
            if(i%j == 0){
                 prime = false;
                break;
            }
        }
        if(prime){
            color = 'red'
        }
    }

   

    var div = `<div style="background: ${color};"><h2>${i}</h2></div>`;
    numberDiv.innerHTML += div;
}
