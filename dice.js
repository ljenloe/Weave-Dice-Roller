
const $root = $('#root');
export const handleSubmitClick = function(event) {

    
let weaveCount = 0;
    
    let num = document.getElementById("quantity").value;

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
    <button id="submit" type="button" value="Submit">Roll</button>`;
    

    $('#submit').replaceWith(string);

    $root.off();
    $root.on('click', '#submit', handleSubmitClick);

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
    const $root = $('#root');
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

    $root.append(`Roll how many dice? <input type="number" id="quantity" name="quantity" min="1" max="6">
    </br>
    <button id="submit" type="button" value="Submit">Roll</button>`);

    $root.on('click', '#submit', handleSubmitClick);
    
};

$(function () {
  
  main();

  });