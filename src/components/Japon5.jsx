import japon5 from '../assets/img/japon5.jpeg';
import PropTypes from 'prop-types';

export const Japon5 = ( { className } ) => {
  return (
    <img src={japon5} alt="Paisaje de japon 5" className={className} />
  )
}

Japon5.propTypes = {
  className: PropTypes.string
}