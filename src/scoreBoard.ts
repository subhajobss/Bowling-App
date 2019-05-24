// function bowler(person){
//     return 'Hello, '+ person;
// }
// let user = 'Subha'

// document.body.innerHTML = bowler(user);


    let strike : boolean = false;
    let spare: boolean  = false;
    let noOfRolls = 0;
    let frameCount = 1;
    var buttonDisabled = false;
    var roll1Score : number;
    var roll2Score : number;
    var roll3Score : number;
    let overallScore :number = 0;

    function roll (min,max){
         document.getElementById('roll3').innerHTML = '';
         document.getElementById('frame1').innerHTML = '';
        if(frameCount == 11){
            frameCount = 1;  
            document.getElementById('overallScore').innerHTML = `OVERALL SCORE : ${overallScore}`;
            document.getElementById('over').innerHTML ='GAME OVER!!! Load the page to START again'; 
            document.getElementById('roll1').innerHTML = '';
            document.getElementById('roll2').innerHTML = '';
            (<HTMLInputElement> document.getElementById("scoreBtn")).disabled = true;
            this.overallScore = 0;
            return;
        }
        noOfRolls++;
        let score : number =  Math.floor(Math.random() * (max - min)) + min;
        if(noOfRolls == 1){
            roll1Score = score;
            document.getElementById('roll1').innerHTML = `Roll ${noOfRolls + ':'+ roll1Score}`; 
            this.checkIfStrike();
        }        
        if(noOfRolls == 2){
            if(roll1Score + score > 10){
                score = 0;
            }
            roll2Score = score;
            document.getElementById('roll2').innerHTML = `Roll ${noOfRolls + ':'+ roll2Score}`;         
            if(roll1Score + roll2Score != 10){               
                spare = false;
                this.calculateTotal(roll1Score,roll2Score);
                noOfRolls = 0;
                frameCount++;               
                return;              
            }else{
                spare = true;
            }
        }
        if(noOfRolls == 3){
            roll3Score = score;
            document.getElementById('roll3').innerHTML = `Roll ${noOfRolls + ':'+ roll3Score}`;
            noOfRolls = 0;
            frameCount++;
            this.calculateTotal(roll1Score,roll2Score,roll3Score);
        }
    }
  
    function checkIfStrike() {
        if(roll1Score === 10){
            strike = true;
        }else{
            strike = false;
        }
    }
    function calculateTotal(r1, r2, r3) {
        if(spare){
            overallScore  +=10+(2*r3);
            document.getElementById('frame1').innerHTML = `Score : ${this.overallScore}`;
            return;
        }
        if(strike){
            overallScore += r1+(2*r2+r3);
            document.getElementById('frame1').innerHTML = `Score : ${this.overallScore}`;
            return;
        }
        else{
            overallScore += r1+r2;
            document.getElementById('frame1').innerHTML = `Score : ${this.overallScore}`;
        }
    }
    
