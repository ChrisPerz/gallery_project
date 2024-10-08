import japon3 from '../assets/img/japon3.jpg';
import PropTypes from 'prop-types';

export const Japon3 = ( { className } ) => {
  return (
    <img src={japon3} alt="Paisaje de japon 3" className={className} />
  )
}

Japon3.propTypes = {
  className: PropTypes.string
}