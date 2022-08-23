// লুডু খেলায় আমরা কিভাবে ১ থেকে ৬ সংখ্যা রেন্ডমলি প্রিন্ট করতে পারি । 

let lodoBtn = document.querySelector("#lodoButton");
let lodoValueShow = document.querySelector("#lodoNumShow");


lodoBtn.addEventListener("click", () => {
    function lodoRanNumber(min, max) {
        let intNum = Math.floor(Math.random() * (max - min + 1)) + 1;
        return Math.abs(intNum);
    }
    let randomLodoNumber = lodoRanNumber(1, 6);
    lodoValueShow.innerHTML = randomLodoNumber;
});

// lodo program end

// কিভাবে আমরা আমাদের শ্রেণীকক্ষের সকলের নাম Alphabetically সাজাতে পারি ?

let unsort = document.querySelector("#unsort");
let sort = document.querySelector("#sort");
let sortBtn = document.querySelector("#sortButton");

const students = ["Tushar", "Paiya", "Atifa", "Farhad", "Arafat", "Shifat", "Tofael", "Kaifa", "Samiya", "Rohan", "Jayed Abdullah"];

unsort.innerHTML = students;
sortBtn.addEventListener("click",()=>{
    let dosort = students.sort();
    sort.innerHTML = dosort;
});

// sort proggram end 

//কিভাবে শেণীকক্ষের সকলের রোল ক্রম অনুযায়ী সাজাতে পারি ।

let numUnSort = document.querySelector("#numunsort");
let numSort = document.querySelector("#numsort");
let numSortBtn = document.querySelector("#numsortbutton");

const rolls = [5,4,7,6,8,9,1,3,2,10,14,15,12,11,13,17,19,20,18];

numUnSort.innerHTML = rolls;

numSortBtn.addEventListener("click",()=>{
    /* let dosort = rolls.sort();     this programe not work properly we need sort callback function */  // sort change main array

    let dosort = rolls.sort(function(a,b){
        return a-b
    })

    numSort.innerHTML = dosort;
})

// numeric sort program end

// get leap year 

let yearInput = document.querySelector("#yearinput");
let getYearBtn = document.querySelector("#getleapBtn");
let leapShow = document.querySelector("#leapyearShow");


getYearBtn.addEventListener("click",()=>{
    let year = yearInput.value;
    if(year == ""){
        alert("Hey Bro Please Input a year!");
    }else if((year % 400 === 0) || ((year % 4 === 0 ) && (year % 100 !== 0))){
        leapShow.innerHTML = year+" year is a leap year."
    }else{
        leapShow.innerHTML = year+" year is a not leap year."
    };

    yearInput.value = "";
});

// leap year program end 

// কোন sentance এ কতগুলো vowel আছে তা নির্নয় করা যায় কিভাবে? 

const vowels = ["A","E","I","O","U","a","e","i","o","u"];
let sentenceInput = document.querySelector("#sentenceInput");
let getVowelBtn = document.querySelector("#vowelBtn");
let countVowelShow = document.querySelector("#vowelCheckResult");

getVowelBtn.addEventListener("click",()=>{
    let letters = Array.from(sentenceInput.value);
    let count = 0;

    letters.forEach((value)=>{
        if(vowels.includes(value)){
            count++;
        }
    });
    countVowelShow.innerHTML = count;
});

// vowel cheaker program end

// কোন aaray থেকে কিভাবে duplicate নাম্বার বের করে আনতে পারি /

const numbers = [1,3,4,5,3,2,7,8,9,4,1,5,10];

const duplicates = numbers.filter(function(value,index,array){
    return array.indexOf(value) !== index;
});

console.log(duplicates);

// end duplicate

// কোন aaray থেকে কিভাবে unique নাম্বার বের করে আনতে পারি /

const uniNumbers = [1,3,4,5,3,2,7,8,9,4,1,5,10];

const unique = uniNumbers.filter(function(value,index,array){
    return array.indexOf(value) === index;
});

console.log(unique);

// Some practice end here and all code save in github