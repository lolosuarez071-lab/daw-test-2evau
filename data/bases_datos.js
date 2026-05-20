window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["bases_datos"] = {
  "nombre": "Bases de Datos",
  "temas": {
    "Tema 11": [
      {
        "pregunta": "Para asociar tablas",
        "opciones": [
          "Suele utilizarse una clave primaria que se vincula a una clave externa",
          "Deben usarse sólo composiciones internas",
          "Deben usarse sólo composiciones externas y cruzadas",
          "No es necesario identificar columnas con el mismo nombre"
        ],
        "correcta": "A"
      },
      {
        "pregunta": "La cláusula que combina las filas de ambas tablas cuando hay coincidencias en una columna específica es y sólo muestra las filas donde los datos coinciden en ambas tablas es",
        "opciones": [
          "‘CROSS JOIN’",
          "‘JOIN’",
          "‘LEFT JOIN’",
          "Ninguna de las anteriores"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "‘NATURAL JOIN’ y ‘JOIN’ se diferencian en",
        "opciones": [
          "Que con ‘JOIN’ no se necesita especificar las columnas manualmente",
          "Que con ‘NATURAL JOIN’ no es necesario usar la cláusula ‘ON’",
          "No se diferencian en nada, son la misma cláusula",
          "Ninguna de las anteriores"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "Las composiciones externas utilizan las cláusulas",
        "opciones": [
          "‘LEFT JOIN’, ‘RIGHT JOIN’ y ‘FULL OUTER JOIN’",
          "‘INNER JOIN’ y ‘NATURAL JOIN’",
          "‘CROSS JOIN’ y ‘FROM’",
          "Todas las anteriores"
        ],
        "correcta": "A"
      },
      {
        "pregunta": "Un tipo de subconsulta es",
        "opciones": [
          "Subconsulta de fila",
          "Subconsulta de tabla",
          "Subconsulta escalar",
          "Todas las anteriores"
        ],
        "correcta": "D"
      },
      {
        "pregunta": "La consulta siguiente: SELECT * FROM empleados INNER JOIN departamentos ON empleados.e_id = departamentos.d_id;",
        "opciones": [
          "Selecciona el nombre y apellidos de los empleados de cada departamento",
          "Es errónea" ,
          "Sería equivalente eliminando la palabra INNER",
          "Ninguna de las anteriores"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "La cláusula ‘INTERSECT’",
        "opciones": [
          "Devuelve sólo las filas que están presentes en dos consultas ‘SELECT’, manteniendo las filas duplicadas",
          "Permite obtener las filas presentes en el resultado de la primera consulta ‘SELECT’, pero que no están en el resultado de la segunda",
          "Devuelve sólo las filas que están presentes en dos consultas ‘SELECT’, eliminando las filas duplicadas",
          "Ninguna de las anteriores"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "La cláusula ‘MINUS’",
        "opciones": [
          "Devuelve sólo las filas que están presentes en dos consultas ‘SELECT’, eliminando las filas duplicadas",
          "Permite obtener las filas presentes en el resultado de la primera consulta ‘SELECT’, pero que no están en el resultado de la segunda",
          "Hace lo opuesto a la cláusula ‘EXCEPT’",
          "Ninguna de las anteriores"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "SELECT nombre, departamento FROM empleados WHERE departamento NOT IN (SELECT departamento FROM despidos); ¿Qué datos obtendríamos con la anterior consulta?",
        "opciones": [
          "Los nombres y departamentos de todos los empleados que han sido despedidos",
          "Los nombres y departamentos de los empleados que no están en los departamentos listados en la tabla de despidos",
          "Los nombres y departamentos de todos los empleados, incluyendo aquellos en los departamentos listados en la tabla de despidos",
          "Sólo los nombres de los empleados que trabajan en los departamentos mencionados en la tabla de despidos",
        ],
        "correcta": "B"
      },
      {
        "pregunta": "SELECT e.nombre, e.departamento, d.ubicacion FROM empleados e LEFT JOIN departamentos d ON e.departamento_id = d.id; ¿Qué datos obtendríamos mediante la consulta anterior?",
        "opciones": [
          "Los nombres y departamentos de todos los empleados, y las ubicaciones de los departamentos sólo si hay coincidencia en el id",
          "Solo los nombres y departamentos de los empleados que tienen una coincidencia en la tabla de departamentos",
          "Los nombres, departamentos y ubicaciones de todos los departamentos",
          "Sólo los nombres y departamentos de los empleados"
        ],
        "correcta": "A"
      }
    ],
    "Tema 12": [
      {
        "pregunta": "Al insertar datos en una tabla con integridad referencial, ¿qué ocurrirá si el valor no existe en la tabla referenciada?",
        "opciones": [
          "Se insertará el registro y se mostrará una advertencia",
          "Se insertará normalmente",
          "Se creará también un registro en la tabla referenciada",
          "Se producirá un error y la inserción no se realizará"
        ],
        "correcta": "D"
      },
      {
        "pregunta": "Para insertar nuevos registros en la base de datos se emplea el comando",
        "opciones": [
          "UPDATE",
          "INSERT",
          "SELECT",
          "DELETE"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "La función Unpivot realiza",
        "opciones": [
          "La transformación de columnas en filas",
          "La transformación de filas en columnas",
          "El particionamiento de una tabla grande en partes más pequeñas",
          "Ninguna de las anteriores"
        ],
        "correcta": "A"
      },
      {
        "pregunta": "DELETE FROM EMPLEADOS WHERE NUM_DEPARTAMENTO = 5; Con la consulta anterior se consigue",
        "opciones": [
          "Actualizar el nº de departamento de los empleados al 5",
          "Obtener los datos de los empleados del departamento nº 5",
          "Eliminar los empleados que pertenecen al departamento nº 5",
          "No se consigue nada, la consulta es errónea"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "La función JSON_TABLE",
        "opciones": [
          "Extrae un objeto o array JSON",
          "Convierte filas y columnas SQL en datos JSON",
          "Convierte datos JSON en filas y columnas SQL",
          "Extrae un valor escalar de un documento JSON"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "El tratamiento de datos utilizando herramientas gráficas",
        "opciones": [
          "Sólo es posible en Oracle",
          "No es posible en ningún caso.",
          "No se utiliza habitualmente porque no es muy útil",
          "Ninguna de las anteriores"
        ],
        "correcta": "D"
      },
      {
        "pregunta": "ALL_TABLES y ALL_TAB_COLUMNS son",
        "opciones": [
          "Funciones para el tratamiento de datos JSON",
          "Funciones para el tratamiento de XML",
          "Comandos para la actualización de registros",
          "Vistas para realizar consultas al diccionario de datos"
        ],
        "correcta": "D"
      },
      {
        "pregunta": "Para eliminar los registros específicos de una tabla se utiliza el comando",
        "opciones": [
          "INSERT",
          "DELETE",
          "UPDATE",
          "Ninguna de las anteriores"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "Las funciones de agregación avanzadas para resumir y analizar datos de forma más detallada son",
        "opciones": [
          "PIVOT y UNPIVOT",
          "ROLLUP, CUBE Y GROUPING SETS",
          "RESUME, RESUME_VALUE y ANALYZE",
          "Ninguna de las anteriores"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "En la siguiente consulta: SELECT * FROM libros WHERE autor_id = :id_autor; ¿qué es “:id_autor”?",
        "opciones": [
          "El resultado de concatenar “:” con el id del autor",
          "Una asignación de valor del campo “id_autor” ",
          "Una actualización del campo “autor_id”",
          "Una variable enlazada"
        ],
        "correcta": "D"
      }
    ],
    "Tema 13": [
      {
        "pregunta": "Para crear un usuario debemos utilizar la sentencia",
        "opciones": [
          "NEW USER userName",
          "CREATE USER userName",
          "MAKE USER userName",
          "Ninguna de las anteriores"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "Algunas vistas para consultar las restricciones de la base de datos son:",
        "opciones": [
          "ALL_CONSTRAINTS, USER_CONSTRAINTS",
          "ALL_CONS_COLUMNS y DBA_CONSTRAINTS",
          "USER_CONS_COLUMNS y DBA_CONS_COLUMNS",
          "Todas son correctas"
        ],
        "correcta": "D"
      },
      {
        "pregunta": "La seguridad ante fallos lógicos conlleva:",
        "opciones": [
          "La planificación de copias de seguridad",
          "La gestión de usuarios, roles y perfiles.",
          "La construcción de un DataCenter homologado",
          "Ninguna de las anteriores"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "Dentro de las prácticas recomendadas para garantizar la seguridad ante fallos lógicos se encuentra/n la/s",
        "opciones": [
          "Gestión de usuarios, roles y perfiles",
          "Restricciones de acceso a servicios y sistemas de gestión de bases de datos",
          "Políticas de seguridad a nivel de software",
          "Todas las anteriores"
        ],
        "correcta": "D"
      },
      {
        "pregunta": "Las vistas permiten la Inserción de datos",
        "opciones": [
          "Siempre que sean materializadas",
          "Siempre que estén definidas como consultas simples de una tabla sin agrupaciones ni filtros",
          "Siempre que sean consultas multitabla y con agrupaciones o filtros",
          "Nunca"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "Los índices permiten",
        "opciones": [
          "Diferenciar las filas que cumplen una condición determinada",
          "Actualizar los datos de forma manual",
          "Acceder a otros objetos de forma indirecta",
          "Todas las anteriores"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "Se pueden crear índices usando las sentencias",
        "opciones": [
          "Sólo con CREATE INDEX",
          "CREATE INDEX y DROP INDEX",
          "CREATE INDEX y ALTER TABLE",
          "Ninguna de las anteriores"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "Los comandos DCL son",
        "opciones": [
          "IDENTIFIED y MODIFY",
          "DELETE y REVOKE",
          "MODIFY y GRANT",
          "GRANT y REVOKE"
        ],
        "correcta": "D"
      },
      {
        "pregunta": "Algunos de los objetos de la base de datos sobre los que asignar privilegios son",
        "opciones": [
          "DIRECTORY y REFACTORY",
          "TABLE Y EDITION",
          "EDITION Y REFACTORY",
          "TABLE y OPTIONAL"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "Algunas de las políticas de bloqueo más frecuentes son",
        "opciones": [
          "El control de sesiones ficticias y la monitorización de accesos",
          "El bloqueo por intentos fallidos de inicio de sesión y la restricción de acceso por horario",
          "El bloqueo por exceso de uso y el control de recopilación de datos",
          "Todas las anteriores"
        ],
        "correcta": "B"
      }
    ],
    "Tema 14": [
      {
        "pregunta": "Los SGBD pueden establecer bloqueos a nivel de",
        "opciones": [
          "Tabla y columna",
          "Tabla, fila y página",
          "Tabla y nodo",
          "Ninguna de las anteriores"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "El problema de concurrencia que ocurre cuando, durante una transacción, se detectan nuevas filas en un conjunto de datos al repetir una consulta, se conoce como",
        "opciones": [
          "Lectura no repetible",
          "Lectura sucia",
          "Lectura fantasma",
          "Problema de la modificación perdida"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "Un problema de concurrencia de transacciones puede ser",
        "opciones": [
          "Lectura modificada",
          "Lectura sucia",
          "Lectura limpia",
          "Lectura repetible"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "Las técnicas de control de concurrencia pueden ser",
        "opciones": [
          "Marcas de tiempo",
          "Bloqueos",
          "Validación",
          "Todas las anteriores"
        ],
        "correcta": "D"
      },
      {
        "pregunta": "Las técnicas de bloqueo para prevenir la concurrencia son",
        "opciones": [
          "Permanente y parcial",
          "Temporal y permanente",
          "Pesimista y optimista",
          "Ninguna de las anteriores"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "La propiedad de las transacciones que asegura que la base de datos permanezca en un estado estable y consistente después de la transacción es",
        "opciones": [
          "Durabilidad",
          "Consistencia",
          "Atomicidad",
          "Estabilidad"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "Una transacción suele iniciarse con la primera instrucción DML que se ejecuta y concluye con una instrucción",
        "opciones": [
          "END TRANSACTION",
          "AUTOCOMMIT",
          "COMMIT o ROLLBACK",
          "Ninguna de las anteriores"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "La instrucción que permite crear puntos de guardado intermedios es",
        "opciones": [
          "COMMIT",
          "ROLLBACK TO SAVEPOINT",
          "SAVEPOINT",
          "RELEASE SAVEPOINT"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "La instrucción que sirve para eliminar un SAVEPOINT es",
        "opciones": [
          "DELETE SAVEPOINT",
          "RELEASE SAVEPOINT",
          "ROLLBACK TO SAVEPOINT",
          "Ninguna de las anteriores"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "El COMMIT de dos fases asegura que todas las operaciones de la transacción distribuida se realicen de manera coherente en",
        "opciones": [
          "Todos los nodos involucrados",
          "El nodo principal",
          "Algunos de los nodos",
          "Ninguna de las anteriores"
        ],
        "correcta": "A"
      }
    ],
    "Tema 15": [
      {
        "pregunta": "En PL/SQL",
        "opciones": [
          "No se diferencia entre mayúsculas y minúsculas en las palabras clave, funciones, etc.",
          "Todas las instrucciones deben finalizar con un punto y coma",
          "Los comentarios de varias líneas se inician con /* y se cierran con */",
          "Todas son correctas"
        ],
        "correcta": "D"
      },
      {
        "pregunta": "Los tipos de datos simples en PL/SQL pueden ser",
        "opciones": [
          "Numéricos, object, booleanos, struct o de fecha",
          "Numéricos, de carácter, booleanos, de fecha o LOB",
          "Numéricos, de fecha o string",
          "Struct, LOB, string o booleanos"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "DECLARE año_fabricacion CONSTANT NUMBER (4,0) := 1985; vehiculo VARCHAR := ‘coche’; consumo NUMBER (2, 2) := 5; En el código anterior se declaran",
        "opciones": [
          "Las variables vehículo y consumo, y la constante año_fabricacion",
          "Las variables año_fabricacion, vehículo y consumo",
          "Las variables año_fabricacion y vehículo",
          "Ninguna de las anteriores"
        ],
        "correcta": "A"
      },
      {
        "pregunta": "IF (c < 4) THEN c := c **2; ELSEIF (5 < c AND c < 39) c := c + 7; END IF; Mediante la sentencia anterior",
        "opciones": [
          "La variable c se multiplica por dos y posteriormente se le suman siete unidades.",
          "Tiene parámetros erróneos, no devolvería nada.",
          "Si a es menor de 4 se eleva a 2, si está entre 5 y 39 se le suman siete unidades.",
          "Se le suman siete unidades a la variable a en cualquier caso."
        ],
        "correcta": "C"
      },
      {
        "pregunta": "DECLARE i NUMBER := 11; BEGIN WHILE i < 10 LOOP DBMS_OUTPUT.PUT_LINE (i); i := i+1; END LOPP; ¿Qué resultado produciría la sentencia anterior?",
        "opciones": [
          "Mostraría por pantalla los números del 1 al 10",
          "Mostraría por pantalla los números del 1 al 9",
          "Mostraría por pantalla los números del 11 al 1",
          "No produciría ningún resultado"
        ],
        "correcta": "D"
      },
      {
        "pregunta": "Las excepciones en PL/SQL se utilizan para",
        "opciones": [
          "Verificar segmentos de código erróneos",
          "Manejar errores de forma controlada",
          "Indicar acciones que se salen de lo habitual en programación",
          "Indicar que un determinado código se trata de distinta forma"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "En PL/SQL podemos distinguir los siguientes tipos de excepciones",
        "opciones": [
          "Las automáticas y las definidas por el usuario",
          "Las que define el administrador y las predefinidas por el sistema",
          "Las que define el usuario y las definidas por Oracle",
          "Las que define el usuario, las predefinidas por Oracle y las excepciones de Oracle sin definir"
        ],
        "correcta": "D"
      },
      {
        "pregunta": "De las librerías de funciones en PL/SQL, algunas de las funciones más utilizadas son",
        "opciones": [
          "Funciones de agregación y matemáticas",
          "Funciones de composición y control de flujo",
          "Funciones de fecha y manejo de transacciones",
          "Ninguna de las anteriores"
        ],
        "correcta": "A"
      },
      {
        "pregunta": " Entre los entornos de desarrollo de SQL más populares se encuentran",
        "opciones": [
          "Eclipse, Atom, Netbeans",
          "Visual SQLStudio, IntelliJ IDEA, RStudioSQL",
          "MySQL Wokbench, Microsoft SQL Server Management Studio y Oracle SQL Developer",
          "Ninguna de las anteriores"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "Los delimitadores se usan para",
        "opciones": [
          "Asignar nombres a los componentes de los programas",
          "Diferenciar operaciones o agregar comentarios",
          "Asignar un valor a un identificador o realizar comparaciones",
          "Delimitar las sentencias "
        ],
        "correcta": "B"
      }
    ],
    "Tema 16": [
      {
        "pregunta": "Un conjunto de datos relacionados organizados en campos es un",
        "opciones": [
          "Array",
          "Cursor",
          "Registro",
          "Tabla anidada"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "DECLARE TYPE RegPersona IS RECORD (  CODIGO NUMBER (2), NOMBRE VARCHAR2 (40), EDAD NUMBER ); Mediante el código anterior se está",
        "opciones": [
          "Declarando un array",
          "Declarando un registro",
          "Declarando un cursor",
          "Ninguna de las anteriores"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "En los registros, el atributo %ROWTYPE indica que un registro",
        "opciones": [
          "Tiene la misma estructura que una fila completa de una tabla",
          "Tiene un campo con el mismo tipo de dato que el de una tabla existente",
          "Tiene una fila con los mismos datos que la columna de una tabla existente",
          "No existe ese atributo"
        ],
        "correcta": "A"
      },
      {
        "pregunta": "Los arrays",
        "opciones": [
          "Son una colección de elementos del mismo tipo",
          "Deben tener al menos un elemento",
          "Se crean vacíos (al definirlos)",
          "Todas son correctas"
        ],
        "correcta": "D"
      },
      {
        "pregunta": "array_z.LAST; Siendo “array_z” un array, ¿qué devolvería la sentencia anterior? ",
        "opciones": [
          "El elemento anterior al referenciado",
          "El último elemento del array",
          "El tamaño final máximo del array",
          "Ninguna es correcta"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "En los cursores, la propiedad %FOUND",
        "opciones": [
          "Devuelve TRUE si el primer acceso al cursor mediante FETCH devuelve un resultado",
          "Devuelve TRUE si el último acceso al cursor mediante FETCH no ha devuelto resultados",
          "Devuelve TRUE si el último acceso al cursor mediante FETCH ha devuelto una fila",
          "Es una propiedad de arrays, no de cursores"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "En los cursores, ¿qué devuelve la propiedad %ISOPEN?",
        "opciones": [
          "Devuelve un valor TRUE en caso de que el cursor esté cerrado",
          "Devuelve un valor TRUE en caso de que el cursor esté abierto",
          "Devuelve el número de filas que el cursor ha procesado",
          "Devuelve FALSE en caso de que el cursor se encuentre abierto"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "Los cursores explícitos",
        "opciones": [
          "Son creados automáticamente por el SGBD",
          "Se utilizan para recorrer los resultados de consultas que devuelven una fila",
          "Deben ser definidos y gestionados por el usuario",
          "Ninguna de las anteriores"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "Para hacer la extracción de datos de un cursor se utiliza la instrucción",
        "opciones": [
          "OPEN",
          "EXTRACT",
          "ROWCOUNT",
          "FETCH"
        ],
        "correcta": "D"
      },
      {
        "pregunta": "Los arrays asociativos",
        "opciones": [
          "Son ideales para búsquedas rápidas y dinámicas de datos",
          "Tienen un límite en el número de elementos que pueden contener",
          "No pueden cambiar de tamaño dinámicamente",
          "Pueden ser almacenados directamente en la base de datos"
        ],
        "correcta": "A"
      }
    ],
    "Tema 17": [
      {
        "pregunta": "Un bloque de código diseñado con un propósito específico, al cual se le asigna un nombre para poder reutilizarlo en distintas partes del programa es",
        "opciones": [
          "Un job",
          "Un disparador",
          "Un procedimiento",
          "Un paquete"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "Los disparadores tipo fila",
        "opciones": [
          "Se ejecutan una vez por cada fila afectada",
          "Se ejecutan una vez por cada operación DML",
          "Se ejecutan múltiples veces por cada columna afectada",
          "Ninguna de las anteriores"
        ],
        "correcta": "A"
      },
      {
        "pregunta": "Los paquetes permiten agrupar",
        "opciones": [
          "Funciones, procedimientos y tipos de datos.",
          "Cursores, excepciones y disparadores",
          "Tablas, vistas y secuencias.",
          "No permiten agrupar nada"
        ],
        "correcta": "A"
      },
      {
        "pregunta": "Los disparadores se utilizan para",
        "opciones": [
          "Rastrear los cambios en las tablas e identificar al usuario que los realizó",
          "Automatizar tareas de mantenimiento o administrativas",
          "Aplicar reglas de integridad",
          "Todas son correctas"
        ],
        "correcta": "D"
      },
      {
        "pregunta": "Los procedimientos se pueden invocar desde otros bloques de código",
        "opciones": [
          "Usando el comando INVOKE",
          "Usando su nombre",
          "Usando el comando SQL DESCRIBE",
          "Usando la palabra PROCEDURE"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "Las operaciones COMMIT, ROLLBACK, SAVEPOINT o SET TRANSACTION",
        "opciones": [
          "Están prohibidas dentro de un disparador",
          "Son obligatorias dentro de un disparador",
          "No están recomendadas, pero se pueden realizar dentro de un disparador",
          "Ninguna de las anteriores"
        ],
        "correcta": "A"
      },
      {
        "pregunta": "Con las cláusulas IF INSERTING, IF UPDATING e IF DELETING",
        "opciones": [
          "Se pueden modificar los permisos de usuario durante la ejecución del disparador",
          "Se puede deshacer la operación DML que activó el disparador",
          "Se puede determinar el momento exacto en que se ejecutará el disparador",
          "Se puede identificar la operación DML que disparó la ejecución del disparador"
        ],
        "correcta": "D"
      },
      {
        "pregunta": "Los disparadores de tipo INSTEAD OF se utilizan exclusivamente en",
        "opciones": [
          "Tablas",
          "Paquetes",
          "Vistas",
          "En vistas y tablas"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "Para automatizar la ejecución de scripts en PL/SQL existen varias opciones como",
        "opciones": [
          "Oracle Enterprise Manager",
          "DBMS_JOB",
          "Oracle Scheduler",
          "Todas las anteriores"
        ],
        "correcta": "D"
      },
      {
        "pregunta": "Para habilitar o deshabilitar un disparador se emplea la sentencia",
        "opciones": [
          "DROP TRIGGER",
          "UPDATE TRIGGER",
          "ACTIVE TRIGGER",
          "Ninguna de las anteriores"
        ],
        "correcta": "D"
      }
    ],
    "Tema 18": [
      {
        "pregunta": "En una base de datos objeto-relacional",
        "opciones": [
          "Los tipos de datos son simples",
          "Los lenguajes de consulta son poco robustos",
          "No se puede realizar la integración con lenguajes de programación",
          "Ninguna de las anteriores"
        ],
        "correcta": "D"
      },
      {
        "pregunta": "Respecto a la correspondencia entre los elementos del modelo orientado a objetos y el modelo relacional",
        "opciones": [
          "Un objeto se corresponde con una tupla",
          "Una variable se puede comparar con una relación ",
          "Un objeto se puede comparar con un atributo",
          "Ninguna de las anteriores"
        ],
        "correcta": "A"
      },
      {
        "pregunta": "Un tipo de dato objeto",
        "opciones": [
          "Se compone de dos elementos, que son el nombre y los atributos",
          "Se estructura en dos partes, que son la especificación y el cuerpo",
          "Es una representación creada por un software para reflejar un elemento del mundo real",
          "Todas las anteriores"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "¿Cuál de las siguientes afirmaciones es correcta sobre los métodos estáticos según el texto?",
        "opciones": [
          "Los métodos estáticos pueden acceder a los atributos de instancia del objeto.",
          "Los métodos estáticos requieren la creación de una instancia del objeto para ser llamados.",
          "Los métodos estáticos se invocan directamente utilizando el nombre del tipo de dato objeto.",
          "Los métodos estáticos son útiles solo cuando se necesita acceder a los atributos de instancia del objeto."
        ],
        "correcta": "C"
      },
      {
        "pregunta": "En relación a la sintaxis para definir un tipo de dato objeto, la sentencia utilizada es",
        "opciones": [
          "CREATE TYPE nombre_tipo AS OBJECT",
          "CREATE nombre_tipo AS OBJECT",
          "CREAR nombre_tipo",
          "Ninguna de las anteriores"
        ],
        "correcta": "A"
      },
      {
        "pregunta": "En relación a la declaración de atributos de un tipo de dato objeto",
        "opciones": [
          "El tipo de dato asociado puede ser cualquiera disponible",
          "El tipo de dato puede ser otro tipo de dato objeto",
          "Está permitida la asignación de la restricción NOT NULL ",
          "Se pueden declarar después de los métodos"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "En relación a la declaración de métodos",
        "opciones": [
          "Se declaran en el cuerpo del tipo de dato objeto",
          "Incluye el código del método",
          "Se declaran utilizando la palabra MEMBER",
          "Todas las anteriores"
        ],
        "correcta": "D"
      },
      {
        "pregunta": "MEMBER PROCEDURE calcular_perímetro (longitud NUMBER); MEMBER PROCEDURE calcular_perímetro (longitud NUMBER, ancho NUMBER); En el código anterior se muestra un ejemplo de",
        "opciones": [
          "Sobrecarga",
          "Definición de funciones",
          "Métodos constructores",
          "Ninguna de las anteriores"
        ],
        "correcta": "A"
      },
      {
        "pregunta": "En el caso de las funciones, si el parámetro SELF no se declara de manera explícita, su modo por defecto será",
        "opciones": [
          "INSIDE",
          "IN",
          "IN OUT",
          "BETWEEN"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "En un tipo de dato objeto el cuerpo permanece",
        "opciones": [
          "Público ",
          "Protegido",
          "Privado",
          "Ninguna de las anteriores "
        ],
        "correcta": "C"
      }
    ],
    "Tema 19": [
      {
        "pregunta": "FUNCTION modificarProfesor (a NUMBER) RETURN profesor; ¿Qué se está realizando mediante el código anterior?",
        "opciones": [
          "Se está declarando una función que devuelve un objeto profesor",
          "Se está declarando una función al que se le pasa un objeto por parámetro",
          "Se está declarando un objeto de tipo alumno",
          "Ninguna de las anteriores"
        ],
        "correcta": "A"
      },
      {
        "pregunta": "venta5 := NEW venta (0482, ‘Sara Martínez López’, 3000)  ¿Qué se está realizando mediante el código anterior?",
        "opciones": [
          "Se está declarando un objeto",
          "Se está modificando un objeto de tipo venta",
          "Se está inicializando un objeto de tipo venta",
          "Ninguna de las anteriores"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "¿Cómo crearíamos una variable para almacenar un objeto de tipo alumno?",
        "opciones": [
          "alumno2 alumno;",
          "alumno alumno2;",
          "alumno2 := alumno;",
          "alumno := alumno2;"
        ],
        "correcta": "A"
      },
      {
        "pregunta": "Queremos asignar un valor ‘Ramiro’ al atributo nombre del objeto profesor1",
        "opciones": [
          "Ramiro = profesor1;",
          "profesor1.nombre := ‘Ramiro’;",
          "nombre.profesor1 := ‘Ramiro’;",
          "Ninguna de las anteriores"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "Si queremos invocar el método setSalario del objeto profesor1 debemos escribir la siguiente instrucción:",
        "opciones": [
          "profesor1.setSalario();",
          "setSalario().profesor1;",
          "profesor1().setSalario;",
          "setSalario.profesor1();"
        ],
        "correcta": "A"
      },
      {
        "pregunta": " El comando que impide que otros tipos de objeto puedan heredar del objeto en cuestión es",
        "opciones": [
          "MAP",
          "NOT FINAL",
          "NOT HEREDITARY",
          "FINAL"
        ],
        "correcta": "D"
      },
      {
        "pregunta": "Los métodos STATIC",
        "opciones": [
          "Se invocan directamente sobre el tipo de objeto en sí",
          "Se llaman sobre instancias específicas de un objeto",
          "Se suelen utilizar para modificar o consultar los valores de sus atributos",
          "Todas las anteriores"
        ],
        "correcta": "A"
      },
      {
        "pregunta": "Respecto a los métodos MAP",
        "opciones": [
          "Es obligatorio tener múltiples en cada tipo de objeto",
          "En los tipos de objeto no se puede tener métodos MAP",
          "Se definen tantos como se considere oportunos en cada tipo de objeto",
          "Sólo puede existir un único método de tipo MAP para cada tipo de objeto"
        ],
        "correcta": "D"
      },
      {
        "pregunta": "Un método marcado como FINAL",
        "opciones": [
          "Permite que su implementación sea sobrescrita en cualquier subtipo",
          "Impide que el método sea llamado por otros métodos del mismo tipo de objeto",
          "Asegura que su implementación no pueda ser sobrescrita en ningún subtipo",
          "Hace que el método sólo pueda ser invocado desde dentro del mismo tipo de objeto"
        ],
        "correcta": "C"
      },
      {
        "pregunta": " Cuando un subtipo hereda de un supertipo no instanciable, si queremos que pueda tener instancias, es obligatorio usar la palabra clave",
        "opciones": [
          "NO INSTANTIABLE",
          "INSTANTIABLE",
          "SELF AS RESULT",
          "MAP "
        ],
        "correcta": "B"
      }
    ],
    "Tema 20": [
      {
        "pregunta": "INSERT INTO cursos (id, nombre_curso, profesor_ref) SELECT 2, 'Tecnología', REF(p) FROM profesores p WHERE p.nombre = ‘Julio'; El código anterior permite",
        "opciones": [
          "Insertar los datos de un curso y un objeto profesor completo cuyo nombre es Julio",
          "Insertar los datos de un curso y una referencia al objeto profesor cuyo nombre es Julio",
          "Inserta una referencia a un curso y una referencia a un profesor llamado Julio",
          "Ninguna de las anteriores"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "Los tipos de datos colección VARRAY ",
        "opciones": [
          "Están organizados mediante un índice",
          "No tienen un orden específico",
          "No tienen tamaño fijo predefinido",
          "Todas las anteriores"
        ],
        "correcta": "A"
      },
      {
        "pregunta": "TYPE id_departamento IS TABLE OF NUMBER; Con el código anterior anterior se está",
        "opciones": [
          "Creando una tabla",
          "Declarando una tabla anidada",
          "Declarando un VARRAY",
          "Creando un objeto"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "CREATE TABLE t_alumnos OF alumno; Mediante el código anterior se está",
        "opciones": [
          "Creando una tabla de elementos ‘t_alumnos’",
          "Creando una tabla de objetos ‘alumno’",
          "Creando una tabla con columnas tipo objeto",
          "Ninguna es correcta"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "La cláusula VALUE puede emplearse para",
        "opciones": [
          "Realizar comparaciones entre objetos",
          "Modificar el valor de un atributo de un objeto",
          "Eliminar el valor de un objeto",
          "Todas las anteriores "
        ],
        "correcta": "A"
      },
      {
        "pregunta": "Un ejemplo de creación de tabla con columnas tipo objeto es",
        "opciones": [
          "CREATE TABLE alumno2 (alumno1 alumno);",
          "CREATE TABLE alumno1 OF (columna alumno);",
          "CREATE TABLE alumno1 OF alumno;",
          "Ninguna es correcta"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "Para insertar objetos en una tabla se utiliza el comando",
        "opciones": [
          "VALUE",
          "UPDATE",
          "DELETE",
          "Ninguna de las anteriores"
        ],
        "correcta": "D"
      },
      {
        "pregunta": "Para recorrer internamente un VARRAY",
        "opciones": [
          "Se utiliza la cláusula VALUE",
          "Se utilizan tablas anidadas",
          "No es posible llevarlo a cabo",
          "Ninguna es correcta"
        ],
        "correcta": "D"
      },
      {
        "pregunta": "UPDATE alumno3 a SET a.c2.nombre = ‘Federico’ WHERE a.c2.id_alumno = ‘876853’; Mediante el código anterior",
        "opciones": [
          "Se inserta un objeto tipo alumno3 en una tabla",
          "Se modifica el valor del objeto cuyo id sea ‘876853’",
          "Se modifica el valor del objeto con nombre Federico",
          "Se actualizan todos los objetos cuyo nombre es Federico "
        ],
        "correcta": "B"
      },
      {
        "pregunta": "La cláusula VALUE se utiliza junto con",
        "opciones": [
          "El comando UPDATE",
          "El comando DELETE",
          "Consultas SELECT",
          "Ninguna de las anteriores "
        ],
        "correcta": "C"
      }
    ]
  }
};
