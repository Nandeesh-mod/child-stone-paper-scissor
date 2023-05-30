const stone = document.querySelector('.stone');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const imageresult = document.querySelector('#resultimg');
const computerchoice = document.querySelector('#computerselection');
const resulta = document.querySelector('#result');

//(0,2) (1,0) (2,1)
function stone_selection()
{
    imageresult.src = "stone.jpg";
    imageresult.className = "stoneimg";
    let result = computer();
    let human = stone.value;
    if(result == human)
    {
        resulta.textContent = "Draw";
        resulta.className= "draw";
    }else if( (human == 0 && result == 2) || (human == 1 && result == 0) || (human == 2 && result == 1)){
        resulta.textContent = "You Win";
        resulta.className= "winning";
    }else
    {
        resulta.textContent = "You Lose";
        resulta.className = "losing";
    }

}

function paper_selection()
{
   
    imageresult.src = "paper.jpg";
    imageresult.className = "paperimg";
    let result = computer();
    let human = paper.value;
    if(result == human)
    {
        resulta.textContent = "Draw";
        resulta.className = "draw";
    }else if( (human == 0 && result == 2) || (human == 1 && result == 0) || (human == 2 && result == 1)){
        resulta.textContent = "You Win";
        resulta.className = "winning";
    }else
    {
        resulta.textContent = "You Lose";
        resulta.className = "losing";
    }

}
function scissor_selection()
{
    imageresult.src = "scissor.jpg";
    imageresult.className = "scissorimg";
    let result = computer();
    let human = scissor.value;
    if(result == human)
    {
        resulta.textContent = "Draw";
        resulta.className = "draw";
    }else if( (human == 0 && result == 2) || (human == 1 && result == 0) || (human == 2 && result == 1)){
        resulta.textContent = "You Win";
        resulta.className = "winning";
    }else
    {
        resulta.textContent = "You Lose";
        resulta.className = "losing";
    }
}

function computer()
{
    let x = Math.floor(Math.random()* 3);
    console.log(x);
    if(x==0)
    {
        computerchoice.src = "stone.jpg";
        computerchoice.className = "stoneimg";
    } 
    if(x==1)
    {
        computerchoice.src = "paper.jpg";
        computerchoice.className = "paperimg";
    } 
    if(x==2)
    {
        computerchoice.src = "scissor.jpg";
        computerchoice.className = "scissorimg";
    } 
    return x
}
// function core()
// {
//     if(selection == 1)
//     {
//         imageresult.src = "stone.jpg";
//         imageresult.className = "stoneimg";
//     }
//     if(selection == 2)
//     {
//         imageresult.src = "paper.jpg";
//         imageresult.className = "paperimg";
//     }
//     if(selection == 3)
//     {
//         imageresult.src = "scissor.jpg";
//         imageresult.className = "scissorimg";
//     }
// }
/* 
stone = 0 result same draw  
paper = 1
scissor = 2




*/

stone.addEventListener('click',stone_selection);
paper.addEventListener('click',paper_selection);
scissor.addEventListener('click',scissor_selection);

