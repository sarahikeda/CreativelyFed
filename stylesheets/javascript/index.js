window.addEventListener("load", function(){
  var nodes = document.querySelectorAll(".name")
  for (var i = 0; i < nodes.length; i++) {
    var words = nodes[i].innerText
    var html = ''
    for (var i2 = 0; i2 < words.length; i2++) {
      if (words[i2] === ' ') {
        html += words[i2]
      } else  html +=
      '<span>' + words[i2] + '</span>'
    }
    nodes[i].innerHTML = html
  }
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
