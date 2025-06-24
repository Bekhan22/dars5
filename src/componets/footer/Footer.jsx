import footer from './footer.module.css'

function Footer() {
  return (
    <div>
      <footer>
        <div className={footer.container}>
          <div className={footer.logo}>
            <img src="Logo.png" alt="" />
            <h2>Virtual Class <br />
              for Zoom</h2>
          </div>
          <h2 className={footer.gr}>Subscribe to get our Newsletter</h2>
          <div className={footer.noma}>
            <input type="text" placeholder='Your Email' />
            <button className={footer.btn4}>Subscribe</button>
          </div>
          <div className={footer.hh}>
            <h2>Careers</h2>
            <h2>Privacy Policy</h2>
            <h2>Terms & Conditions</h2>
          </div>
          <h2 className={footer.yy}>© 2021 Class Technologies Inc. </h2>












        </div>
      </footer>
    </div>
  )
}

export default Footer
