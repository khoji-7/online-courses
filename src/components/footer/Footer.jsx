import React from 'react'
import "./footer.css"
import { blog } from '../../dummydata'

const Footer = () => {
  return (
    <>
        <section className='newletter'>
            <div className='container flexSB'>
                <div className='left row'>
                    <h1>
                        Newsletter - Stay tune and get the latest update
                    </h1>
                    <span>
                        far far away, behind the word mountain
                    </span>
                </div>
                <div className='right row'>
                    <input type="text" placeholder='Enter email address' />
                    <i className='fa fa-paper-plane'></i>
                </div>
            </div>
        </section>
        <footer>
            <div className='container padding'>
                <div className='box logo'>
                    <h1>
                        ACADEMIA
                    </h1>
                    <span>
                        online education & learning
                    </span>
                    <p>
                        Voltupas a voluptatem eos necessitatibus fugit commodi tenetur odio explore
                    </p>
                    <i className="fab fa-facebook-f icon"></i>
                    <i className="fab fa-instagram icon"></i>
                    <i className="fab fa-telegram icon"></i>
                </div>
                
                <div className='box'>
                    <h3>
                        Recent Post
                    </h3>
                    {blog.slice(0,3).map((val)=>{
                       return(
                        <div className='items flexSB'>
                        <div className='img'>
                            <img src={val.cover} alt="" />
                        </div>
                        <div className='text'>
                            <span>
                                <i className='fa fa-user'></i>
                                <label htmlFor="">{val.type}</label>
                            </span>
                            <span>
                                <i className='fa fa-calendar-alt'></i>
                                <label htmlFor="">{val.desc}</label>
                            </span>
                            <h4>
                                {val.title}
                            </h4>
                        </div>
                    </div>
                       )
                    })}
                   
                </div>
                <div className='box last'>
                        <h3>
                            Have a Questions?
                        </h3>
                        <ul>
                            <li>
                                <i className='fa fa-map'></i>
                                Amir Temur shoh ko'chasi 108 Toshkent
                            </li>
                            <li>
                                <i className='fa fa-phone-alt '></i>
                                +998 94 899 99 49
                            </li>
                            <li>
                                <i className='fa fa-paper-plane'>
                                </i>
                                nematxonovh@gamil.com
                            </li>
                        </ul>
                    </div>
            </div>
        </footer>
       
    </>
  )
}

export default Footer
