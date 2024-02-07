function addRecommendation() {
  
  let recommendation = document.getElementById("new_recommendation");

  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    

  
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
 
    document.getElementById("all_recommendations").appendChild(element); 
    

    recommendation.value = "";
    showPopup(true);
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}




  
  
  
  
    document.getElementById('downloadBtn').addEventListener('click', function() {
      
      const pdfFilePath = './Jagtap_Nikhil.pdf';
  
    
      const link = document.createElement('a');
      link.href = pdfFilePath;
      link.download = 'Jagtap_Nikhil.pdf'; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  