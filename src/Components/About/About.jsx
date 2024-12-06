import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{
              setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores repudiandae cupiditate, ullam quisquam rem vero enim voluptatum! Nostrum quod unde sint distinctio corporis obcaecati voluptatum maxime explicabo blanditiis. Expedita dicta nesciunt ab veritatis blanditiis, ipsum cum veniam rem? Architecto et maiores sequi nam nemo mollitia ea? Velit rerum laboriosam fugit.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos aut molestias nesciunt, cupiditate ut dolorum, assumenda temporibus cumque quisquam tempora impedit explicabo sequi odio reiciendis sapiente dolor suscipit exercitationem vitae?</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam reprehenderit aut voluptatum harum non modi optio omnis, itaque quod? Sit esse aperiam corporis est mollitia, obcaecati vel numquam iusto nesciunt optio in quas hic accusantium voluptatibus earum doloribus ab accusamus?</p>
        </div>
    </div>
  )
}

export default About