# Juego Amigo Secreto 🎉

## Descripción

El Juego Amigo Secreto es una aplicación divertida para organizar el tradicional juego de amigo secreto, donde los participantes asignan al azar un amigo al que le puedes dar un regalo, ponerle retos y demas, solo imagina las posiilidades, todo esto sin revelar quién tiene a quién. La app facilita la asignación aleatoria, evitando la necesidad de hacerlo manualmente, ¡y asegurando la sorpresa!

## Características 🚀

- Asignación aleatoria de amigos secretos.
- Fácil de usar, interfaz sencilla.
- Generación de listas para mostrar los amigos asignados.
- ¡Ideal para fiestas de fin de año o eventos de grupo!

🎁 ¡Haz que el proceso de regalar sea mucho más divertido!

## Tecnologías 🛠️

- HTML y CSS para la estructura y estilo de la interfaz.
- JavaScript para la lógica de asignación aleatoria.
- Git para control de versiones.
- GitHub para almacenamiento y colaboración.

## Instalación 🖥️

1. Descarga el repositorio.
2. Descomprime el archvio zip.
3. Abre la carpeta y ejecuta el archivo index.html
# Juego Amigo Secreto 🎉

## Descripción

El Juego Amigo Secreto es una aplicación divertida para organizar el tradicional juego de amigo secreto, donde los participantes asignan al azar un amigo para regalarle un obsequio, todo esto sin revelar quién tiene a quién. La app facilita la asignación aleatoria, evitando la necesidad de hacerlo manualmente, ¡y asegurando la sorpresa!

## Características 🚀

- Asignación aleatoria de amigos secretos.
- Fácil de usar, interfaz sencilla.
- Generación de listas para mostrar los amigos asignados.
- ¡Ideal para fiestas de fin de año o eventos de grupo!

🎁 ¡Haz que el proceso de regalar sea mucho más divertido!

## Tecnologías 🛠️

- HTML y CSS para la estructura y estilo de la interfaz.
- JavaScript para la lógica de asignación aleatoria.
- Git para control de versiones.
- GitHub para almacenamiento y colaboración.

## Instalación 🖥️

1. Descarga el repositorio.
2. Descomprime el archvio zip.
3. Abre la carpeta y ejecuta el archivo index.html
![image](https://github.com/user-attachments/assets/1c0f151b-28d5-4d7f-a57f-7ed3270258a9)
Una vez estes en la interfaz del juego yo de recomiendo hacer llamada con tus amigos, haz que tu mente vuele, podrian hacerse preguntas o ponerle retos al amigo que salga en los resultados, ponte creativo.
## Personalización del Mensaje del Sorteado ✨

Si deseas personalizar el mensaje que aparece cuando se revela al amigo secreto sorteado, puedes hacerlo fácilmente editando el código fuente del proyecto.

### Pasos para cambiar el mensaje:

1. **Abre el archivo `script.js`**:
   - En el proyecto, abre el archivo `script.js` que contiene la lógica del juego.
   
2. **Localiza el código de la función que muestra el mensaje del ganador**:
   - Busca la parte del código donde se muestra el mensaje del amigo secreto sorteado. El código debería ser algo similar a esto:

   ```javascript
   function sortearAmigo() {
       let sorteo = Math.floor(Math.random() * nombresListados.length);
       let ganador = nombresListados[sorteo];
       document.querySelector(`#resultado`).textContent = `El ganador es: ${ganador}`;
   }

![image](https://github.com/user-attachments/assets/c792de10-62e6-43fd-ac67-363eb0670389)

![image](https://github.com/user-attachments/assets/e3a0b019-6c49-43a2-b8f7-c9ed87d6816c)

