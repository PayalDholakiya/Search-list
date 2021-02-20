function myFunction() {
  var input = document.getElementById('Input')
  var filter = input.value.toUpperCase()
  var ul = document.getElementById('myList')
  var li = ul.getElementsByTagName('li')
  for (i = 0; i < li.length; i++) {
    var a = li[i].getElementsByTagName('a')[0]
    // var txtValue = a.textContent || a.innerText
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      console.log(a.innerHTML.toUpperCase().indexOf(filter) > -1)
      li[i].style.display = ''
    } else {
      li[i].style.display = 'none'
    }
  }
}
