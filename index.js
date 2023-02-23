
function addImgToDisplay(e){
   e.preventDefault()
   const conatiner = document.getElementById("meme-output");
   const url = document.querySelector("#url").value;
   const upperText = document.querySelector("#upper-text").value;
   const lowerText = document.querySelector("#lower-text").value;
   
   let div = document.createElement('div');
   const img = new Image();
   img.src = url;
   div.addEventListener("click", removeImg);
   div.appendChild(img);
   
   let upper = document.createElement('p');
   let lower = document.createElement('p');

   lower.classList.add("lower-text", "meme-text");
   upper.classList.add("upper-text", "meme-text");
   div.classList.add('meme');

   upper.innerText = upperText;
   lower.innerText = lowerText;
 
   div.appendChild(upper);
   div.appendChild(lower);
   

   conatiner.appendChild(div);
}

function removeImg(event){
   event.target.parentElement.remove();
}
   
document.getElementById("input-area-form").addEventListener("submit", addImgToDisplay);