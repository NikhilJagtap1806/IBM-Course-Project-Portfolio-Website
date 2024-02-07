function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");
    //Call showPopup here

    // Create a new 'recommendation' element and set it's value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class","recommendation");
    element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element); 
    
    // Reset the value of the textarea
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





  // Function to handle the download process
  // function downloadCV() {
  //   // Create a new jsPDF instance
  //   const doc = new jsPDF();

  //   // Get HTML content to be converted to PDF
  //   const htmlContent = document.querySelector('html');

  //   // Options for the PDF generation (optional)
  //   const options = {
  //     background: 'white',
  //     scale: 3 // Adjust scale as needed
  //   };

  //   // Convert HTML to PDF
  //   doc.html(htmlContent, options).then(() => {
  //     // Save the PDF with a filename
  //     doc.save('Jagtap_Nikhil.pdf');
  //   });
  // }

  // // Add event listener to the download button
  // document.getElementById('downloadCVBtn').addEventListener('click', downloadCV);


  
  
  
  
    document.getElementById('downloadBtn').addEventListener('click', function() {
      // Replace "path/to/your/pdf/file.pdf" with the actual path to your PDF file on the server
      const pdfFilePath = './Jagtap_Nikhil.pdf';
  
      // Use anchor element to trigger download
      const link = document.createElement('a');
      link.href = pdfFilePath;
      link.download = 'Jagtap_Nikhil.pdf'; // Replace with the desired filename for the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  