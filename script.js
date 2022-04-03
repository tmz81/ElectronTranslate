function search(){
  const input = document.querySelector('input[name="q"]')
  input.value = 'test'
}

setTimeout(() => {
  alert('Hello World'); 
  search();
}, 1000)