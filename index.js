function generateTable(){
         let requiredNumber = document.getElementById("input-1").value;
          let lengthTable = document.getElementById("input-2").value;
          let result="";
      for (let i = 1 ; i<=lengthTable; i++){
            result +=   requiredNumber + " x " + i + " = " +(requiredNumber*i) + "\n";           
          }

          document.getElementById("container-2").classList.add("container2");
          document.getElementById("container-2").innerText = (  result );


}
