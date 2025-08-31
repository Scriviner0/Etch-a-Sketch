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