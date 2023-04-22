/* отображение текста на экране */
  let div = document.createElement('div');
  div.className = "info";
  let message = "Click here to start game or keygen Ener!!! KeyDown \'S\' - left, KeyDon \'F\' - Right";
  div.innerHTML = `${message}`;
  document.body.append(div);

let count=+0;
let oK=3000;
let intervall=0;
let timer=+0;
let ti=+0;
let ti2=100;
document.querySelector('.info').addEventListener('click',goPlayGame);
// window.addEventListener('keydown',(e)=>{
//   if(e.key=='Enter'){
//     goPlayGame();
//   }
// })
function goPlayGame(){
  count++;
  if(count==1){
      intervall=setInterval(()=>addBlock(),`${oK}`);
      timer=setInterval(()=>{document.getElementById('timer').innerHTML='<span style="color:green;font-size:20px;border:3px solid green;">' +`${ti++}`+'</span>'},`${ti2}`);
      div.innerHTML="go!";
    }else if(count==2){
      clearInterval(intervall);
      clearInterval(timer);
      // clearInterval(interval);
      console.log(count+"_"+'and'+oK);
      div.innerHTML="<span style='color:red'>paused!</span>";
      count=0
    }else{
      oK=300;
      console.log(count+"_"+'and'+oK);
      count=0;
    }
}//goPlayGame

function addBlock() {
  let randomLine=Math.floor(Math.random() * 6);
    let line = document.getElementsByClassName("row")[randomLine];
    let block = document.createElement("p");
    block.classList.add("hedge_stone");
    line.appendChild(block);
    let distance_stone = 0;
    let interval = setInterval(peremeshenie,1);
    function peremeshenie() {
      // console.log(randomLine);
        block.style.top = distance_stone;
        if (distance_stone < window.innerHeight - 50) { /* innerWidth - окно экрана в высоту*/
            distance_stone = distance_stone + 1;
            // console.log(distance_stone);
            // let bot=document.querySelector('.hedge_stone').style.cssText=`bottom:10%;`
              // console.log('!!!!'+distance_stone+' '+document.querySelector('#cockerel').getBoundingClientRect().top);

              // console.log(document.querySelector('#cockerel').getBoundingClientRect());
              // console.log(document.querySelector('#cockerel').offsetParent);
              if(document.querySelector('#cockerel').getBoundingClientRect().top<=distance_stone&&document.querySelector('#cockerel').getBoundingClientRect().top+10>distance_stone){
                if(document.querySelector('#cockerel').closest('#pic1')==document.querySelector('#pic1')){
                  if(document.querySelector('#cockerel').closest('#pic1')&&randomLine==0){
                    console.log('#pic1!!!!!!!!!!!!!!!!!'+randomLine);
                    fakerGame();
                  }

                }else if(document.querySelector('#cockerel').closest('#pic2')==document.querySelector('#pic2')){
                  if(document.querySelector('#cockerel').closest('#pic2')&&randomLine==1){
                    console.log('!!!pic2 '+randomLine);
                    fakerGame();
                  }
                }else if(document.querySelector('#cockerel').closest('#pic3')==document.querySelector('#pic3')){
                  if(document.querySelector('#cockerel').closest('#pic3')&&randomLine==2){
                    console.log('!!!pic3 '+randomLine);
                    fakerGame();
                  }
                }else if(document.querySelector('#cockerel').closest('#pic4')==document.querySelector('#pic4')){
                  if(document.querySelector('#cockerel').closest('#pic4')&&randomLine==3){
                    console.log('!!!pic4 '+randomLine);
                    fakerGame();
                  }
                }else if(document.querySelector('#cockerel').closest('#pic5')==document.querySelector('#pic5')){
                  if(document.querySelector('#cockerel').closest('#pic5')&&randomLine==4){
                    console.log('!!!pic5 '+randomLine);
                    fakerGame();
                  }
                }else if(document.querySelector('#cockerel').closest('#pic6')==document.querySelector('#pic6')){
                  if(document.querySelector('#cockerel').closest('#pic6')&&randomLine==5){
                    console.log('!!!pic6 '+randomLine);
                    fakerGame();
                  }
                }
                // if(document.querySelector('#pic5').closest('#cockerel')){
                //   console.log('5');
                // }
            }
        }
        if (distance_stone > window.innerHeight - 51) {
            // block.style.display = 'none';
            line.removeChild(block);
            window.clearInterval(interval);
        }
    }
}
// -----------------------------------
//-----переменные для управления-----
//-----------------------------------
/* скрипт тут ля управления перемещениями с клавиатура */
document.addEventListener('keydown', keyDownHangler, false);
function keyDownHangler(e) {
  console.log(e);
    if (e.key == "f") {
        right_button();
    } else if (e.key == "s") {
        left_button();
    }else if(e.key==' '){
      console.log('Space');
    }else if(e.key=='Enter'){ // goPlayGame
      goPlayGame();
    }else if(e.key=="S"){
      left_button();
    }else if(e.key=="F"){
      right_button();
    }else if(e.key=="Ы"){
      left_button();
    }else if(e.key=="А"){
      right_button();
    }else if(e.key=="ы"){
      left_button();
    }else if(e.key=="а"){
      right_button();
    }else if(e.key=='ArrowRight'){
      right_button();
    }else if(e.key=='ArrowLeft'){
      left_button();
    } else {
        return;
    }
}
// ------------------------------------
// document.onkeypress = function (event) {
//     console.log(event);
// }
var i = 3;
var pic = document.getElementById('pic' + i).innerHTML = '<p id="cockerel"></p>';
function left_button() {
    if (i > 1) {
        i = i - 1;
        document.querySelector('#pic' + i).innerHTML = '<p id="cockerel"></p>';
        document.querySelector('#pic' + (i + 1)).innerHTML = ' ';
        // console.log(i);
    } else if (i <= 1) {
        return;
    }
}
function right_button() {
    if (i < 6) {
        i++;
        document.querySelector('#pic' + i).innerHTML = '<p id="cockerel"></p>';
        document.querySelector('#pic' + (i - 1)).innerHTML = ' ';
        // console.log(i);
    }
    else if (i >= 6) {
        return;
    }
}
// const MOVE_SPEED=120;
// keyDown('left',()=>{
//   player.move(-MOVE_SPEED, 0);
// });
// keyDown('right',()=>{
//   player.move(MOVE_SPEED, 0);
// })
function fakerGame(){
  
  setTimeout(()=>{
    document.querySelector('.info').style.cssText=`background:#dff0d8;`
  },100);
  document.querySelector('.info').style.cssText=`background:red;`

}
