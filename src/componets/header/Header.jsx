import header from './header.module.css'

function Header() {
    return (
        <div>
            <div className={header.bg}>
                <header className={header.container}>
                    <img src="Logo.png" alt="aas" />
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">About Us</a></li>
                            <button className={header.btn}>Login</button>
                            <button className={header.btn2}>Sign Up</button>
                        </ul>
                    </nav>
                </header>

                <div className={header.container}>
                    <section className={header.texts}>

                        <div className={header.text}>
                            <h1><span className={header.hh}>Studying</span> Online is now much easier</h1>
                            <p>
                                Skilline is an interesting platform that will teach <br />
                                you in more an interactive way
                            </p>
                            <div className={header.dis}>
                                <button className={header.btn2}>Join for free</button>
                                <div className={header.yum}>
                                    <i class="fa-solid fa-play"></i>
                                </div>
                                <p>Watch how it works</p>
                            </div>
                        </div>
                        <img src="header.png" alt="as" />
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Header
