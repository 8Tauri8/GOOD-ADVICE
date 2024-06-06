const button = document.getElementById('btn');

button.addEventListener('mouseover', function ()
 {
    button.style.left = `${Math.ceil(Math.random() * 90)}%`;
    button.style.top = `${Math.ceil(Math.random() * 90)}%`;
    console.log("hehe")
});


button.addEventListener("click", function ()
{
  let fetchRes = fetch("https://api.adviceslip.com/advice");
   fetchRes.then(res => res.json())
 .then(d => {document.getElementById('adviceParagraph').textContent = d.slip.advice;})
});


