// ** Icons Import
import { Heart } from 'react-feather'

const Footer = () => {
  return (
    <p className='clearfix mb-0'>
      <span className='float-md-start d-block d-md-inline-block mt-25'>
        <a
          href='https://samueltetteh.netlify.app/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Lynx
        </a>{' '}
        © {new Date().getFullYear()}{' '}
        <span className='d-none d-sm-inline-block'>, All rights Reserved</span>
      </span>
      <span className='float-md-end d-none d-md-block'>
        Hand-crafted & Made with
        <Heart size={14} />
      </span>
    </p>
  )
}

export default Footer
