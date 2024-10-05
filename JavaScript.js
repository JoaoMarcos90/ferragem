function process(quant){
    var value = parseInt(document.getElementById("quant").value);
    value+=quant;
    if(value < 1){
      document.getElementById("quant").value = 1;
    }else{
    document.getElementById("quant").value = value;
    }
  }


  let inputElement = document.querySelector("input")
let listElement = document.querySelector("ul")
let itemElement = listElement.querySelectorAll("li")

inputElement.addEventListener("input", (e) => {
  let inputed = e.target.value.toLowerCase()
  itemElement.forEach((li) => {
    let text = li.textContent.toLowerCase()
    if(text.includes(inputed)){
      li.style.display = "block"
    }else{
      li.style.display = "none"
    }
  })
})