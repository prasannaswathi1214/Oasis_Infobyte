function erase()
{
    document.getElementById("show").value="";
}
function display(val)
{
    
    document.getElementById("show").value += val;
}
function solve()
{
    let x=document.getElementById("show").value;
    let y=eval(x);
    console.log(y);
    document.getElementById("show").value=y;
}
function sqrt(){
    document.getElementById("show").value =Math.sqrt(document.getElementById("show").value,2 );
}

