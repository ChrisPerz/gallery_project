import japon6 from '../assets/img/japon6.jpg';
import PropTypes from 'prop-types';

export const Japon6 = ( { className } ) => {
  return (
    <img src={japon6} alt="Paisaje de japon 6" className={className} />
  )
}

Japon6.propTypes = {
  className: PropTypes.string
}