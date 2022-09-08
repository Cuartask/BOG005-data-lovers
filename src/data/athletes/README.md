# DL /JUEGOS OLIMPICOS RIO 2016

![Rio](src/imagenes/Rio2016.gif)

## Índice
* [1. Preámbulo](#1-preámbulo)
* [2. Definición de producto](#2-definición-de-producto)
* [3. Historias de usuario](#3-historias-de-usuario)
* [4. Criterios de aceptacion](#4-criterios-de-aceptación)
* [5. Definición de terminado](#5-definición-de-terminado)
* [6. Prototipo de baja fidelidad](#6-prototipo-de-baja-fidelidad)
* [7. Prototipo de alta fidelidad](#7-prototipo-de-alta-fidelidad)
* [8. Testeos de usablidad](#8-testeos-de-usablidad)  


*

## 1. Preámbulo

Los juegos olímpicos son el mayor evento deportivo internacional multidisciplinar en el que participan atletas de todo el mundo. De hecho hay; los juegos olímpicos de verano y los juegos olímpicos de invierno. Se realizan cada dos años de forma alternativa. Es decir, si un año hay juegos olímpicos de verano al cabo de dos años serían los de invierno, al cabo de otros dos años los de verano y así sucesivamente. De hecho, estos juegos olímpicos como hoy los entendemos están inspirados en los juegos olímpicos de la antigüedad (surgieron hacia el siglo XVIII a.C. en la antigua Grecia). No fue hasta el siglo XIX que, Pierre Fredy Baron de coubertin, fundó el COI para propulsar el ejercicio de unos nuevos juegos olímpicos contemporáneos. En su origen, en la Grecia antigua, los juegos olímpicos eran fiestas atléticas celebradas cada 4 años en el santuario de Zeus en Olimpia. De ahí que se llamen juegos olímpicos, porque se celebraban en la ciudad de Olimpia.
[historia](https://www.unprofesor.com/ciencias-sociales/historia-de-los-juegos-olimpicos-resumen-3351.html),

En la actualidad se realizan de igual manera cada cuatro años y en esta oportunidad veremos alguna informacion relevante de los que se realizaron en el 2016 en la ciudad de Rio de Janeiro como cede principal.
*
## 2. Definición de producto 

El objetivo pricipal de realizar este trabajo es brindar alguna información a los visitantes sobre lo sucedido en las olimpiadas de Rio 2016. Utilizando información proporcionda para llevar acabo este proyecto.

* [Juegos Olímpicos de Río de Janeiro](src/data/athletes/athletes.json).
  Este set nos proporciona la lista de los atletas que ganaron medallas en las
  olímpiadas de Río de Janeiro.
* [Investigación con interesados en juegos olímpicos de Río de Janeiro](src/data/athletes/README.md)

Para la construcción de la página web 'DL Rio Olimpics 2016' se realizo un bosquejo inicial para entender cómo organizar y delimitar la información que se manejaría en ella, además de pensar en el diseño en cuanto a manejo de los espacios de caja, tipo de letra, íconos, paleta de colores, y en general todos los aspectos visuales.

Utilizando herramientas como la plataforma Figma que nos brindo la facilidad de realizar diseños con la caracteritica responsive, a partir de dos tamaños básicos (mobil y desktop) lo gramos hacer un prototipo de alta fidelidad.

Una vez terminados los prototipos procedimos a escribir el código base en HTML y CSS respondiendo a las ideas plasmadas en ellos. A partir de las pruebas de usabilidad realizadas a los usuarios de diferentes características, realizamos iteraciones a la propuesta inicial, hasta conseguir el resultado actual de la página.
*
## 3. Historias de usuario
### Historia de Usuario I:

Como Visitante de la pagina de los juegos Olímpicos de Río del 2016,
Quiero ver la lista de los jugadores que participaron en las olimpiadas de Rio 2016 en la que pueda iterar organizadola de forma Ascendente y Descendente según lo prefiera.
Para conocer los jugadores que participaron por cultura general.
### Historia de Usuario II:

Como Visitante de la pagina de los juegos Olímpicos de Río del 2016,
Quiero filtrar por medallas a los atletas
Para conocer a los ganadores en cada categoria Oro, Plata y Bronce
### Historia de Usuario III:
Como visitante de la pagina de los juegos Olímpicos de Río del 2016,
Quiero poder ver una gráfica que me muestre en porcentaje el número de las mujeres y de los hombres
Para conocer la diferencia de participación por genero.
*
## 4. Criterios de aceptación

1. [x] El diseño del menú es responsive adaptandose a los diferentes tamaños de la pantalla.
2. [x] Los botones son de fácil acceso visual.
3. [x] Al hacer click en cada botón se despliega informacion que permite la iteracción del usuario en la web.
4. [x] Se aplicó test de usabilidad con 5 personas diferentes y se tomaron encuenta los test para realizar mejoras.
5. [x] La página en general y el menú en particular responden a buenas prácticas de diseño visual.
6. [x] La página muestra el porcentaje de mujeres y hombres participantes representados en una grafica en forma
       de torta, mostrando una estadistica importante por genero para ese evento en particular.
7. [x] La visualización del porcentaje estará acorde al estilo visual de la página.

*
## 5. Definición de terminado
1. [x] El código está respaldado en GitHub
2. [x] La página es completamente responsive
4. [x] En la página pueden filtrarse datos, como los ganadores de las medallas en categoria oro, plata y bronce.
5. [x] En la página se puede ordenar a los athletas alfabéticamente, en orden ascendente (A-z) o descendente (z-A).
6. [x] En la página se puede ver una grafica con el porcentaje de participacion por genero.

*
## 6. Prototipo de baja fidelidad

![Prot1](src/imagenes/prot1.jpg)

*
## 7. Prototipo de alta fidelidad

![Prot2](src/imagenes/proto2.png)

*
## 8. Testeos de usablidad

Se aplicaron tests de usabilidad con cinco usuarios, en las diferentes fases de desarrollo, teniendo encuenta los resultados itervenimos activamente en el diseño de la pagina, pudiendo así solucionar algunos problemas relacionados con la estructura y disposición de las diferentes secciones, tamaños de letra para una mejor visualización y tomamos encuenta algunas sugerencias que resaltaron, para poder aplicarlas en la siguiente versión.