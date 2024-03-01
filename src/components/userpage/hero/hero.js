import logo from "../../assets/image/logo.svg"
const Hero = () => {
  return (
    <div className='hero d-flex align-items-center justify-content-between'>
            <div>
              <p className='hero-text m-0'>Hi 👋,</p>
              <p className='hero-text m-0'>My name is</p>
              <p className='hero-text-gra m-0'>Ruslan AT</p>
              <p className='hero-text m-0'>I build things for web developer</p>
            </div>
            <div className='hero-img'>
              <div className='d-flex align-items-center justify-content-center'>
                <img width={200} height={200} src={logo} alt="" />
              </div>
            </div>
          </div>
  )
}
export default Hero