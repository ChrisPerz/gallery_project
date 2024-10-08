import japon2 from '../assets/img/japon2.jpg';
import PropTypes from 'prop-types';

export const Japon2 = ( { className } ) => {
  return (
    <img src={japon2} alt="Paisaje de japon 2" className={className} />
  )
}

Japon2.propTypes = {
  className: PropTypes.string
}