function process(quant){
    var value = parseInt(document.getElementById("quant").value);
    value+=quant;
    if(value < 1){
      document.getElementById("quant").value = 1;
    }else{
    document.getElementById("quant").value = value;
    }
  }




const searchInput = document.getElementById('search')

searchInput.addEventListener('input',(event) =>{
  const value = formatString(event.target.value);
  const items = document.querySelectorAll('.items .item');
  const noResults = document.getElementById('no_results');

  let hasResults = false;



  items.forEach(item => {
    const itemTitle = item.querySelector('.item-title').textContent;
    if(formatString(item.textContent).indexOf(value) !== -1){
      item.style.display = 'flex';
      hasResults= true;
    }else{
      item.style.display = 'none';
    }
  })
  if(hasResults){
    noResults.style.display = 'none';
  }else{
    noResults.style.display = 'block';
  }
});

function formatString(value){
  return value
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g,'');
}


