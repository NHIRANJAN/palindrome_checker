    let ques=document.getElementById("button")
    ques.addEventListener('click',palindrome)
    function palindrome(){
    let val=document.getElementById("text").value
    let val1=val.trim().split(" ").join("");
    console.log(val1)
    let length=val1.length
    let val2=""
    let ans=""
    console.log(length)
        for(let i=length-1;i>=0;i--){
            val2=val2+val1[i];
        }
        console.log(val2)
        for(let i=0;i<=length;i++){
            if(val1[i]==null){
                break
            }
            else if(val1[i]!=val2[i]){
                ans="no"
                break;
            }
            else{
                ans="yes"
                continue;
            }
        }
        if(ans=="yes"){
            console.log("yes")
            let p=document.getElementById("ans")
            p.innerHTML="Given words are palindrome"
        }
        else if(ans=="no"){
            console.log("no")
            let p=document.getElementById("ans")
            p.innerHTML="Given words are not palindrome"
        }
        else{
            let p=document.getElementById("ans")
            p.innerHTML="Please Enter words"
            
        }
     }
