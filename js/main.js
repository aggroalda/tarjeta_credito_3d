const tarjeta = document.querySelector('#tarjeta'),
      btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
      formulario = document.querySelector('#formulario-tarjeta');

//*rotacion de tarjeta
tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});
//*boton abrir formulario
btnAbrirFormulario.addEventListener('click', () => {
    btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
});

//* Select del mes generado dinamicamente
for(let i = 1; i <= 12; i++){
    console.log(i);
}
//* Select del año generado dinamicamente