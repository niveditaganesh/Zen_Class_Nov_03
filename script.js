
nscore=0,a=[]
//var API_key='8dab3e7c8e9a69a5505914c2d57f64de';
var quiz= `https://opentdb.com/api.php?amount=10&type=multiple`
async function makeRequest(){
try{
    let response1=await fetch(quiz)
let data= await response1.json();
console.log(data.results);
var score=document.createElement('div')
score.id='score'
score.setAttribute('class','container')
score.innerHTML=`<h4>Score:0</h4>`;document.body.append(score)
for(i=0;i<data.results.length;i++){
    var div=document.createElement('div')
    div.setAttribute('class','container')
    var title=document.createElement('h4')
    title.innerHTML=`QUESTION-${i+1}/10`;
    var br=document.createElement('br');
    var question=document.createElement('div');
    question.innerHTML=data.results[i].question;
    question.id='progressText';
    var answers=document.createElement('div');
    answers.setAttribute('class','container');
    var option=document.createElement('button');
    option.setAttribute('type','button');
    option.innerHTML=data.results[i].correct_answer;
   // a.push('opt'+data.results[i].correct_answer)
    option.id="opt"+3;
    option.setAttribute('class','container btn btn-outline-primary choice-Text');
    //for(j=0;j<data.results[i].incorrect_answers.length;j++){
        var options=document.createElement('button');
        options.setAttribute('type','button');
        options.id='opt'+data.results[i].incorrect_answers[0];
        options.innerHTML=data.results[i].incorrect_answers[0];
        options.setAttribute('class','container  btn btn-outline-primary choice-Text');
        var br2=document.createElement('br');
        var option1=document.createElement('button');
        option1.setAttribute('type','button');
        option1.id='opt'+data.results[i].incorrect_answers[1];
        option1.innerHTML=data.results[i].incorrect_answers[1];
        option1.setAttribute('class','container  btn btn-outline-primary choice-Text');
     //   var br11=document.createElement('br');
     var options1=document.createElement('button');
     options1.setAttribute('type','button');
     options1.id='opt'+data.results[i].incorrect_answers[2];
     options1.innerHTML=data.results[i].incorrect_answers[2];
     options1.setAttribute('class','container  btn btn-outline-primary choice-Text');
     //var br21=document.createElement('br');
        answers.append(options1,option1,option,options);
div.append(title,br,question,answers,br2);

document.body.append(div);


 //   }
//console.log(a[0])


}
ans=document.getElementsByClassName("choice-Text");//console.log(ans)  ;ans=''; 
for(k=0;k<ans.length;k++){
    ans[k].addEventListener('click',function(arr){//console.log("sssssssssssss"+a[0])
       // console.log(this.id,a[0])

if(this.id=='opt'+3){
    nscore+=10;
    document.getElementById('score').innerHTML=`<h4>Score:${nscore}</h4>`
    localStorage.setItem("score", nscore);
}})
}a.length=0;

var finish=document.createElement('a')
   finish.setAttribute('class','btn btn-info container-fluid')
   finish.href='end.html';
   finish.innerHTML="Finish"
   document.body.append(finish)
   
  

}

catch(error){
        console.log(error)
    }
   }
   makeRequest();
   
// function calcScore(e){
//     ans=document.getElementsByClassName('choice-Text')
//     for(k=0;k<ans.length;k++){
// ans[k].addEventListner('click',function(){
//     if(this.id==data.results[i].correct_answer){
//         score+=10;
//         console.log(score)
//     }
// })
//     }
// }