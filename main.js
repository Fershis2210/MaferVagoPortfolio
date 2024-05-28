let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 60,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Estudiante de ciencias de la computación y amante de los videojuegos.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
