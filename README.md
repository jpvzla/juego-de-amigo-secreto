# Juego del Amigo Secreto. Desarrollo Web requisito del programa Alura Latam Principiante en Programación G8 y Oracle Next Education.  

## Objetivos:
Para el ingreso de los nombres:
* Incluir un número indeterminado de nombres.
* Los nombres incluídos no pueden repetirse y no pueden estar vacios.
* Los nombres deen mostrarse en una lista.

Para el sorteo o selección de nombres:
* Seleccionar los nombres uno a la vez, hasta el último en forma aleatoria.
* Los nombres selecionados en el sorteo, deben mostrarse en una lista independiente a la de los nommbres incluídos.
* El nombre seleccionado debe eliminarse de la lista de nombres incluidos.


## Catracterísticas:

* El juego permite la inclusión de nombres, pueden ser completos o solo el primer nombre.
* No diferencia entre mayúsculas y minúsculas. 
* Pueden incluirse caracteres especiales y números.
* Los valores ingresados se muestran en una lista en pantalla en el orden en que se ingresaron.
* No se permite que el nombre esté vacio.
* No se permiten nombres repetidos.
* Para que el sorteo tenga sentido, se requiere como mínimo la inclusión de dos nombres.
* Luego de iniciado el sorteo, no podrán incluirse más nombres. 
* Al elegir un nombre de la lista de nombres ingresados, se borrará de esta y aparecerá en lista de nombres seleccionados en color verde en el orden en fue seleccionado.
* Al seleccionar el último nombre, la lista de nombres ingresados permanecerá vacía y la lista de nombres seleccionados mostrará los nombres en el orden cronológico de su selección.
* Luego de seleccionar el último nombre de la lista, el juego indicará que puede comenzar de nuevo, inicializando variables, arreglos y las listas que manejan los nombres incluídos y seleccionados.
* Los archivos fueron provistos por Alura Latam y solo fue modificado el archivo Index.html, para añadir la llamada a las funciones agregarAmigo() y sortearAmigo() mediante el evento onclick, en los botones Añadir y Sortear amigo respectivamente.
* El archivo app.js posee todas las declaraciones de variables, constantes y funciones necesarias para la ejecución del juego.

## Funciones:
* iniciaJuego()
  * Se ejecuta al llamar al juego por primera vez, al presionar F5 o refrescar la página o, luego de finalizado el juego.
  * Inicializa los arreglos que almacenan los nombre a incluir y los nombres seleccionados.
  * Inicializa variables de entorno como, el  valor aleatorio que se obtiene al presionar el botón Sortear amigo.
  * Llama a la función cambiarTexto para el manejo de la etiqueta del botón "sortear"".
  
* agregarAmigo()
  * Se ejecuta al presionar el botón "Añadir".
  * Incluye el nombre registrado en el INPUT en el arreglo "amigos" y en la lista "listaAmigos". 
  * Valida que el nombre no esté repetido y que no esté vacio.
  * Sí el proceso de sorteo ya inició, no es posible ingresar nuevos amigos. Variable registrarAmigo = 0.

* sortearAmigo()
  * Se ejecuta al presionar el botón "sortear".
  * Realiza el sorteo del amigo, en base a la lista de nombres registrados en "listaAmigos".
  * Valida que existan registrados por lo menos dos nombres.
  * Sí el proceso de sorteo inició, se coloca la variable "registarAmigo" en 0 para que no se puedan agragar más nombres a la lista.
  * Los nombres sorteados son incluidos en la lista "resultado y son eliminados de la lista "listaAmigos". 
  * Este proceso no repite el número aleatorio generado entre 0 y la cantidad de nombres menos 1.
  * Sí todos los nombres se han sorteado, se cambia la etiqueta del botón "sortear" para indicar al usuario, que puede iniciar otro sorteo.

* cambiarTexto()
  * Cambia el valor de la etiqueta del botón "sortear""cuando:
    * Al iniciar el juego coloca "sortear Amigo".
    * Al finalizar el juego (se seleccionaron todos los nombres incluídos) coloca "Nuevo Sorteo".

## Constantes:
   * listaAmigoSecreto
     * Almacena el elemento HTML de la lista no ordenada "listaAmigos"
   * resultadoFinal
     * Almacena el elemento HTML de la lista no ordenada "resultado"
   * boton
     * Almacena el elemento HTML del botón "sortear"
   * elemento 
     * Almacena elemento HTML del siguiente "li" para la inclusión de nombres en la lista "listaAmigos"  
   * elementoR
     * Almacena elemento HTML del siguiente "li" para la inclusión de nombres en la lista "resultado"

## Variables y su valor de inicio
   * amigos = []
     * Almacena los nombres incluídos en el juego para el sorteo. 
   * seleccionados = [] 
     * Almacena los nombres seleccionados durante el sorteo.   
   * nombreAmigo=""
     * Almacena el nombre proveniente del INPUT. 
   * registrarAmigo = 1
     * Almacena los valores 0 o 1. 
     * Sí se ha iniciado el sorteo, el valor de la variable pasa a 0, para evitar que se incluyan más nombres. Mientras no se inicie el sorteo la variable permanece con el valor 1.
   * elementoAleatorio = 0
     * Almacena el valor proveniente de Math.floor(Math.random() x amigos.length) que genera el valor aleatorio entre 0 y n-1 nombres, incluidos para el sorteo. 

## Imágenes
* Inicio
![1 - Inicio](https://github.com/user-attachments/assets/f12c7bb7-7bad-457d-863f-780fe1cfeb8b)
* Incluisión de nombres
![2 - Incluir nombres](https://github.com/user-attachments/assets/f454742d-1ec6-4394-a59f-d0d7a7266bbb)
* Sorteo
![3 - Sorteo](https://github.com/user-attachments/assets/e00e2491-4168-4873-acb2-f6d2f78a2fdc)
* Juego terminado
![4 - Final](https://github.com/user-attachments/assets/7387501a-43bd-482b-aac7-1ec22ef2d505)
* Mensaje para la introducción de un nombre válido
![5 - Mensaje Nombre válido](https://github.com/user-attachments/assets/db2b0683-3533-459b-9f09-ad2a5cbb44d5)
* Mensaje indicando que el sorteo requiere de por lo menos dos nombres
![6 - Mensaje Mínimo dos nombres](https://github.com/user-attachments/assets/dbb15d0e-62dc-4c3b-971d-e0a1b7b986a4)

## Tecnologías utilizadas
   * HTMl
     * Creación y estructuración de páginas Web. 
   * CCS
     * Presentación y cohesión del contenido HTML.
   * JavaScript. 
     * Lenguaje de programnación que desarrolla la lógica aplicada en la solución presentada. 

## Instalación y uso
   * Duplica o descarga este repositorio:
     * 
   * Abre en un navegador el archivo index.html que se encuentra en la carpeta raíz.

## Licencia
   * Este desarrollo está amparado por la licencia MIT, por lo que puede ser obtenido, modificado y distribuido libremente.

     * Condiciones
       * El aviso de copyright original y el texto de la licencia deben conservarse en el software redistribuido. 
       * El software se proporciona "tal cual", sin garantía de ningún tipo. 
       * Los autores o titulares de los derechos de autor no serán responsables de ningún reclamo, daños u otra responsabilidad 

     * Uso 
       * Para aplicar la licencia MIT, puedes: 
         * Crear un archivo de texto (normalmente llamado LICENSE o LICENSE.txt) en la raíz de tu código fuente.
         * Copiar el texto de la licencia en el archivo
         * Reemplazar [year] con el año actual y [fullname] con el nombre (o nombres) de los titulares de los derechos de autor.
