import japon4 from '../assets/img/japon4.jpg';
import PropTypes from 'prop-types';

export const Japon4 = ( { className } ) => {
  return (
    <img src={japon4} alt="Paisaje de japon 4" className={className} />
  )
}

Japon4.propTypes = {
  className: PropTypes.string
}