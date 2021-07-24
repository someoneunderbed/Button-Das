let a = 20;
 
    for(i=1; i<=a; i++) { 

        for(j=i; j<=a; j++) {
            document.write("//");
        }
 
        for(j=1; j<=(2*i-1); j++) {
            document.write("●");
        }
 
        document.write("<br>");    
         
      }

