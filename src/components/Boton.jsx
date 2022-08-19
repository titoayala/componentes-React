import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

const Boton = ({ nombre, clave }) => {
    const [error, setError] = useState(false);

    if (clave !== "252525") return null;
    const validarDatos = (e) => {
        e.preventDefault()
        if (nombre === '' || clave === '') {
            setError(true);
            return
        }
    }

    return (
        <Button variant="primary" type="submit" onSubmit={validarDatos}>
            {error ? <p>Todos los campos son obligatorios</p> : null}
            Enviar
        </Button>
    );
}

export default Boton;
