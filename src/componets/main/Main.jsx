import main from './main.module.css'

function Main() {
  return (
    <div>
      <div className={main.container}>

        <div className={main.rasm}>
          <h2>Trusted by 5,000+ Companies Worldwide</h2>
          <img src="Logos.png" alt="" />
        </div>
        <div className={main.text}>
          <h1>What <span className={main.o}>is Skilline?</span></h1>
          <p>
            Skilline is a platform that allows educators to create online classes whereby they can <br /> store the course materials online; manage assignments, quizzes and exams; <br /> monitor due dates; grade results and provide students with feedback all in one place.
          </p>

        </div>
        <div className={main.cards}>
          <div className={main.box}>
            <img src="box.png" alt="eqw" />
            <h1>FOR INSTRUCTORS</h1>
            <button className={main.btn3}>Start a class today</button>
          </div>
          <div className={main.box}>
            <img src="box2.png" alt="eqw" />
            <h1>FOR INSTRUCTORS</h1>
            <button className={main.btn3}>Start a class today</button>
          </div>
        </div>
        <div className={main.texts}>
          <div className={main.text2}>
            <h1>Everything you can do in a physical<br />
              classroom, <span className={main.o}>you can do with Skilline</span></h1>
            <p>
              Skilline’s school management software helps traditional <br />x and online schools manage scheduling, attendance, <br /> payments and virtual classrooms all in one secure <br /> cloud-based system.
            </p>
          </div>
          <img src="text.png" alt="" />
        </div>
        <div className={main.text}>
          <h1>Our <span className={main.o}>Features</span></h1>
          <p>
            This very extraordinary feature, can make learning activities more efficient
          </p>

        </div>
        <div className={main.texts}>
          <div className={main.text2}>
            <h1><span className={main.o}>Tools</span>For Teachers <br />
              And Learners</h1>
            <p>
              Skilline’s school management software helps traditional <br />x and online schools manage scheduling, attendance, <br /> payments and virtual classrooms all in one secure <br /> cloud-based system.
            </p>
          </div>
          <img src="text2.png" alt="" />
        </div>
        <div className={main.texts2}>
          <img src="text3.png" alt="" />
          <div className={main.text2}>
            <h1>Assessments, <br />
              <span className={main.o}>Quizzes,</span> Tests</h1>
            <p>
              Skilline’s school management software helps traditional <br />x and online schools manage scheduling, attendance, <br /> payments and virtual classrooms all in one secure <br /> cloud-based system.
            </p>
          </div>
        </div>
        <div className={main.texts3}>
          <div className={main.text2}>
            <h1><span className={main.o}>Class Management</span><br />
              Tools for Educators</h1>
            <p>
              Skilline’s school management software helps traditional <br />x and online schools manage scheduling, attendance, <br /> payments and virtual classrooms all in one secure <br /> cloud-based system.
            </p>
          </div>
          <img src="text4.png" alt="" />
        </div>
        <div className={main.texts3}>
          <img src="text5.png" alt="" />
          <div className={main.text2}>
            <h1>One-on-One <span className={main.o}> <br /> Discussions</span></h1>
            <p>
              Skilline’s school management software helps traditional <br />x and online schools manage scheduling, attendance, <br /> payments and virtual classrooms all in one secure <br /> cloud-based system.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
