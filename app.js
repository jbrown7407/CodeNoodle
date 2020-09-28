function run() {
    let htmlCode = document.querySelector(".editor #html").value; //store editor content as variables
    let cssCode = "<style>"+document.querySelector(".editor #css").value+"</style>";
    let jsCode = document.querySelector(".editor #js").value;
    let output = document.querySelector("#output"); // Store output div as variable
  
    output.contentDocument.body.innerHTML = htmlCode+cssCode; //Link to CSS + HTML
    output.contentWindow.eval(jsCode);    //Link to in-editor script
}
document.querySelector(".editor #html").addEventListener("keyup",run); //update html in editor each press by calling run()
document.querySelector(".editor #css").addEventListener("keyup",run);  //update css in editor each press by calling run()
document.querySelector(".editor #js").addEventListener("keyup",run);   //update js in editor each press by calling run()