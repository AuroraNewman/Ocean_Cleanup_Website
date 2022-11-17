if (window.XMLHttpRequest){
    var form=document.getElementById('checkfootprint');
    var inputs = form.querySelectorAll('input');

    calculator.addEventListener("click", calculate);
    
    function calculate() {
        let unit_footprint={
            plasticbottles: 37.96, //(this is equal to 52 * the kg/year)
            plasticbags: 21.684,
            foodwrapping: 30.316,
            dairycontainers: 30.316,
            plasticboxes: 4.596,
            cups: 2.88,
            plasticpackages: 10.008,
            cleaningbottles: 0.120,
            toiletries: 0.080,
            plastictoothbrushes: 0.020,
            toothpastetubes: 0.015,
        };
        let item_footprint={}; 

        const01 = item_footprint.plasticbottles = document.getElementById('plasticbottles').value * unit_footprint.plasticbottles;
        const02 = item_footprint.plasticbags = document.getElementById('plasticbags').value * unit_footprint.plasticbags;
        const03 = item_footprint.foodwrapping = document.getElementById('foodwrapping').value * unit_footprint.foodwrapping;
        const04 = item_footprint.dairycontainers = document.getElementById('dairycontainers').value*unit_footprint.dairycontainers;
        const05 = item_footprint.plasticboxes = document.getElementById('plasticboxes').value*unit_footprint.plasticboxes;
        const06 = item_footprint.cups = document.getElementById('cups').value*unit_footprint.cups;
        const07 = item_footprint.plasticpackages = document.getElementById('plasticpackages').value*unit_footprint.plasticpackages;
        const08 = item_footprint.cleaningbottles = document.getElementById('cleaningbottles').value*unit_footprint.cleaningbottles;
        const09 = item_footprint.toiletries = document.getElementById('toiletries').value*unit_footprint.toiletries;
        const10 = item_footprint.plastictoothbrushes = document.getElementById('plastictoothbrushes').value*unit_footprint.plastictoothbrushes;
        const11 = item_footprint.toothpastetubes = document.getElementById('toothpastetubes').value*unit_footprint.toothpastetubes;
        
        let total = item_footprint.plasticbottles + item_footprint.plasticbags + item_footprint.foodwrapping + item_footprint.dairycontainers + item_footprint.plasticboxes + item_footprint.cups + item_footprint.plasticpackages + item_footprint.cleaningbottles + item_footprint.toiletries + item_footprint.plastictoothbrushes + item_footprint.toothpastetubes;
        let householdsize = document.getElementById('householdsize').value
        total = total /householdsize;
        placeholderTotal.textContent = total;
        
        let find_max_footprint = [
            const01, const02, const03, const04, const05, const06, const07, const08, const09, const10, const11
        ]
        for (var i = 0; i<find_max_footprint.length; i++){
            console.log(find_max_footprint[i]);
            console.log(typeof find_max_footprint[i]);
        }
        const max_footprint = Math.max(...find_max_footprint);
        console.log(max_footprint);

        switch(max_footprint) {
            case const01:
                placeholdertip.textContent = 'Many beverages can be purchased in glass bottles. Consider to bring reusable bottles for water and hot beverages when you are out and about.';
                break;
            case const02:
                placeholdertip.textContent = 'Bring reusable fabric totes for shopping and refuse plastic bags when offered.';
                break;
            case const03:
                placeholdertip.textContent = 'Consider to buy more unpackaged food at local markets.';
                break;
            case const04:
                placeholdertip.textContent = 'Some places offer dairy in glass containers. You could even explore recipes to make your own yogurt.';
                break;
            case const05:
                placeholdertip.textContent = 'Cut down on take-out packaging by preparing more meals at home.';
                break;
            case const06:
                placeholdertip.textContent = 'Bring your own tumbler when ordering hot beverages to go.';
                break;
            case const07:
                placeholdertip.textContent = 'Try to purchase more products in shops rather than online.';
                break;
            case const08:
                placeholdertip.textContent = 'Explore refill stations in your neighborhood to cut down on bottles from detergents and cleaning products.';
                break;
            case const09:
                placeholdertip.textContent = 'Explore refill stations in your neighborhood to cut down on plastic waste from toiletries.';
                break;
            case const10:
                placeholdertip.textContent = 'Seriously? How often do you brush your teeth? Anyway, Did you know there are toothbrushes made from wood?';
                break;
            case const11:
                placeholdertip.textContent = 'Seriously? How much toothpaste do you use? Did you know there are plastic-free alternatives available?';
                break;
        }
    }
}
