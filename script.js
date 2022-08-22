// লুডু খেলায় আমরা কিভাবে ১ থেকে ৬ সংখ্যা রেন্ডমলি প্রিন্ট করতে পারি । 

let lodoBtn = document.querySelector("#lodoButton");
let lodoValueShow = document.querySelector("#lodoNumShow");


lodoBtn.addEventListener("click",()=>{
    function lodoRanNumber(max){
        let intNum = Math.floor(Math.random()*(max-1)+1);
        return Math.abs(intNum)
    }
    let randomLodoNumber = lodoRanNumber(7);
    lodoValueShow.innerHTML = randomLodoNumber;
});

// lodo program end

