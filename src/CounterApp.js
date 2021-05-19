import React, {useState} from 'react';
import propTypes from 'prop-types';

const CounterApp = ( { value = 10 } ) => {

    // Hooks
    const [ counter, setCounter ] = useState( value ); // []


    // HandleAdd
    const handleAdd = () => setCounter( (c) => c + 1  );

    // HandleLess
    const handleLess = () => setCounter( counter > 0 ? counter - 1 : 0);
    

    const handleRst = () => setCounter( value );


    return (  <>
                <h1>Counter App</h1>
                <h2> { counter } </h2>

                <button onClick={ handleAdd } >+1</button>
                <button onClick={ handleRst } >Reset</button>
                <button onClick={ handleLess } >-1</button>
              </>
    );


}

CounterApp.propTypes = {
    value: propTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 0,
}

export default CounterApp;