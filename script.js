function createGrid(number) {
    
      const container = document.querySelector("#container");
          
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

            }
}
 










createGrid(16);

const hov = document.querySelectorAll(".col");

hov.forEach( col =>
col.addEventListener("mouseenter", function() {
   let r = Math.floor(Math.random()*256);
   let g=  Math.floor(Math.random()*256);
   let b = Math.floor(Math.random()*256);

   col.style.backgroundColor = `rgb(${r},${g},${b})`
}))