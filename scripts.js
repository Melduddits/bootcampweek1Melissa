    var seizoen = 0;

    function Volgend() {
        if(seizoen == 4){
            seizoen = 1;
        } else {
            seizoen ++;
        }        
    
        switch (seizoen){
            case 1:
            document.getElementById("PlaatjeA").innerHTML = "<img src=\"https://blog.westfalengassen.nl/wp-content/uploads/2018/07/zomer.jpg\">"
            document.getElementById("PlaatjeB").innerHTML = "";
            break;
            case 2:
            document.getElementById("PlaatjeA").innerHTML = "<img src=\"https://www.peterhahn.nl/magazine/wp-content/uploads/sites/2/1_herbst-outfits-1.jpg\">"
            break;
            case 3:
            document.getElementById("PlaatjeA").innerHTML = "<img src=\"https://www.elle.be/nl/wp-content/uploads/2018/12/winter_v.jpg.webp\">"
            break;
            case 4:
            document.getElementById("PlaatjeA").innerHTML = "<img src=\"https://infobron.nl/afbeelding/1692/Wanneer-begint-de-lente\">"
            document.getElementById("PlaatjeB").innerHTML = "<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Lamb_nl.JPG/1200px-Lamb_nl.JPG\">"
            break;
        }
    }