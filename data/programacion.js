window.QUIZ_DATA = window.QUIZ_DATA || {};
window.QUIZ_DATA["programacion"] = {
  "nombre": "Programación",
  "temas": {
    "Tema 11": [
      {
        "pregunta": "¿Una clase se puede declarar como abstracta y no contener métodos abstractos?",
        "opciones": [
          "Si, no hay ningún problema.",
          "No, en las clases abstractas todos los métodos tienen que ser abstractos forzosamente.",
          "Si, pero solo si como mínimo la hereda otra clase.",
          "No, ya que mínimo ha de tener un método abstracto."
        ],
        "correcta": "A"
      },
      {
        "pregunta": "Las interfaces:",
        "opciones": [
          "Pueden contener variables privadas, y estas ser usadas en los métodos.",
          "En ellas todos los métodos son abstractos de forma implícita.",
          "Tienen que heredar de la clase Interface",
          "Son lo mismo que las clases abstractas"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "La interfaz Comparator",
        "opciones": [
          "Se emplea para definir el orden natural de los objetos de una clase",
          "Tiene un solo método llamado comparator",
          "Se utiliza para definir múltiples formas de ordenar objetos.",
          "Permite definir un único criterio de ordenación"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "¿Cómo indicamos en Java que una clase va a usar los métodos de una interfaz?",
        "opciones": [
          "Con la palabra reservada implements.",
          "Con la palabra reservada extends.",
          "Con la palabra reservada implementa.",
          "Con la palabra reservada aplic."
        ],
        "correcta": "A"
      },
      {
        "pregunta": "Tenemos una clase que implementa dos interfaces diferentes y estas contienen un método con el mismo nombre:",
        "opciones": [
          "Si los dos métodos devuelven un tipo de dato diferente se producirá un error de compilación.",
          "Si los dos métodos devuelven el mismo tipo de dato se ejecutarán los dos.",
          "Si los dos métodos son exactamente iguales, se producirá un error de compilación.",
          "Una clase no puede implementar dos interfaces."
        ],
        "correcta": "C"
      },
      {
        "pregunta": "¿Qué palabra reservada tenemos que utilizar para declarar una interfaz?",
        "opciones": [
          "enum",
          "interface",
          "inter ",
          "intertract"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "Sobre las interfaces:",
        "opciones": [
          "La interfaz que se use no pertenece a la jerarquía de clases.",
          "La interfaz que se use pertenece a la jerarquía de clases.",
          "Las interfaces tienen que heredar de una clase que pertenezca a la jerarquía en la que se usa.",
          "Las interfaces solo se pueden utilizar con clases de las que no se pueda heredar."
        ],
        "correcta": "A"
      },
      {
        "pregunta": "¿Qué palabra reservada tenemos que utilizar para declarar una clase abstracta?",
        "opciones": [
          "Interface",
          "final",
          "abstract",
          "static"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "Como podemos saber de que tipo es un objeto",
        "opciones": [
          "Mediante la sentencnia instanceof",
          "Mediante la sentencia typeof",
          "Mediante la sentencia instanceType",
          "Mediante la sentencia instance"
        ],
        "correcta": "A"
      },
      {
        "pregunta": "¿Cómo separamos las interfaces cuando se implementa más de una en una clase?",
        "opciones": [
          "Mediante espacios en blanco.",
          "Mediante comas.",
          "Mediante punto y coma.",
          "Mediante tabuladores.  "
        ],
        "correcta": "B"
      }
    ],
    "Tema 12": [
      {
        "pregunta": "¿Dónde se van a encontrar todas las clases de acceso a ficheros?",
        "opciones": [
          "En el paquete java.files.*;",
          "En el paquete java.io.*;",
          "En el paquete java.files.io.*;",
          "En el paquete java.io.files.*;"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "¿Cuál de las siguientes clases no ofrece un acceso a flujos de caracteres?",
        "opciones": [
          "InputStreamReader.",
          "Reader.",
          "InputStream. ",
          "Writer"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "La ruta absoluta:",
        "opciones": [
          "Indica la posición de un fichero desde la posición actual.",
          "Indica la posición de un fichero desde la raíz.",
          "Indica la posición de un fichero desde la posición actual en Windows y desde la raíz en GNU/Linux.",
          "Indica la posición de un fichero desde la posición actual en GNU/Linux y desde la raíz en Windows."
        ],
        "correcta": "B"
      },
      {
        "pregunta": "En cuanto a cómo se guardan los datos en un fichero, ¿Cuál es el tipo de organización que emplea dos archivos para almacenar la información?",
        "opciones": [
          "Organización Secuencial.",
          "Organización Directa.",
          "Organización Aleatoria.",
          "Organización Indexada."
        ],
        "correcta": "D"
      },
      {
        "pregunta": "El flujo predeterminado para la salida es:",
        "opciones": [
          "El teclado.",
          "La pantalla.",
          "La pantalla, pero con las letras rojas.",
          "Un fichero."
        ],
        "correcta": "B"
      },
      {
        "pregunta": "El conjunto de información que puede ser escrito o leído de una sola vez se corresponde con",
        "opciones": [
          "Registros lógico.",
          "Registro físico. ",
          "Dirección lógica",
          "Factor de bloque"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "El flujo predeterminado para la entrada es:",
        "opciones": [
          "El teclado.",
          "La pantalla.",
          "La pantalla, pero con las letras rojas.",
          "Un fichero."
        ],
        "correcta": "A"
      },
      {
        "pregunta": "De acuerdo al tipo de organización, que tipo de fichero no existe",
        "opciones": [
          "Secuencial",
          "Por bloques",
          "Aleatorio",
          "Secuencial indexado"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "La ruta relativa:",
        "opciones": [
          "Indica la posición de un fichero desde la posición actual.",
          "Indica la posición de un fichero desde la raíz.",
          "Indica la posición de un fichero desde la posición actual en Windows y desde la raíz en GNU/Linux.",
          "Indica la posición de un fichero desde la posición actual en GNU/Linux y desde la raíz en Windows."
        ],
        "correcta": "A"
      },
      {
        "pregunta": "¿Qué tipo de rutas existen?",
        "opciones": [
          "Ruta absoluta.",
          "Ruta relativa.",
          "Ruta intermedia. ",
          "Absoluta y relativa "
        ],
        "correcta": "D"
      }
    ],
    "Tema 13": [
      {
        "pregunta": "Para borrar un directorio:",
        "opciones": [
          "Lo podemos hacer con el método delete().",
          "Los podemos hacer con el método delete() pero cuando esté vacío.",
          "En Java no se pueden tratar los directorios, solo los ficheros.",
          "En Java no se pueden eliminar directorios, solo podremos crearlos."
        ],
        "correcta": "B"
      },
      {
        "pregunta": "¿Qué excepción provoca una división entre cero?",
        "opciones": [
          "IndexOfBoundsException.",
          "Exception.",
          "ArithmeticException. ",
          "NullPointerException."
        ],
        "correcta": "C"
      },
      {
        "pregunta": "¿Cuántas excepciones se pueden propagar en un método?",
        "opciones": [
          "Todas las que necesitemos, separadas mediante comas.",
          "Solo una, las demás habrá que tratarlas con un bloque try-catch.",
          "Los métodos no pueden propagar excepciones.",
          "Solo pueden propagar excepciones las funciones, mientras que los procedimientos no."
        ],
        "correcta": "A"
      },
      {
        "pregunta": "¿Cuántos bloques finally puede haber en un bloque try-catch?",
        "opciones": [
          "1",
          "2",
          "3",
          "Todos los que necesitemos, uno por excepción controlada."
        ],
        "correcta": "A"
      },
      {
        "pregunta": "Para crear una excepción propia deberemos:",
        "opciones": [
          "Crear una nueva clase y hacer que implemente Exception.",
          "Crear una nueva clase y hacer que herede de Exception, sin importar su nombre.",
          "Crear una nueva clase y hacer que herede de Exception, siendo recomendable que su nombre termine en Exception.",
          "En Java no podemos crear excepciones propias, sino que debemos trabajar con las que nos propone el propio lenguaje."
        ],
        "correcta": "C"
      },
      {
        "pregunta": "¿Qué excepción provoca un array cuando intentamos acceder a una posición no válida?",
        "opciones": [
          "IndexOfBoundsException. ",
          "Exception.",
          "ArithmeticException.",
          "NullPointerException."
        ],
        "correcta": "A"
      },
      {
        "pregunta": "¿Qué excepción provoca que cuando tengamos que leer un dato entero introduzcamos una cadena?",
        "opciones": [
          "NullPointerException.",
          "InputMismatchException.",
          "DatoMalIntroducidoException.",
          "ArithmeticException."
        ],
        "correcta": "B"
      },
      {
        "pregunta": "Los errores en tiempo de ejecución:",
        "opciones": [
          "Son los errores que tendremos cuando se ejecuta el programa y, por ejemplo, intentamos obtener un elemento de una posición no válida de un array.",
          "Son los errores que tendremos que cuando escribimos el código, avisándonos de ello el propio compilador.",
          "En Java no hay distinción de errores.",
          "Tanto a como b son ciertas."
        ],
        "correcta": "A"
      },
      {
        "pregunta": "Si queremos abrir un fichero en modo lectura y no tenemos permiso, ¿qué excepción se lanzará?",
        "opciones": [
          "Exception.",
          "IOException.",
          "FileNotFoundException.",
          "NullPointerException."
        ],
        "correcta": "B"
      },
      {
        "pregunta": "¿Cuál de las siguientes excepciones utilizaremos en el tratamiento de ficheros? ",
        "opciones": [
          "NullPointerException.",
          "FileNotFoundException.",
          "IndexOfBoundException.",
          "FileException. "
        ],
        "correcta": "B"
      }
    ],
    "Tema 14": [
      {
        "pregunta": "¿Cuándo se ejecutará el bloque finally?",
        "opciones": [
          "Después de que se ejecute el bloque try.",
          "Después de que se ejecute el catch.",
          "Después de que se ejecuten los bloques try y catch.",
          "Habrá que llamarlo expresamente."
        ],
        "correcta": "C"
      },
      {
        "pregunta": "La clase BufferedReader la podemos utilizar en:",
        "opciones": [
          "Solo en la lectura de ficheros de texto.",
          "Solo en la lectura de ficheros binarios.",
          "Tanto en la lectura de ficheros de texto como en la lectura de ficheros binarios. ",
          "Tanto en la escritura de ficheros de texto como en la escritura de ficheros binarios."
        ],
        "correcta": "A"
      },
      {
        "pregunta": "Si queremos serializar objetos:",
        "opciones": [
          "No hace falta hacer nada especial.",
          "Deberemos implementar la interfaz Serializable en las clases que queramos serializar sus objetos.",
          "La clase File ya dispone de un método writeObject que lo hace automático.",
          "No se pueden escribir objetos, se tienen que escribir uno a uno todos sus atributos."
        ],
        "correcta": "B"
      },
      {
        "pregunta": "Para la escritura de objetos se necesitan las siguientes clases",
        "opciones": [
          "FileOutputStream y ObjectOutputStream",
          "FileInputStream y ObjectInputStream",
          "ObjectInputStream",
          "ObjectOutputStream"
        ],
        "correcta": "A"
      },
      {
        "pregunta": "La API JAXB se utiliza con ficheros",
        "opciones": [
          "XSD",
          "DTD",
          "JSON",
          "XML"
        ],
        "correcta": "D"
      },
      {
        "pregunta": "Para identificar la versión del programa se emplea",
        "opciones": [
          "El atributo serialVersionUID",
          "El nombre del programa",
          "El fichero .class del programa",
          "El nombre del fichero "
        ],
        "correcta": "A"
      },
      {
        "pregunta": "Para indicar que un atributo no se serialice, empleamos el modificador.",
        "opciones": [
          "private",
          "transient",
          "uid",
          "protected"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "Cuando escribimos en un fichero:",
        "opciones": [
          "Se sobrescribirá la información.",
          "Podremos escribir la final solo si es binario.",
          "Podremos escribir al final sea de texto o binario.",
          "Podremos escribir al final solo es de texto."
        ],
        "correcta": "C"
      },
      {
        "pregunta": "Los pasos para operar con ficheros son:",
        "opciones": [
          "Abrir, operar y cerrar.",
          "Abrir, comprobar que se ha abierto correctamente, operar y cerrar.",
          "Operar y cerrar.",
          "Abrir y cerrar."
        ],
        "correcta": "B"
      },
      {
        "pregunta": "Para la lectura de objetos serializados se necesita _______",
        "opciones": [
          "ObjectInputStream",
          "FileOutputStream y ObjectOutputStream",
          "FileInputStream y ObjectInputStream",
          "ObjectOutputStream "
        ],
        "correcta": "C"
      }
    ],
    "Tema 15": [
      {
        "pregunta": "El ciclo de vida del software ________",
        "opciones": [
          "Termina una vez que sacamos el producto a producción",
          "Termina cuando se decide retirar el producto",
          "Es inexistente",
          "Siempre se mueve hacia delante, nunca vuelve a fases anteriores"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "La fase de planificación ________",
        "opciones": [
          "Es opcional",
          "Solo se incorpora en ciclos de vidas extendidos",
          "Debe ser de las primeras fases a considerar ",
          "Es poco relevante, no afecta al producto"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "El despliegue de un sistema ________",
        "opciones": [
          "Tiene en cuenta el desarrollo",
          "Se centra en realizar pruebas",
          "Se centra en el proceso de instalación",
          "Considera la fase de análisis"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "La depuración ________",
        "opciones": [
          "Permite observar detalles de la planificación",
          "Siempre se realiza con trazas",
          "Puede requerir la utilización de software dedicado",
          "Es poco útil en la actualidad"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "¿Cuál es la principal función de un depurador?",
        "opciones": [
          "Optimizar el rendimiento del código automáticamente.",
          "Permitir la ejecución paso a paso y la inspección de variables.",
          "Compilar el código fuente a lenguaje máquina.",
          "Generar documentación técnica del programa."
        ],
        "correcta": "B"
      },
      {
        "pregunta": "La fuera bruta ________",
        "opciones": [
          "Es una técnica muy costosa",
          "Es una técnica muy eficiente",
          "Nunca se aplica en la actualidad",
          "Solo se utiliza en el campo de pruebas de software "
        ],
        "correcta": "A"
      },
      {
        "pregunta": "Las pruebas de caja blanca ________",
        "opciones": [
          "Son poco útiles en la actualidad",
          "Son poco costosas",
          "Se utilizan de forma aislada",
          "Requieren que el programador conozca el código fuente"
        ],
        "correcta": "D"
      },
      {
        "pregunta": "Las pruebas de caja negra ________",
        "opciones": [
          "Están muy limitadas",
          "No tienen sentido en la actualidad",
          "Son más efectivas si el programador no conoce el código",
          "Solo valen para pruebas internas"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "La utilización de pruebas ________",
        "opciones": [
          "Permite guiar el proceso de desarrollo",
          "Es poco útil para el proceso de desarrollo",
          "Puede introducir errores en el código",
          "Ninguna de las anteriores es correcta"
        ],
        "correcta": "A"
      },
      {
        "pregunta": "La calidad del software________",
        "opciones": [
          "Es independiente del proceso de pruebas",
          "Es poco relevante para el usuario",
          "Puede mejorar con la utilización de pruebas",
          "Carece de importancia en cualquier metodología de desarrollo "
        ],
        "correcta": "C"
      }
    ],
    "Tema 16": [
      {
        "pregunta": "¿Cuál de las siguientes colecciones no admite elementos repetidos?",
        "opciones": [
          "ArrayList.",
          "HashLinkedMap.",
          "LinkedList.",
          "TreeSet."
        ],
        "correcta": "D"
      },
      {
        "pregunta": "Los métodos de la interfaz Set",
        "opciones": [
          "Son los mismos que los de List",
          "Son los mismos que los de Collection",
          "Son implementados en la clase ArrayList",
          "Esta interfaz no tiene métodos"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "Si en un TreeSet insertamos los siguientes valores: 2, 0, 7, 6, ¿cómo aparecerán al mostrarlo por pantalla?",
        "opciones": [
          "2, 0, 7, 6",
          "0, 2, 7, 6",
          "0, 2, 6, 7",
          "7, 6, 2, 0"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "¿Cuál de las siguientes definiciones no es correcta?",
        "opciones": [
          "ArrayList<String> array = new ArrayList<>();",
          "ArrayList<Boolean> array = new ArrayList<>();",
          "ArrayList<ArrayList<Integer>> array = new ArrayList<>();",
          "ArrayList<int> array = new ArrayList<>();"
        ],
        "correcta": "D"
      },
      {
        "pregunta": "¿Cuándo podemos invocar al método remove de los iteradores?",
        "opciones": [
          "En cualquier momento.",
          "Después de usar next().",
          "Después de usar hasNext().",
          "Es mejor eliminar los elementos de las colecciones mediante el método delete, ya que es más seguro."
        ],
        "correcta": "B"
      },
      {
        "pregunta": "Los tipos genéricos sirven para",
        "opciones": [
          "Usar objetos de la clase Object",
          "Usar variables primitivas",
          "Usar tipos parametrizados",
          "No tener que usar ningún tipo"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "El bucle for-each:",
        "opciones": [
          "Nos permite recorrer una colección de forma segura y sencilla.",
          "Este tipo de bucle no existe en Java, sino que es propio de Python.",
          "Es un bucle for encubierto.",
          "Solo se puede utilizar en colecciones que tengan almacenados datos de tipo String."
        ],
        "correcta": "A"
      },
      {
        "pregunta": "¿Cuántos tipos genéricos puede tener una clase genérica en su declaración?",
        "opciones": [
          "Todos los que haga falta.",
          "El máximo que se pueden usar en una clase son 3.",
          "El máximo que se pueden usar en una clase son 2.",
          "El máximo que se pueden usar en una clase es 1."
        ],
        "correcta": "A"
      },
      {
        "pregunta": "ArrayList y LinkedList se diferencian:",
        "opciones": [
          "En el número de elementos",
          "En el rendimiento",
          "En el orden de los elementos",
          "En nada"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "¿Qué tipo de dato no se puede usar con los genéricos?",
        "opciones": [
          "String.",
          "Double.",
          "char.",
          "Persona."
        ],
        "correcta": "C"
      }
    ],
    "Tema 17": [
      {
        "pregunta": "¿Cómo distribuye los elementos el GridLayout?",
        "opciones": [
          "Los ordena en 5 partes, norte, sur, este y oeste.",
          "Los alinea en el centro del panel.",
          "Los maqueta en forma de matriz.",
          "No existe el layout FlowLayout."
        ],
        "correcta": "C"
      },
      {
        "pregunta": "¿Qué biblioteca utilizamos en Java para la creación de la interfaz gráfica?",
        "opciones": [
          "SDL",
          "WxPython ",
          "AWT",
          "Swing"
        ],
        "correcta": "D"
      },
      {
        "pregunta": "Las ventanas son objetos de la clase:",
        "opciones": [
          "JFrame",
          "JLabel",
          "JWindow",
          "Frame"
        ],
        "correcta": "A"
      },
      {
        "pregunta": "¿Cuál de los siguientes no es un Layout?",
        "opciones": [
          "BorderLayout",
          "StaticLayout",
          "FlowLayout",
          "GridLayout"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "¿Cómo se le puede agregar el evento actionPerformed a un JButton?",
        "opciones": [
          "Solo haciendo doble click sobre el botón.",
          "Solo desde el panel de eventos del botón.",
          "Solo pulsando botón derecho sobre el botón y seleccionando el evento.",
          "O bien haciendo doble click sobre el botón o desde el panel de eventos."
        ],
        "correcta": "D"
      },
      {
        "pregunta": "¿Cómo distribuye los elementos el FlowLayout?",
        "opciones": [
          "Los ordena en 5 partes, norte, sur, este y oeste.",
          "Los alinea en el centro del panel.",
          "Los maqueta en forma de matriz. ",
          "No existe el layout FlowLayout."
        ],
        "correcta": "B"
      },
      {
        "pregunta": "¿Qué evento se lanzará cuando pulsemos sobre un menú?",
        "opciones": [
          "clickedMenu.",
          "actionPerformed.",
          "menuPerformed.",
          "singleClickMenu."
        ],
        "correcta": "B"
      },
      {
        "pregunta": "¿Qué clase se utiliza para crear las ventanas de diálogo predefinidas?",
        "opciones": [
          "JOptionPane.",
          "JFrame.",
          "JPanel.",
          "JPredefined."
        ],
        "correcta": "A"
      },
      {
        "pregunta": "La clase JMenuItem:",
        "opciones": [
          "Esta clase representa un menú concreto.",
          "Esta clase representa un ítem de un menú, al que le podremos dar funcionalidad.",
          "Esta clase representa un ítem de un menú, pero mostrará un radiobutton en él.",
          "Esta clase representa un ítem de un menú, pero mostrará un checkbox en él."
        ],
        "correcta": "B"
      },
      {
        "pregunta": "La clase JRadioButtonMenuItem:",
        "opciones": [
          "Esta clase representa un menú concreto.",
          "Esta clase representa un ítem de un menú, al que le podremos dar funcionalidad.",
          "Es un ítem de menú que actúa como un botón de radio (radio button).",
          "Esta clase representa un ítem de un menú, pero mostrará un checkbox en él.  "
        ],
        "correcta": "C"
      }
    ],
    "Tema 18": [
      {
        "pregunta": "La clase Statement:",
        "opciones": [
          "Es la clase que nos permitirá instanciar objetos donde se almacenará nuestra conexión.",
          "Es la clase que nos permitirá instanciar objetos que utilizaremos para realizar las consultas SQL.",
          "Es la clase que nos permitirá instanciar objetos que nos devolverán los resultados de las consultas SQL.",
          "Es la excepción propia de SQL."
        ],
        "correcta": "B"
      },
      {
        "pregunta": "La excepción que se lanza cuando se ejecuta una consulta INSERT es:",
        "opciones": [
          "SQLException.",
          "InsertException.",
          "NotInsertedException. ",
          "Exception."
        ],
        "correcta": "A"
      },
      {
        "pregunta": "El método executeQuery devuelve:",
        "opciones": [
          "La cantidad de filas que han sido afectadas por la consulta ejecutada.",
          "Verdadero o falso, según se haya ejecutado correctamente o no.",
          "No devuelve nada, sabremos que no se ha ejecutado bien si se lanza una excepción.",
          "Devuelve un ResultSet con los datos devueltos por la consulta ejecutada."
        ],
        "correcta": "D"
      },
      {
        "pregunta": "¿Cuántas claves primarias puede tener cada fila en una tabla?",
        "opciones": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correcta": "A"
      },
      {
        "pregunta": "¿Cuál de las siguientes sentencias INSERT no es correcta?",
        "opciones": [
          "INSERT INTO persona (DNI, nombre, apellidos) VALUES (‘147A', ‘Pepe’, ‘López’)",
          "INSERT INTO persona (DNI, nombre, apellidos) VALUES (‘147A', ‘Pepe’, ‘Lopez’)",
          "INSERT INTO persona (DNI, nombre, apellidos) VALUES (‘147A', ‘López’, ‘Pepe’)",
          "INSERT INTO persona (DNI, nombre, apellidos) VALUES (147A, ‘Pepe’, ‘López’)"
        ],
        "correcta": "D"
      },
      {
        "pregunta": "La clase SQLException:",
        "opciones": [
          "Es la clase que nos permitirá instanciar objetos donde se almacenará nuestra conexión.",
          "Es la clase que nos permitirá instanciar objetos que utilizaremos para realizar las consultas SQL.",
          "Es la clase que nos permitirá instanciar objetos que nos devolverán los resultados de las consultas SQL.",
          "Es la excepción propia de SQL. "
        ],
        "correcta": "D"
      },
      {
        "pregunta": "La clase ResultSet:",
        "opciones": [
          "Es la clase que nos permitirá instanciar objetos donde se almacenará nuestra conexión.",
          "Es la clase que nos permitirá instanciar objetos que utilizaremos para realizar las consultas SQL.",
          "Es la clase que nos permitirá instanciar objetos que nos devolverán los resultados de las consultas SQL.",
          "Es la excepción propia de SQL."
        ],
        "correcta": "C"
      },
      {
        "pregunta": "¿En qué punto hay que cerrar la conexión a la base de datos?",
        "opciones": [
          "Dentro del bloque try.",
          "Dentro del bloque catch.",
          "Fuera del bloque try catch.",
          "Dentro del bloque finally."
        ],
        "correcta": "D"
      },
      {
        "pregunta": "¿Qué instrucción no ejecuta el método executeUpdate?",
        "opciones": [
          "SELECT",
          "INSERT INTO",
          "DELETE",
          "UPDATE"
        ],
        "correcta": "A"
      },
      {
        "pregunta": "¿Qué ocurre si no ponemos el WHERE en la instrucción DELETE FROM?",
        "opciones": [
          "Lanza una SQLException ya que está mal la sintaxis.",
          "Borra todos los elementos de la tabla.",
          "Borra la tabla.",
          "Se ejecuta, pero no tiene efecto. "
        ],
        "correcta": "B"
      }
    ],
    "Tema 19": [
      {
        "pregunta": "El Modelo Vista-Controlador:",
        "opciones": [
          "Es un patrón que se usaba al inicio del desarrollo de software, pero ya no se usa porque está anticuado.",
          "Es un patrón que divide nuestro proyecto en tres partes y que es ampliamente usado hoy en día.",
          "Es un patrón de diseño de software pero solo en ámbitos web, no pudiendo utilizarlo para crear programas de escritorio o apps móviles.",
          "Es un patrón de diseño de software pero solo en ámbito de programas de escritorio o apps móviles, no pudiendo utilizarlo en ámbitos web."
        ],
        "correcta": "B"
      },
      {
        "pregunta": "¿Cuál es una práctica recomendada para mitigar la inyección SQL en Java? ",
        "opciones": [
          "Utilizar consultas SQL dinámicas concatenando cadenas de texto con datos proporcionados por el usuario.",
          "Permitir cualquier tipo de dato proporcionado por el usuario sin validación.",
          "Utilizar consultas parametrizadas o preparadas con PreparedStatement.",
          "Ignorar la longitud y los caracteres especiales en los datos de entrada del usuario."
        ],
        "correcta": "C"
      },
      {
        "pregunta": "¿Qué método se utiliza para verificar si el cursor está colocado justo delante de la primera fila en un ResultSet?",
        "opciones": [
          "isFirst()",
          "isBeforeFirst()",
          "isLast()",
          "isAfterLast()"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "¿Qué interfaz en Java se utiliza para implementar las sentencias parametrizadas?",
        "opciones": [
          "Statement",
          "CallableStatement",
          "PreparedStatement",
          "ResultSet"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "¿En qué punto hay que cerrar la conexión a la base de datos orientada a objetos cuando tenemos tipos de datos estructurados?",
        "opciones": [
          "Dentro del bloque try.",
          "Dentro del bloque catch.",
          "Fuera del bloque try catch.",
          "Dentro del bloque finally."
        ],
        "correcta": "D"
      },
      {
        "pregunta": " ¿Cuál de las siguientes vulnerabilidades es una de las más comunes en las aplicaciones que interactúan con bases de datos?",
        "opciones": [
          "Cross-Site Scripting (XSS)",
          "Inyección SQL",
          "Fuga de memoria",
          "Ataque de intermediario (Man-in-the-Middle)"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "¿Qué es una inyección SQL?",
        "opciones": [
          "Una técnica para mejorar el rendimiento de las consultas SQL.",
          "Una vulnerabilidad de seguridad que permite a los atacantes ejecutar comandos SQL no autorizados.",
          "Un método para encriptar datos en una base de datos.",
          "Una forma de hacer que las consultas SQL sean más eficientes."
        ],
        "correcta": "B"
      },
      {
        "pregunta": "¿Cuál es el papel principal del controlador en el patrón MVC?",
        "opciones": [
          "Presentar los datos al usuario.",
          "Almacenar y manipular los datos.",
          "Actuar como intermediario entre el modelo y la vista.",
          "Diseñar la interfaz de usuario."
        ],
        "correcta": "C"
      },
      {
        "pregunta": "¿Cuál de los siguientes componentes del patrón MVC se encarga de representar la lógica de negocio y los datos de la aplicación?",
        "opciones": [
          "Modelo",
          "Vista",
          "Controlador",
          "ActionListener"
        ],
        "correcta": "A"
      },
      {
        "pregunta": " ¿Cuál de los siguientes métodos se utiliza para mover el cursor al siguiente registro en un ResultSet?",
        "opciones": [
          "first()",
          "next()",
          "previous()",
          "absolute(int row) "
        ],
        "correcta": "B"
      }
    ],
    "Tema 20": [
      {
        "pregunta": "¿Qué técnica de persistencia introduce métodos como save(), read() y update(), pero puede romper la abstracción al mezclar la lógica de negocio con la de acceso a datos?",
        "opciones": [
          "Persistencia nativa",
          "DAO",
          "Framework de persistencia: JPA",
          "Hibernate"
        ],
        "correcta": "A"
      },
      {
        "pregunta": "¿Qué patrón se encarga de separar la lógica de negocio de la lógica de acceso a los datos, proporcionando una interfaz entre ellas y facilitando el mantenimiento del código? ",
        "opciones": [
          "Persistencia nativa",
          "DAO",
          "JPA",
          "Spring Data"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "¿Qué enfoque de persistencia está diseñado para manejar los objetos Java de manera más natural, utilizando una especificación que unifica diferentes implementaciones?",
        "opciones": [
          "Persistencia nativa",
          "DAO",
          "JPA",
          "Spring Framework"
        ],
        "correcta": "C"
      },
      {
        "pregunta": "¿Qué requisito debe cumplir una clase Java para poder ser convertida en una entidad JPA?",
        "opciones": [
          "Tener dependencias externas para su funcionamiento",
          "Implementar la interfaz Serializable",
          "Tener métodos getter y setter para todos sus atributos",
          "Tener un constructor vacío (sin argumentos)"
        ],
        "correcta": "A"
      },
      {
        "pregunta": "¿Cuál de las siguientes anotaciones se utiliza para indicar que una clase Java es una entidad que puede ser almacenada en la base de datos con JPA?",
        "opciones": [
          "@Entity",
          "@Table",
          "@Persistent",
          "@PersistentEntity"
        ],
        "correcta": "A"
      },
      {
        "pregunta": " ¿Qué anotación se utiliza para marcar un atributo como la clave primaria de una entidad en JPA?",
        "opciones": [
          "@PrimaryKey",
          "@Id",
          "@Key",
          "@Primary"
        ],
        "correcta": "B"
      },
      {
        "pregunta": "¿Cómo se obtiene una instancia de EntityManager en JPA?",
        "opciones": [
          "Utilizando el método getInstance() de EntityManagerFactory.",
          "Utilizando el operador new para crear una nueva instancia.",
          "A partir del método createEntityManager() de EntityManagerFactory.",
          "Directamente mediante la anotación @PersistenceContext."
        ],
        "correcta": "C"
      },
      {
        "pregunta": "¿Cuál es la relación entre EntityManagerFactory y EntityManager en JPA?",
        "opciones": [
          "EntityManagerFactory crea y mantiene instancias de EntityManager, que realizan operaciones de persistencia.",
          "EntityManagerFactory define las relaciones entre las entidades, mientras que EntityManager realiza las consultas SQL.",
          "EntityManagerFactory y EntityManager son intercambiables y pueden utilizarse indistintamente en una aplicación JPA.",
          "EntityManager crea y configura instancias de EntityManagerFactory para cada operación de persistencia."
        ],
        "correcta": "A"
      },
      {
        "pregunta": "¿Cuál de las siguientes afirmaciones describe mejor JPQL (Java Persistence Query Language)?",
        "opciones": [
          "JPQL opera directamente sobre tablas y columnas de la base de datos.",
          "JPQL permite realizar consultas utilizando entidades y atributos de objetos Java.",
          "JPQL es exclusivo para bases de datos NoSQL.",
          "JPQL es específico de un proveedor y no es portable entre diferentes bases de datos. "
        ],
        "correcta": "B"
      },
      {
        "pregunta": "¿Qué método se utiliza para obtener múltiples resultados de una consulta JPQL en JPA?",
        "opciones": [
          "getResult()",
          "getSingleResult()",
          "getResultList()",
          "executeQuery() "
        ],
        "correcta": "C"
      }
    ]
  }
};
