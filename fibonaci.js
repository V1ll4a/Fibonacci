do{
    n= Number(prompt("Ingrese el numero de Fibonacci que desee calcular"))
    }while(isNaN(n) || n<8|| n>34|| n%1 !=0)
function fb(n){
    if(n==1||n==0){
    return 1
    }else
    return fb(n-1)+ fb(n-2) ;
}
let contenedor =  document.querySelector("#contenedor")
    contenedor.innerHTML = "El numero de Fibonacci numero "+ n +" es " + fb(n)
