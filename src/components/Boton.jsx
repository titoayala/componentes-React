import Button from 'react-bootstrap/Button';

const Boton = ({ clave }) => {

    if (clave !== "252525") return null;

    return (
        <Button variant="primary" type="submit">
            Enviar
        </Button>
    );
}

export default Boton;
