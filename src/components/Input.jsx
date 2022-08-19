import Form from 'react-bootstrap/Form';

const Datos = ({nombre, setNombre, clave, setClave}) => (
    <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre</Form.Label>
            <Form.Control value={nombre} type="text" placeholder="Ingrese su Nombre" onChange={(e) => setNombre(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control value={clave} type="password" placeholder="Ingrese su contraseña" onChange={(e) => setClave(e.target.value)} />
        </Form.Group>
    </Form>
)

export default Datos;
