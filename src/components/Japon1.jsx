import japon1 from '../assets/img/japon1.avif';
import PropTypes from 'prop-types';

export const Japon1 = ( { className } ) => {
  return (
    <img src={japon1} alt="Paisaje de japon 1" className={className} />
  )
}

Japon1.propTypes = {
  className: PropTypes.string
}