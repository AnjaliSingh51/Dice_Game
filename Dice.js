

game=()=>{

    let p1 = Math.floor(Math.random() * 6) + 1;
    let p2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById("p1").src=`asset/dice${p1}.png`;
    document.getElementById("p2").src=`asset/dice${p2}.png`;
    
    if (p1>p2){
        document.querySelector("h2").textContent=  "🥳Player 1 wins🥳";
    }else if(p1<p2){
        document.querySelector("h2").textContent= "🤩Player 2 wins🤩";
    }else{
        document.querySelector("h2").textContent= "🎈Oops! Its a DRAW🎈";
    }

}
