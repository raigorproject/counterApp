// FC
import propTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitulo }) => {
    

    return (
            <>
                <h1> { saludo } </h1>
                <p> { subtitulo } </p>
            </>
    );

}

PrimeraApp.propTypes = {
    saludo: propTypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: "Soy un subtitulo",
    saludo: "Soy Iron Man"
}

export default PrimeraApp;