# Proyecto Suma Node.js

Este proyecto implementa una simple función de suma en Node.js y demuestra cómo probarla utilizando Mocha y Chai. Este ejemplo está diseñado para ayudar a los desarrolladores a entender cómo implementar y probar funcionalidades básicas en Node.js.

## Características

- **Función Suma**: Una función simple que suma dos números.
- **Pruebas Automatizadas**: Pruebas unitarias implementadas usando Mocha y Chai.

## Tecnologías Utilizadas

- Node.js
- Mocha: Un framework de pruebas para Node.js.
- Chai: Una biblioteca de aserciones para Node.js, que puede ser emparejada con cualquier framework de pruebas de JavaScript.

## Estructura del Proyecto
```
proyecto-suma-nodejs
|-- /src
|   |-- suma.js       # Función que implementa la suma.
|-- /test
|   |-- index.test.js # Pruebas para la función suma.
|-- package.json      # Configura dependencias y scripts del proyecto.
|-- README.md         # Documentación del proyecto.

```

## Requisitos Previos

Para ejecutar este proyecto, necesitarás tener Node.js y npm instalados en tu máquina. Node.js 12.x o superior es recomendado. Puedes descargarlo e instalarlo desde [nodejs.org](https://nodejs.org/).

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. **Clona este repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/proyecto-suma-nodejs.git
   cd proyecto-suma-nodejs
   ```

2. **Instala las dependencias:
   ```bash
    npm install
     ```
3. **Ejecución de Pruebas
Para ejecutar las pruebas y verificar que la función suma está trabajando correctamente, utiliza el siguiente comando:

   ```bash
    npm test
   ```

Este comando ejecutará las pruebas definidas en test/index.test.js usando Mocha y Chai. Deberías ver una salida que confirme que las pruebas han pasado exitosamente.

