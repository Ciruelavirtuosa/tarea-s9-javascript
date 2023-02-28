class Tarea{
    //Sumar dos numeros siempre cuando el primero sea mayor al segundo//
 suma(){
       let num1=Math.floor(Math.random()*100)
       let num2=Math.floor(Math.random()*100)
       let suma=0
       if (num1>num2) {
        suma=num1+num2
        console.log(`La suma de ${num1} + ${num2} es ${suma}`)
       } else {
        console.log(`Lo siento pero ${num1} tiene que ser mayor a ${num2} para realizar la operacion`)
       }
    }
    //Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y reciduo//
    operaciones(){
        let num1=Math.floor(Math.random()*100)
        let num2=Math.floor(Math.random()*100)
        let suma=0
        let resta=0
        let multiplicacion=0
        let division=0
        let residuo=0
        suma=num1+num2
        resta=num1-num2
        multiplicacion=num1*num2
        division=num1/num2
        residuo=num1%num2
        console.log(`El resultado de la suma de ${num1} + ${num2} es ${suma}`)
        console.log(`El resultado de la resta de ${num1} - ${num2} es ${resta}`)
        console.log(`El resultado de la multiplicacion de ${num1} * ${num2} es ${multiplicacion}`)
        console.log(`El resultado de la division de ${num1} / ${num2} es ${division}`)
        console.log(`El residuo de ${num1} dividivo para ${num2} es ${residuo}`)
        }
    //Presentar el mayor de dos numeros//
    mayor(){
        let num1=Math.floor(Math.random()*100)
        let num2=Math.floor(Math.random()*100)
        if (num1>num2) {
            console.log(`${num1} > ${num2}: El mayor es el primer numero`)
        } else {
            if (num2>num1) {
                console.log(`${num2} > ${num1}: El mayor es el segundo numero`)
            } else {
                console.log(`${num1} y ${num2}: Son iguales`)
            }
        }
    }
    //Dado un nombre presentarlo//
    Nombre(){
        let nombre="Jose Macias Merchan"
        console.log(nombre)
    }
    //Dado un valor de compra presentar el total considerando un 12% de iva//
    iva(){
        let precioscompr=[40,13,6,25,11,4]
        let longitud=precioscompr.length
        let valorcompra=0
        let iva=12
        let ivacompra=0
        let total=0
        for(let pos=0;pos<longitud;pos++){
            valorcompra=valorcompra+precioscompr[pos]
        }
        iva=iva/100
        ivacompra=valorcompra*iva
        let n1=Math.trunc(ivacompra)
        total=valorcompra+ivacompra
        let n2=Math.trunc(total)
        console.log(`El iva del valor de la compra es de ${n1} dolares`)
        console.log(`El valor total a pagar es de ${n2} dolares`)

    }
    //Presentar 5 veces un nombre//
    repetnom(){
        let nombre="Jose Macias Merchan"
        let c=1
        while (c<6) {
            console.log(nombre)
            c++
        }
    }
    //Presentar los numeros multiplos de 3 del 3 al 21//
    multiplos3(){
        let c=3
        for(c=3;c<=21;c++){
            if(c%3==0){
                console.log(c)
            }
        }
    }
    //Presentar los numeros multiplos de 3 del 21 al 3//
    multiplos3a(){
        let c=21
        for(c=21;c>=3;c--){
            if (c%3==0) {
                console.log(c)
            }
        }
    }
    //Dados dos nombres indicar si son iguales o diferentes//
    compararnom(){
        let nom1="jose Macias Merchan"
        let nom2="Jose macias merchan"
        if (nom1.toUpperCase()==nom2.toUpperCase()) {
            console.log(`${nom1} y ${nom2} SI son iguales`)
        } else {
            console.log(`${nom1} y ${nom2} NO son iguales`)
        }
    }
    //Dado diez numeros en un arreglo presentar los que tengan menos de 5 caracteres//
    cincocaracteres(){
        let arreglo=["71543","23015","770292","89","10","2","73","23","511517","701894"]
        let longitud=arreglo.length
        console.log(`Los elementos con menos de 5 caracteres son:`)
        for(let pos=0;pos<longitud;pos++){
            if (arreglo[pos].length < 5) {
                console.log(arreglo[pos])
            }
        }
    }
    //Dado un arreglo presentar sus elementos//
    arreglo(){
        console.log("Mis compras")
        let arrays=["mando","procesador","memoria ram","enclosure"]
        let longitud=arrays.length
        for(let pos=0;pos<longitud;pos++){
            console.log(arrays[pos])
        }
    }
    //Dado un arreglo de numeros presentar los menores a 10//
    menora10(){
        let numeros=[54,61,6,10,3,1,38,95,9]
        let longitud=numeros.length
        console.log("Los numeros del arreglo menor a 10 son: ")
        for(let pos=0;pos<longitud;pos++){
            if(numeros[pos]< 10){
                console.log(numeros[pos])
            }
        }
    }
    //Dado un arreglo de numeros presentar los impares y al final la suma de los pares//
    imparsumapar(){
        let arreglo=[7,3,10,1,6,6,4,7,1]
        let longitud=arreglo.length
        let sumapar=0
        console.log("los numeros impares del arreglo son:")
        for(let pos=0;pos<longitud;pos++){
            if (arreglo[pos]%2==0) {
                sumapar=sumapar+arreglo[pos]
            } else {
                console.log(`${arreglo[pos]}`)
            }
        }
        console.log(`La suma de numeros par del arreglo es ${sumapar}`)
    }
    //Presentar el primero el medio y el ultimo valor de un arreglo//
    primeul(){
        let arreglo=[7,66,11,13,95,1,28,68,7,60]
        let longitud=arreglo.length
        let media=longitud/2
        for(let pos=0;pos<longitud;pos++){
            console.log(arreglo[pos])
        }
        console.log(`El primero del arreglo es ${arreglo[0]} y la media es ${arreglo[media]} y el ultimo ${arreglo[longitud-1]}`)
    }
    //Calcular el vuelto de un a compra dado el costo y el pago//
    vuelto(){
        let valorcompra=Math.floor(Math.random()*900)
        let valorpago=Math.floor(Math.random()*900)
        let vuelto=valorpago-valorcompra
        if (valorpago<valorcompra) {
            console.log(`el valor de compra es:${valorcompra}`)
            console.log(`el valor de pago es:${valorpago}`)
            console.log(`Te falta dinero ${vuelto} no puedes hacer la compra`)
        } else {
            console.log(`el valor de compra es:${valorcompra}`)
            console.log(`el valor de pago es:${valorpago}`)
            console.log(`El vuelto es de: ${vuelto}`)
        } 
    } 
    //Presentar la tabla de multiplicar de cualquier numero del 1 al 12//
    tablamultiplicar(){
        let numero=Math.floor(Math.random()*13)
        console.log(`Tabla de multiplicar del ${numero}`)
        for(let pos=1;pos<13;pos++){
            let respuesta=numero*pos
            console.log(`${numero}*${pos}=${respuesta}`)
        }
    }
    //Realizar la multiplicacion de dos numeros por medio de sumas sucesivas//
    multixsumasucesiva(){
        let num1=Math.floor(Math.random()*11)
        let num2=Math.floor(Math.random()*11)
        let res=0
        for(let c=1;c<=num2;c++){
            res=res+num1
        }
        console.log(`${num1}*${num2}=${res}`)
    }
    //Realizar la division de dos numeros por medio de restas sucesivas//
    divisionrestasucesiva(){
        let num1=6
        let num2=2
        if (num1>num2) {
            console.log(`${num1} dividido para ${num2}`)
            while (num1>=num2) {
                num1=num1-num2
            }
            console.log(`tiene un residuo de ${num1}`)
        } else {
            console.log(`No se puede dividir ${num1} para ${num2} El divisor debe ser mayor que el dividento`)
            }
    }
    //Calcular el factorial de un numero//
    factorial(){
        let numero=Math.floor(Math.random()*(11-2)+2)
        let factorial=1
        for(let pos=1;pos<=numero;pos++){
            factorial=factorial*pos
        }
        console.log(`El factorial de ${numero} es: ${factorial} `)
    }
    //Calcular el exponente de un numero//
    exponentes(){
        let num1=Math.floor(Math.random()*10)
        let exponente=Math.floor(Math.random()*10)
        let res=1
        for(let pos=0;pos<exponente;pos++){
            res=num1*res
        }
        console.log(`${num1} con exponente ${exponente} es igual a: ${res}`)
    }
    //Calcular la serie de fibonacci dado un numero//
   fibonacci(){
    let pos=8
    let num1=0
    let num2=1
    let num3=0
    let c=2
    console.log(num1)
    console.log(num2)
    while (c<pos) {
        num3=num1+num2
        console.log(num3)
        num1=num2
        num2=num3
        c++
    }
   } 
   //Dado un numero invertirlo//
   invertirnum(){
    let numero=12356
    let residuo=0
    console.log(`EL numero invertido de ${numero} es: `)
    while (numero>0) {
      residuo=numero%10
      numero=Math.floor(numero/10)
      console.log(residuo)
    }
   }
   //Presentar los divisores de un numero//
   divisores(){
    let numero=5
    let divisores=0
    console.log(`los divisores de ${numero} son: `)
    for(let pos=1;pos<numero;pos++)
      if (numero%pos==0) {
        console.log(pos)
      }
   }
   //Presentar si un numero es perfecto o no (Perfecto:cuando la suma de los divisores incluidos el 1 y excluido el propio numero dada igual al numero)//
   perfecto(){
    let numero=5
    let perfecto=0
    for(let pos=1;pos<numero;pos++)
      if (numero%pos==0) {
        perfecto=perfecto+pos
      }
      if (perfecto==numero) {
        console.log(`El numero ${numero} es prefecto`)
      } else {
        console.log(`El numero ${numero} no prefecto`)
      }
   }
   //Verfificar si un numero es primo o no//
   primos(){
    let numero=5
    let primo=1
    let divisor=2
    while (divisor<numero && primo==1) {
      let r=numero%divisor
      if (r==0) {
        primo=0
      } else {
        divisor++
      }
    }
    if (primo==1) {
      console.log(`El numero ${numero} SI es primo`)
    } else {
      console.log(`El numero ${numero} NO es primo`)
    }
   }
}   
let Tarea1= new Tarea()
Tarea1.primos()