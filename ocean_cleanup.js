if (window.XMLHttpRequest){
    var form=document.getElementById('checkfootprint');
    var inputs = form.querySelectorAll('input');

    //syntax for add event listener element.addEventListener("click", function, optional boolean)
    var inputs = document.querySelectorAll('input');
    const buttonTwo /*this is a class*/ =document.querySelector('.btn-2');
    function alertBtn(){
        alert('hello other heffalump');
    }
    var newColor = document.querySelector('aside');
    function changeBgColor(){
        newColor.style.backgroundColor = 'aliceblue';
    }
    newColor.addEventListener("input", changeBgColor);

    var plasticbottles = document.getElementById('plasticbottles');
        plasticbottles =plasticbottles.value;
        plasticbottles *=(52*0.730);
        //plasticbottles.addEventListener('change', calculate);
        console.log(plasticbottles);
    var plasticbags = document.getElementById('plasticbags');
        plasticbags =plasticbags.value;
        plasticbags *=(52*0.417);
    var foodwrapping = document.getElementById('foodwrapping');
        foodwrapping = foodwrapping.value;
        foodwrapping *=(52*0.583);
    var dairycontainers = document.getElementById('dairycontainers');
        dairycontainers = dairycontainers.value;
        dairycontainers *=(52*0.383);
    var plasticboxes = document.getElementById('plasticboxes');
        plasticboxes = plasticboxes.value;
        plasticboxes *=(12*0.383);
    var cups = document.getElementById('cups');
        cups = cups.value;
        cups*=(12*0.240);
    var plasticpackages = document.getElementById('plasticpackages');
        plasticpackages = plasticpackages.value;
        plasticpackages*=(12*0.834);
    var cleaningbottles = document.getElementById('cleaningbottles');
        cleaningbottles = cleaningbottles.value;
        cleaningbottles*=0.120;
    var toiletries = document.getElementById('toiletries');
        toiletries = toiletries.value;
        toiletries*=0.080;
    var plastictoothbrushes = document.getElementById('plastictoothbrushes');
        plastictoothbrushes = plastictoothbrushes.value;
        plastictoothbrushes*=0.020;
    var toothpastetubes = document.getElementById('toothpastetubes');
        toothpastetubes = toothpastetubes.value;
        toothpastetubes*=0.015;
    
    var total;
    total = plasticbottles + plasticbags + foodwrapping + dairycontainers + plasticboxes + cups + plasticpackages + cleaningbottles + toiletries + plastictoothbrushes + toothpastetubes;
    
    const calcContents = document.getElementById('calculator');  
    //calculate(total);
    console.log(typeof plasticbottles);
    console.log(typeof plasticbags);
    console.log(typeof foodwrapping);
    console.log(typeof dairycontainers);
    console.log(typeof plasticboxes);
    console.log(typeof cups);
    console.log(typeof plasticpackages);
    console.log(typeof cleaningbottles);
    console.log(typeof toiletries);
    console.log(typeof plastictoothbrushes);
    console.log(typeof toothpastetubes);

    function calculate(){
        total = plasticbottles + plasticbags + foodwrapping + plasticbags + plasticpackages + cleaningbottles + toiletries + plastictoothbrushes + toothpastetubes + cups;
        var householdsize = document.getElementById('householdsize');
        householdsize = parseInt(householdsize.value);
        console.log(typeof householdsize);
        total = total / householdsize;
        return total;        
    }   
    /*
    var householdsize = document.getElementById('householdsize');
        householdsize = parseInt(householdsize.value);
    console.log(typeof householdsize);
    */
    calcContents.addEventListener('change', calculate);

    //calcContents.addEventListener('change', calculate);
    console.log(total);
    
    const tempTotal = document.getElementById("placeholderresult"); //NB: changed this from having just one word absent to the whole sentence
    tempTotal.textContent = `Your estimated plastic footprint is ${total} kg / year`;
    
    //total.addEventListener('change', calculate);
}
