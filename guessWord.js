const guess= document.querySelector('input');
const msg = document.querySelector('.msg');
const btn = document.querySelector('.btn');
let play = false;
let newWords ="";
let ranWords ="";
let sWords= [ 'python', 'javascript', 'c++', 'php', 'java', ' html' ,'css', 'reactjs', 'angularjs','swift','android','swift','sql'];


const createNewWords = ()=> {
       let ranNum = Math.floor(Math.random() * sWords.length);
      let newTempWords = sWords[ranNum];
     // console.log( newTempWords.split(""));
      return newTempWords;
}

 const scrambleWords = (arr)=>{
      for( let i=arr.length-1; i >= 0; i-- ){
        let temp = arr[i];
      //  console.log( temp);
       let j = Math.floor(Math.random()*(i+1));
    //    console.log(i);
    //    console.log(j);

    arr[i] = arr[j];
    arr[j] = temp;
     }
   return arr;
 }

btn.addEventListener('click',function(){
    if (!play) {
        play = true;
        btn.innerHTML="Guess";
        guess.classList.toggle('hidden');
         newWords = createNewWords();
          ranWords = scrambleWords(newWords.split("")).join("");
          //console.log(ranWords.join(""));
          msg.innerHTML=`Guess the Word: ${ranWords}`;
    }else{
        let tempWord= guess.value;
        if (tempWord===newWords) {
            //console.log('correct');
            play = false;
            msg.innerHTML= `Awesome It's correct. It is ${newWords}`;
            btn.innerHTML="Start Again";
            guess.classList.toggle('hidden');
            guess.value=" ";
    }else{
        //console.log('incorrect');
        msg.innerHTML= `Sorry boss  It's incorrect. Plz try again  ${ranWords}`;
        
      
    
     }
    }
})