
document.addEventListener('DOMContentLoaded', function () {
// Conexión MQTT utilizando WebSocket seguro (wss://)

const client = mqtt.connect('wss://n1781645.ala.us-east-1.emqxsl.com:8084/mqtt', {
    username: 'cochabamba',  // Si necesitas un usuario para autenticarte
    password: 'bolivia',  // Si necesitas una contraseña
    rejectUnauthorized: false   // Evita errores de certificado (solo en entornos de prueba)
});

client.on('connect', function () {
    console.log('Conectado al broker MQTT');
});

client.on('error', function (err) {
    console.error('Error de conexión:', err);
});

client.on('message', function (topic, message) {
    console.log('Mensaje recibido:', topic, message.toString());
});

// Variables para guardar los estados de los LEDs
    let ledState1 = 'off';  // Estado inicial del LED 1
    let ledState2 = 'off';  // Estado inicial del LED 2
	let ledState3 = 'off';  // Estado inicial del LED 3
	let ledState4 = 'off';  // Estado inicial del LED 4

    // Función para alternar el estado del LED 1
    function toggleLED1() {
        const ledButton1 = document.getElementById('ledButton1');
        if (!ledButton1) {
            console.error("No se encontró el botón LED 1.");
            return;
        }

        if (ledState1 === 'off') {
            ledState1 = 'on';
            ledButton1.innerText = 'Apagar LED 1';
            client.publish('test/led1', 'on', { qos: 2, retain: true });
			ledButton1.style.backgroundColor = '#6ddb93'; // Color verde cuando se enciende el LED 1
        } else {
            ledState1 = 'off';
            ledButton1.innerText = 'Encender LED 1';
            client.publish('test/led1', 'off', { qos: 2, retain: true });
			ledButton1.style.backgroundColor = 'white'; // Restablecer a blanco cuando se apaga el LED
        }
    }

    // Función para alternar el estado del LED 2
    function toggleLED2() {
        const ledButton2 = document.getElementById('ledButton2');
        if (!ledButton2) {
            console.error("No se encontró el botón LED 2.");
            return;
        }

        if (ledState2 === 'off') {
            ledState2 = 'on';
            ledButton2.innerText = 'Apagar LED 2';
            client.publish('test/led2', 'on', { qos: 2, retain: true });
			ledButton2.style.backgroundColor = '#e3ed89'; // Color amarillo cuando se enciende el LED 2
        } else {
            ledState2 = 'off';
            ledButton2.innerText = 'Encender LED 2';
            client.publish('test/led2', 'off', { qos: 2, retain: true });
			ledButton2.style.backgroundColor = 'white'; // Restablecer a blanco cuando se apaga el LED
        }
    }
	
	// Función para alternar el estado del LED 3
    function toggleLED3() {
        const ledButton3 = document.getElementById('ledButton3');
        if (!ledButton3) {
            console.error("No se encontró el botón LED 3.");
            return;
        }

        if (ledState3 === 'off') {
            ledState3 = 'on';
            ledButton3.innerText = 'Apagar LED 3';
            client.publish('test/led3', 'on', { qos: 2, retain: true });
			ledButton3.style.backgroundColor = '#e46969'; // Color rojo cuando se enciende el LED 3
        } else {
            ledState3 = 'off';
            ledButton3.innerText = 'Encender LED 3';
            client.publish('test/led3', 'off', { qos: 2, retain: true });
			ledButton3.style.backgroundColor = 'white'; // Restablecer a blanco cuando se apaga el LED
        }
    }
	
	
	// Función para alternar el estado del LED 4
    function toggleLED4() {
        const ledButton4 = document.getElementById('ledButton4');
        if (!ledButton4) {
            console.error("No se encontró el botón LED 4.");
            return;
        }

        if (ledState4 === 'off') {
            ledState4 = 'on';
            ledButton4.innerText = 'Apagar LED 4';
            client.publish('test/led4', 'on', { qos: 2, retain: true });
			ledButton4.style.backgroundColor = '#69a8e4'; // Color azul cuando se enciende el LED 4
        } else {
            ledState4 = 'off';
            ledButton4.innerText = 'Encender LED 4';
            client.publish('test/led4', 'off', { qos: 2, retain: true });
			ledButton4.style.backgroundColor = 'white'; // Restablecer a blanco cuando se apaga el LED
        }
    }

    // Asociar las funciones toggleLED1 y toggleLED2 ,3 4 a los botones correspondientes
    const button1 = document.getElementById('ledButton1');
    if (button1) {
        button1.addEventListener('click', toggleLED1);
    } else {
        console.error("No se encontró el botón LED 1.");
    }

    const button2 = document.getElementById('ledButton2');
    if (button2) {
        button2.addEventListener('click', toggleLED2);
    } else {
        console.error("No se encontró el botón LED 2.");
    }
	
	const button3 = document.getElementById('ledButton3');
    if (button3) {
        button3.addEventListener('click', toggleLED3);
    } else {
        console.error("No se encontró el botón LED 3.");
    }
	
	const button4 = document.getElementById('ledButton4');
    if (button4) {
        button4.addEventListener('click', toggleLED4);
    } else {
        console.error("No se encontró el botón LED 4.");
    }
	
	
   
	
});
