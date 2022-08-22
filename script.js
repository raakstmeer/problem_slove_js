// লুডু খেলায় আমরা কিভাবে ১ থেকে ৬ সংখ্যা রেন্ডমলি প্রিন্ট করতে পারি । 

let lodoBtn = document.querySelector("#lodoButton");
let lodoValueShow = document.querySelector("#lodoNumShow");


lodoBtn.addEventListener("click",()=>{
    function lodoRanNumber(min,max){
        let intNum = Math.floor(Math.random() * (max - min + 1))+1;
        return Math.abs(intNum);
    }
    let randomLodoNumber = lodoRanNumber(1,6);
    lodoValueShow.innerHTML = randomLodoNumber;
});

// lodo program end

// কিভাবে আমরা আমাদের শ্রেণীকক্ষের সকলের নাম Alphabetically সাজাতে পারি ?


