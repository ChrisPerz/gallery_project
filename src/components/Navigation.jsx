import { Link } from 'react-router-dom';
import { Japon1 } from './Japon1';
import { Japon2 } from './Japon2';
import { Japon3 } from './Japon3';
import { Japon4 } from './Japon4';
import { Japon5 } from './Japon5';
import { Japon6 } from './Japon6';

export const Navigation = () => {
  return (
    <div className='container thumbnail-container mt-2'>
      <Link to='/japon1' className='links'>
        <figure className='thumbnail-image-size'>
          <Japon1 />
          <figcaption>Japon 1</figcaption>
        </figure>
      </Link>
      <Link to='/japon2' className='links'>
        <figure className='thumbnail-image-size'>
          <Japon2 />
          <figcaption>Japon 2</figcaption>
        </figure>
      </Link>
      <Link to='/japon3' className='links'>
        <figure className='thumbnail-image-size'>
          <Japon3 />
          <figcaption>Japon 3</figcaption>
        </figure>
      </Link>
      <Link to='/japon4' className='links'>
        <figure className='thumbnail-image-size'>
          <Japon4 />
          <figcaption>Japon 4</figcaption>
        </figure>
      </Link>
      <Link to='/japon5' className='links'>
        <figure className='thumbnail-image-size'>
          <Japon5 />
          <figcaption>Japon 5</figcaption>
        </figure>
      </Link>
      <Link to='/japon6' className='links'>
        <figure className='thumbnail-image-size'>
          <Japon6 />
          <figcaption>Japon 6</figcaption>
        </figure>
      </Link>
    </div>
  )
}
