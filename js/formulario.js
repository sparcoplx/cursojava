const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarFormulario = (e) => {
    switch(e.target.name){
        case "name":
            if(expresiones.nombre.test(e.target.value)){
        
            }else {
                
            }
        break;
        case "ap_pat":
            
        break;
        case "ap_mat":
            
        break;
        case "age":
            
        break;
        case "address":
            
        break;
    }
}
inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});