var morelinks = document.querySelectorAll(".section > .txt-more");

for (var i = 0, j = morelinks.length; i < j; i++) {
     morelinks[0].onclick = function () {
          var container = this.parentNode.querySelector(".container");
          
          container.classList.toggle("partial");
          this.classList.toggle("txt-more");
     };
}

let feedback = document.getElementById('feedback');
let comentario = document.getElementById('comentario');
let enviado = document.getElementById('enviado');
let feedbackBtn = document.getElementById('criar');
let comentarioBtn = document.getElementById('btn-enviar');
let enviadoBtn = document.getElementById('criar-novo');
let rect3 = document.getElementById('rectangle3');
let rectangle5 = document.getElementById('rectangle5');
let hidden = document.getElementById('imgh');

feedbackBtn.addEventListener('click', function criar (){
     feedback.style.display = 'none';
     comentario.style.display = 'block';
     enviado.style.display = 'none';
});

comentarioBtn.addEventListener('click', function enviar (){
     feedback.style.display = 'none';
     comentario.style.display = 'none';
     enviado.style.display = 'block';
     rect3.style.display = 'block';

     console.log('enviado');
});

enviadoBtn.addEventListener('click', function criarnovo (){
     feedback.style.display = 'none';
     comentario.style.display = 'block';
     enviado.style.display = 'none';
     rect3.style.display = 'none';
});

rectangle5.addEventListener('click', function (){
     if(hidden.style.display === 'none'){
          hidden.style.display = 'block';
     } else {
          hidden.style.display = 'none';
     }
});