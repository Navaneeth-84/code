const good = document.querySelector(".good");
const cheap = document.querySelector(".cheap");
const fast = document.querySelector(".fast");

const arr = [good, cheap, fast];

arr.forEach(elem => {
    elem.addEventListener('click',function(){
        if(elem==good)
        {
            if(cheap.checked && fast.checked){
                fast.checked = false;
            }
        }
        else if(elem==cheap)
        {
            if(good.checked && fast.checked){
                good.checked = false;
            }
        }
        else if(elem==fast)
        {
            if(good.checked && cheap.checked){
                cheap.checked = false;
            }
        }
    })
});
