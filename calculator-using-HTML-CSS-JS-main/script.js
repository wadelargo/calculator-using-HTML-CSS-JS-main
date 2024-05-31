let out = document.getElementById("value");
let operators = ['+', '-', '*', '/'];
let ip = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', 'Backspace', 'Enter', 'Escape', '+', '-', '*', '/']; // Required inputs

// Keyboard functionalities
document.addEventListener("keydown", function(s){

    // View output
    if (s.key === "Enter")
    {
        out.innerHTML = eval(out.innerHTML);
    }

    // Delete one by one from reverse
    else if (s.key === "Backspace")
    {
        out.innerHTML = out.innerHTML.slice(0, -1);
    }
    
    // Delete the entire field
    else if (s.key === "Escape")
    {
        out.innerHTML = "";
    }

    // Check & Delete the unnecessary input
    else if (!(ip.includes(s.key))) 
    {
        null
    }

    // Inputs & Display
    else
    {
        out.innerHTML += s.key
        let check = out.innerHTML.slice(-2);
        let check_sp = check.split("");

        // Delete the 2nd last operator, when 2 operators are displayed
        if (operators.includes(check_sp[0]) && operators.includes(check_sp[1]))
        {
            out.innerHTML = out.innerHTML.slice(0, -2);
            out.innerHTML += s.key;
        }
    }
})

// --------------------------------------------------------------------------------------------------------------
// Mouse functionalities

// Input & display
function display(n)
{
    out.innerHTML += n
    let check_m = out.innerHTML.slice(-2);
    let check_sp_m = check_m.split("");
    if (operators.includes(check_sp_m[0]) && operators.includes(check_sp_m[1]))
    {
        out.innerHTML = out.innerHTML.slice(0, -2);
        out.innerHTML += check_sp_m[1];
    }
}

// View output
function output() 
{
    out.innerHTML = eval(out.innerHTML);
}

// Delete the entire field
function Clear()
{
    out.innerHTML = "";
}

// Delete one by one from reverse
function del()
{
    out.innerHTML = out.innerHTML.slice(0, -1);
}

// Square root of the value
function Sqrt()
{
    out.innerHTML = Math.sqrt(out.innerHTML);
}

// Square of the value
function Sqr()
{
    out.innerHTML *= out.innerHTML;
}