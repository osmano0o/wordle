let center = document.querySelectorAll("li")
center.forEach(function(el){
    el.classList.add("center")
})

let empty = document.querySelectorAll(".empty ul li")
let letters = document.querySelectorAll(".letters ul li")
let count = 0;
let end = 5;
let span = document.querySelector("span")
let word = "OSMAN"
let emcount = 0;
let chosen = []
let win = 0;
letters.forEach(function(el){
    el.onclick = function(){

        if(this.innerText.length == 1 && count < end){
            let leter = this.innerHTML
            empty[count].innerText = leter
            count ++
            chosen.push(this)
            console.log(count +" | "+ end +" | " +emcount  +  chosen + " " + win)
        }
        else if(this.innerText.length  == 0 && emcount !=  count ){
            empty[count - 1].innerText = ""
            count --
            chosen.pop()
            console.log(count +" | "+ end +" | " +emcount  + chosen)
        }
        else if(this.innerText.length > 1)
            if(count == end ){
                for(let i = 0; i<5 ; i++){
                    if(word.includes(chosen[i].innerText)){
                        if(word[i] == chosen[i].innerText){
                            empty[emcount].style.backgroundColor = "#538d4e"
                            chosen[i].style.backgroundColor = "#538d4e"
                            win++
                        }
                        else {
                            chosen[i].style.backgroundColor = "#b59f3b"
                            empty[emcount].style.backgroundColor = "#b59f3b"
                        }
                    }
                    else{
                        empty[emcount].style.backgroundColor = "#3a3a3c"
                        chosen[i].style.backgroundColor = "#3a3a3c"
                    }
                    emcount = emcount + 1
                    end = end + 1
                }
                chosen = [];
                if(win == 5){
                    span.innerText = "congrats"
                    span.style.display = "block"
                    setTimeout(() => {
                        span.style.display = "none"
                    }, 2500);

                    letters.forEach(function(element){
                        element.style.pointerEvents = "none"
                    })
                }
            }
            else{
                span.style.display = "block"
                setTimeout(() => {
                    span.style.display = "none"
                }, 1500);
                
            }
        
    }
})