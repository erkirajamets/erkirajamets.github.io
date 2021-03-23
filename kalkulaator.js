let selectedToode;

var summa =0;
var intress =0;
var lepinguTasu =0;
var haldusTasu =0;
var periood =0;
var sissemakse = 0;//document.getElementById('sissemakse').value;
var selectedPeriood=0;

function toode(krSumma, intress, lepTasu, haldusTasu, periood){
    
    this.krSumma =krSumma;
    this.intress =intress;
    this.lepTasu =lepTasu;
    this.haldusTasu =haldusTasu;
    this.periood =periood;
}

var p2ikesepaneelid = new toode(5000, 7.9, 50, 1, 60);
var soojuspumbad= new toode(1000, 7.9, 30, 1, 48);
var elAutodeLaadijad= new toode(1000, 5.9, 50, 2, 48);
var võrguvabaEljaam= new toode(5000, 6.5, 20, 0, 60);
var elekterGaas= new toode(1000, 8.9, 20, 1, 48);

function getSelectedToode(){
    
    const rbs = document.querySelectorAll('input[name="teenus"]');
    for (const rb of rbs) {
        if (rb.checked) {
            selectedToode = rb.id;
            break;
        }
    }
    console.log(selectedToode);
}

function getDefaultSettings(toode){
    getSelectedToode();
    summa = toode.krSumma;
    intress =toode.intress;
    lepinguTasu =toode.lepTasu;
    haldusTasu =toode.haldusTasu;
    periood =toode.periood;
    setMaxPeriood(periood);
    document.getElementById('krSumma').value=summa;
    document.getElementById('periood').value = periood;
    setOutput(intress, lepinguTasu, haldusTasu, periood);
}

function setKrSumma(newSumma){
    summa=newSumma
    setMaksud(selectedToode, summa);
    
    
}
function setPeriood(Periood){
    periood=Periood;
    costOfProject();    
    document.getElementById('perioodOut').innerHTML=periood + " kuud";
    
}
//TODO kuna siin meetodis teeb uued optionid, siis võiks eelmise valitud optioni meelde jätta ja seda jätkuvalt näidata
function setMaxPeriood(maxPeriood){

    var sel = document.getElementById("periood");
    while(sel.length>0){
        sel.remove(0);  
    }
    
    for(var i=6; i<=maxPeriood; i+=6){
        var opt = document.createElement("option");
        opt.value= i.toString();
        opt.text = i.toString();
        if(i==periood){
            sel.selectedIndex="5";
            console.log("test");
        }
        
        sel.add(opt);
        console.log(i);
    }
}
function setMaksud(toode, krSumma){

    switch(toode){
        case "p2ikesepaneelid":
            intress = 7.9;
            lepinguTasu= 50;
            haldusTasu=1;
            setMaxPeriood(120);
            setOutput(intress, lepinguTasu, haldusTasu, periood);
            
            break;

        case "soojuspumbad":
            if (krSumma < 2000) {
                intress = 7.9;
                lepinguTasu= 30;
                haldusTasu=1;
                setMaxPeriood(72);
                setOutput(intress, lepinguTasu, haldusTasu, periood);
                
            }
            else if (krSumma >= 2000 && krSumma < 6000) {
                intress = 6.5;
                lepinguTasu= 20;
                haldusTasu=1;
                setMaxPeriood(72);
                setOutput(intress, lepinguTasu, haldusTasu, periood);
                
            }
            else if (krSumma >= 6000) {
                intress = 5.9;
                lepinguTasu= 20;
                haldusTasu=1;
                setMaxPeriood(120);
                setOutput(intress, lepinguTasu, haldusTasu, periood);
                
            }
            break;
        case "elekterGaas":
            if (krSumma < 1000) {
                intress = 9.9;
                lepinguTasu=30;
                haldusTasu=1;
                setMaxPeriood(72);
                setOutput(intress, lepinguTasu, haldusTasu, periood);
                
            }
            else if (krSumma >= 1000 && krSumma < 2000) {
                intress = 8.9;
                lepinguTasu=20;
                haldusTasu=1;
                setMaxPeriood(72);
                setOutput(intress, lepinguTasu, haldusTasu, periood);
                
            }
            else if (krSumma >= 2000 && krSumma < 6000) {
                intress = 7.5;
                lepinguTasu=20;
                haldusTasu=0;
                setMaxPeriood(72);
                setOutput(intress, lepinguTasu, haldusTasu, periood);
                
            }
            else if (krSumma >= 6000) {
                intress = 6.9;
                lepinguTasu=20;
                haldusTasu=0;
                setMaxPeriood(120);
                setOutput(intress, lepinguTasu, haldusTasu, periood);
                
            }
            break;
        case "võrguvabaElekter":
            if (krSumma < 2000) {
                intress = 7.9;
                lepinguTasu=30;
                haldusTasu=0;
                setMaxPeriood(72);
                setOutput(intress, lepinguTasu, haldusTasu, periood);
                
            }
            else if (krSumma >= 2000 && krSumma < 6000) {
                intress = 6.5;
                lepinguTasu=20;
                haldusTasu=0;
                setMaxPeriood(72);
                setOutput(intress, lepinguTasu, haldusTasu, periood);
                
            }
            else if (krSumma >= 6000) {
                intress = 5.9;
                lepinguTasu=20;
                haldusTasu=0;
                setMaxPeriood(120);
                setOutput(intress, lepinguTasu, haldusTasu, periood);
                
            }
            break;
        case "elAutodeLaadimislahendus":
            if (krSumma < 2000) {
                intress = 5.9;
                lepinguTasu=50;
                haldusTasu=2;
                setMaxPeriood(72);
                setOutput(intress, lepinguTasu, haldusTasu, periood);
                
            }
            else if (krSumma >= 2000 && krSumma < 6000) {
                intress = 4.5;
                lepinguTasu=40;
                haldusTasu=2;
                setMaxPeriood(72);
                setOutput(intress, lepinguTasu, haldusTasu, periood);
                
            }
            else if (krSumma >= 6000) {
                intress = 3.9;
                lepinguTasu=30;
                haldusTasu=2;
                setMaxPeriood(120);
                setOutput(intress, lepinguTasu, haldusTasu, periood);
                
            }
            break;
    }
}
function setOutput(intress, lepinguTasu, haldusTasu, periood){
    document.getElementById('intress').innerHTML =intress + " %";
    document.getElementById('lepingutasu').innerHTML= lepinguTasu + " €";
    document.getElementById('haldustasu').innerHTML=haldusTasu + " €";
    document.getElementById('perioodOut').innerHTML=periood + " kuud";
    costOfProject();
}
function setSissemakse(Sissemakse){
    if(Sissemakse>=summa){
        document.getElementById('sissemakseError').innerHTML="Sissemakse ei saa olla suurem kui krediidisumma!";
        
    }
    else{
        document.getElementById('sissemakseError').innerHTML="";
        sissemakse=Sissemakse;
        costOfProject();
    }
    
}
function costOfProject(){
    document.getElementById('projektiMaksumus').innerHTML=((summa-sissemakse)*(1 +(intress/100)*(periood/12))).toFixed(2);
    document.getElementById('kuumakse').innerHTML=((summa-sissemakse)*(1 +(intress/100)*(periood/12))/periood).toFixed(2);
}

function getAlert(){
    if(sissemakse>=0){
        alert("Taotlus esitatud!");
    }
    
}