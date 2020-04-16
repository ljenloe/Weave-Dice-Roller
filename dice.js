
const $root = $('#root');

let numDice=0;
let weaveCount = 0;
export const handleSubmitClick = function(event) {

    

    
    //let num = document.getElementById("quantity").value;
    let num=numDice;

    if(num==0){
        alert("You have to roll SOME dice");
    }
    else{
    //console.log(num);
    let string = `<div id="diceroll">`;
    let idString;
    //let weaveCount = 0;
    let rolls = [];
    for(let i=0; i<num; i++) {
        rolls[i] = Math.floor(Math.random() * 6);
        switch(rolls[i]) {

            case 0:
                idString = "weave"+weaveCount;
                string+=`<img src="WeaveDie.png" id="${idString}">`;
                weaveCount++;
                break;
            case 1:
                string+=`<img src=StrikeDie.png>`;
                break;
            case 2:
                string+=`<img src=StonesDie.png>`;
                break;
            case 3:
                string+=`<img src=GalesDie.png>`;
                break;
            case 4:
                string+=`<img src=FlamesDie.png>`;
                break;
            case 5:
                string+=`<img src=BrooksDie.png>`;
                break;

        }
    }
    string+=`</div>
    </br>
    <div id="buttons">
    <button id="submit" type="button" value="Submit">Roll</button>
    <button id="clear" type="button" value="Submit">Clear Dice</button>
    </div>`;
    

    $('#buttons').replaceWith(string);

    $root.off();
    $root.on('click', '#submit', handleSubmitClick);
    $root.on('click', '#up', handleUpPress);
    $root.on('click', '#down', handleDownPress);
    $root.on('click', '#clear', main);

    for(let i = 0; i<weaveCount; i++) {
        let thisId= "weave"+i;
    $root.on('click', '#'+thisId, handleReroll);
    }
}


}

export const handleReroll = function(event) {
    let string=``;
    let currentWeave = event.target.id;
    let rando = Math.floor(Math.random() * 6);

    switch(rando) {

        case 0:
            
            string+=`<img src=WeaveDie.png id="${currentWeave}">`;
            //weaveCount++;
            break;
        case 1:
            string+=`<img src=StrikeDie.png>`;
            break;
        case 2:
            string+=`<img src=StonesDie.png>`;
            break;
        case 3:
            string+=`<img src=GalesDie.png>`;
            break;
        case 4:
            string+=`<img src=FlamesDie.png>`;
            break;
        case 5:
            string+=`<img src=BrooksDie.png>`;
            break;


}

$('#'+currentWeave).replaceWith(string);
$root.on('click', '#'+currentWeave, handleReroll);

}


export const main = function() {
    $root.off();
    $root.empty();
    //const $root = $('#root');
    /*
    $root.append(`<h1>The input element</h1>

    <form action="/action_page.php" id="initialForm">
      <label for="fname">Character Name:</label>
      <input type="text" id="character" name="character"><br><br>
      <label for="lname">Player name:</label>
      <input type="text" id="player" name="player"><br><br>
      <label for="lname">Stones:</label>
      <input type="text" id="stones" name="stones"><br><br>
      <label for="lname">Gales:</label>
      <input type="text" id="gales" name="gales"><br><br>
      <label for="lname">Flames:</label>
      <input type="text" id="flames" name="flames"><br><br>
      <label for="lname">Brooks:</label>
      <input type="text" id="brooks" name="brooks"><br><br>
      <button type="button" value="Submit">Submit</button>
    </form>`);
    */

    $root.append(`Roll how many dice? <div id="numSelect"><button id="down" type="button" value="Submit">   &nbsp&nbsp&lt   &lt&nbsp&nbsp</button>&nbsp&nbsp${numDice}&nbsp&nbsp<button id="up" type="button" value="Submit">   &nbsp&nbsp&gt  &gt&nbsp&nbsp</button></div>
    </br>
    <div id="buttons"><button id="submit" type="button" value="Submit">Roll</button></div>`);

    $root.on('click', '#submit', handleSubmitClick);
    $root.on('click', '#up', handleUpPress);
    $root.on('click', '#down', handleDownPress);

    
};

export const handleUpPress = function(event) {
    if(numDice<6) {
        numDice++;
    }

    $('#numSelect').replaceWith(`<div id="numSelect"><button id="down" type="button" value="Submit">   &nbsp&nbsp&lt   &lt&nbsp&nbsp</button>&nbsp&nbsp${numDice}&nbsp&nbsp<button id="up" type="button" value="Submit">   &nbsp&nbsp&gt  &gt&nbsp&nbsp</button></div>`);
    //alert(numDice);
}

export const handleDownPress = function(event) {
    if(numDice>0) {
        numDice--;
    }
//alert(numDice);
    $('#numSelect').replaceWith(`<div id="numSelect"><button id="down" type="button" value="Submit">   &nbsp&nbsp&lt   &lt&nbsp&nbsp</button>&nbsp&nbsp${numDice}&nbsp&nbsp<button id="up" type="button" value="Submit">   &nbsp&nbsp&gt  &gt&nbsp&nbsp</button></div>`);
}

$(function () {
  
  main();

  });