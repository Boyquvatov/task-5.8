function Count(e){
    e.preventDefault();
    const text = document.getElementById("text").value;
    let count1 = 0
    let count2 = 0
    for(let i = 0 ; i < text.length ; i++){
        if(text[i] === ")"){
            count1++
        }else if(text[i] === "("){
            count2++
        }
    }
    if (count1 === count2) {
        document.getElementById("result").textContent = "ochuvchi va yopuvchilar teng"
    }else{
        document.getElementById("result").textContent = "ochuvchi va yopuvchilar teng emas"
    }
}