
let form=document.getElementById("calculationForm");
let ptrinput=document.getElementById("ptr");
let cdinput=document.getElementById("cd");
let overheadinput=document.getElementById("overhead");
let errormessage=document.getElementById("errorMessage");
let result=document.getElementById("result");


form.addEventListener("submit",(event)=>{event.preventDefault();

    const ptr = ptrinput.value.trim();
    const cd = cdinput.value.trim();
    const overhead = overheadinput.value.trim();

    if (!ptr || !cd || !overhead) {
        errormessage.textContent = "All fields are required. Please fill in all fields.";
        errormessage.style.display = "block";
        result.textContent = "";
        return;
      }
    if (ptr < 0 || cd < 0 || overhead < 0) {
        errormessage.textContent = " Please enter positive numbers.";
        errormessage.style.display = "block";
        result.textContent = "";
        return;
    }
    if (cd > 100 ) {
        errormessage.textContent=`Cost-discount must be between 0 - 100. Please enter a valid value.`;
        errormessage.style.display = "block";
        result.textContent = "";
        return;
    }
    if (overhead > 100 ) {
        errormessage.textContent=`Overhead must be between 0 - 100. Please enter a valid value.`;
        errormessage.style.display = "block";
        result.textContent = "";
        return;
    }
   
   

    errormessage.style.display = "none";
    const calculation = parseFloat(ptr) - parseFloat(cd) + parseFloat(overhead);
    result.textContent = `Result: ${calculation}Rs`;
    });