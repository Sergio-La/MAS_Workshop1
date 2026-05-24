# MAS_Workshop1
Taller uno maestría en arquitectura de Software.

Cada diagrama tiene su imagen adjunta.

### Escenario 1

Para el escenario uno, se selecciona el patrón **Builder** (patrón creacional) ya que se logra identificar que la definición *"Builder es un patrón de diseño creacional que permite construir objetos complejos paso a paso. El patrón permite producir diferentes tipos y representaciones de un objeto utilizando el mismo código de construcción"*.

**Justificación de la elección:**
Se selecciona este patrón debido a que el escenario presenta la necesidad de crear objetos con múltiples configuraciones opcionales. El patrón **Builder** permite independizar el proceso de construcción del objeto final, garantizando que el código de creación sea limpio y fácil de mantener al eliminar la necesidad de constructores con múltiples parámetros.

---

### Escenario 2

Para el escenario dos, se selecciona el patrón **Bridge** (patrón estructural) ya que se logra identificar que la definición *"Bridge es un patrón de diseño estructural que permite dividir una clase grande o un conjunto de clases estrechamente relacionadas en dos jerarquías separadas (abstracción e implementación) que pueden desarrollarse de forma independiente entre sí"*.

**Justificación de la elección:**
Se elige el patrón Bridge para evitar la multiplicación descontrolada de clases que surgiría al intentar extender las jerarquías de forma tradicional. Este patrón es la solución técnica adecuada al permitir que la abstracción (tipo de notificación) y la implementación (plataforma de visualización) evolucionen de forma independiente, eliminando dependencias rígidas entre ambas dimensiones del sistema.



---

### Escenario 3

Para el escenario tres, se selecciona el patrón **Mediator** (patrón de comportamiento) ya que se logra identificar que la definición *"Mediator es un patrón de diseño de comportamiento que permite reducir las dependencias caóticas entre objetos. El patrón restringe las comunicaciones directas entre los objetos y los obliga a colaborar únicamente a través de un objeto mediador"*.

**Justificación de la elección:**
Se selecciona el patrón **Mediator** para mitigar el problema de una "red enmarañada de interacciones punto a punto" entre los componentes. Al centralizar la lógica de comunicación en un objeto mediador, se eliminan las dependencias directas entre los usuarios del chat grupal, permitiendo que cada componente se comunique de forma desacoplada, lo que mejora significativamente la escalabilidad y el mantenimiento del sistema.
