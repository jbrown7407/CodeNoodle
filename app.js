function run() {
    let htmlCode = document.querySelector(".editor #html").value; //store editor content as variables
    let cssCode = "<style>"+document.querySelector(".editor #css").value+"</style>";
  //  let jsCode = document.querySelector(".editor #js").value;
    let output = document.querySelector("#output"); // Store output div as variable
  
    output.contentDocument.body.innerHTML = htmlCode+cssCode; //Link to CSS + HTML
  //  output.contentWindow.eval(jsCode);    //Link to in-editor script
}

function onClick() {
    let jsCode = document.querySelector(".editor #js").value;
    output.contentWindow.eval(jsCode);  //Run JS in editor
}


/* OPTION A
const copyThisHTML = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };
*/

 //OPTION B
function copyThisHTML() {  
    let copyText = document.querySelector(".editor #html");  // Get the text field 
  
    copyText.select();       // Select the text field 
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    document.execCommand("copy");   // Copy the text inside the text field 

    console.log("Copied the text: " + copyText.value);    // Alert the copied text 
  } 
  function copyThisCSS() {  
    let copyText = document.querySelector(".editor #css");  // Get the text field 
  
    copyText.select();       // Select the text field 
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    document.execCommand("copy");   // Copy the text inside the text field 

    console.log("Copied the text: " + copyText.value);    // Alert the copied text 
  } 
  function copyThisJS() {  
    let copyText = document.querySelector(".editor #js");  // Get the text field 
  
    copyText.select();       // Select the text field 
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    document.execCommand("copy");   // Copy the text inside the text field 

    console.log("Copied the text: " + copyText.value);    // Alert the copied text 
  } 



document.querySelector(".editor #html").addEventListener("keyup",run); //update html in editor each press by calling run()
document.querySelector(".editor #css").addEventListener("keyup",run);  //update css in editor each press by calling run()
//document.querySelector(".editor #js").addEventListener("keyup",run);   //update js only onClick(), this updates every keystroke (replaced with button)