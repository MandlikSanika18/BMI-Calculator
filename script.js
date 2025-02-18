const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)
    let results = document.querySelector('#results')
    let guide = document.querySelector('#weight-guide')

    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML=`Please give a valid height ${height}`;
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML=`Please give a valid weight ${weight}`;
    }
    else{
        let bmi=(weight/((height*height)/10000).toFixed(2));
        results.innerHTML = `<span>${bmi}</span>`
    }
    
    const form=document.querySelector('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)
    let results = document.querySelector('#results')
    let guide = document.querySelector('#weight-guide')
    let bmi=0;
    
    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML=`Please give a valid height ${height}`;
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML=`Please give a valid weight ${weight}`;
    }
    else{
        bmi=(weight/((height*height)/10000).toFixed(2));
        results.innerHTML = `<span>${bmi}</span>`
    }
    
    if(bmi>18.6 && bmi<24.9){
        console.log("normal range");
    }
    else if(bmi<=18.6){
        console.log("underweight");
    }
    else{
       console.log("overweight");
    }
    });
    });