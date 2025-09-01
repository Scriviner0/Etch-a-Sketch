function createGrid(number) {
    
      const container = document.querySelector("#container");
      container.innerHTML = "";
          
           for ( let i = 0; i < number;i++){  
            /* create row */
            const row = document.createElement("div");
            row.classList.add("row");
             for (let j = 0;j< number;j++){

                const col = document.createElement("div");
                col.classList.add("col");
                row.appendChild(col);
               
             }
           
               container.appendChild(row);

            }   attachHoverEffect();
}
 
function attachHoverEffect() {
  const hov = document.querySelectorAll(".col");

  hov.forEach(col => {
    col.addEventListener("mouseenter", function () {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      col.style.backgroundColor = `rgb(${r},${g},${b})`;
    });
  });
}

function clear() {
   const hov = document.querySelectorAll(".col");

const clear = document.querySelector("#btn");
clear.addEventListener("click",()=>{
   const grid = prompt("enter the number of squares ");
   const size = parseInt(grid);
  if ( !isNaN(size) && 0<= size <= 100) {
    hov.forEach(col => {
      col.style.backgroundColor = "white";
    });
  createGrid(size);
    
  }
}
)
}






createGrid(16);

clear ();


