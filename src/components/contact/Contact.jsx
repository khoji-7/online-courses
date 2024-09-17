import React from 'react'
import Back from '../common/back/Back'
import  "./contac.css";


const Contact = () => {
  const map = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11983.246458334785!2d69.2779119153686!3d41.33470964531772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1726589195156!5m2!1suz!2s"
  return (
    <>
        <Back title="Contac us"/> 
        <section className='contact padding'>
            <div className='container shadow flwxSB'>
                <div className='left row'>
                  <iframe src={map} frameborder="0"></iframe>
                </div>
                <div className='right row'>
                    <h1>
                      Contact Us
                    </h1>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    </p>
                    <div className='items grid2'>
                        <div className='box'>
                            <h4>
                              ADDRESS:
                            </h4>
                            <p>
                             Amir Temur shoh ko'chasi 108 Toshkent
                            </p>
                        </div>
                        <div className='box'>
                            <h4>
                              EMAIL:
                            </h4>
                            <p>
                             nematxonovh@gmail.com
                            </p>
                        </div>
                        <div className='box'>
                            <h4>
                              PHONE:
                            </h4>
                            <p>
                              +998 94 899 99 49 
                            </p>
                        </div>
                    </div> 
                    <form action="">
                          <div className='flexSB'>
                              <input type="text" placeholder='Name' required/>
                              <input type="email" placeholder='Email' required />
                          </div>
                          <input type="text" placeholder='Email' required/>
                          <textarea  cols="30" rows="10" className='text-area'>
                            Create a message here...
                          </textarea>
                          <button className='primary-btn'>
                            Send Message
                          </button>
                        </form>
                    <h3>
                          FOLLOW US 
                        </h3>
                        <span>
                          Facebook Instagram Twitter Telegram Dribble
                        </span>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact
