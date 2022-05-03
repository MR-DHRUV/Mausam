import React from 'react'
import { useHistory } from 'react-router-dom'
import './hero.css'


const Hero = (props) => {

  // states and props 
  const history = useHistory();

  const Onchange = async (event) => {
    await props.updater(event.target.value)
  }

  const handlesubmit = async (event) => {


    event.preventDefault();
    if (props.city) {
      await props.location();
      history.push('/Now');
    }
    else {
      document.getElementById('warning').style.display = 'flex';
    }
  }

  const parallaxAnimation = () => {
    const elems = document.querySelectorAll('.laya-please');
    // eslint-disable-next-line no-unused-vars
    const layer2 = document.querySelector('.layer-2');
    const layer3 = document.querySelector('.layer-3');
    const layer4 = document.querySelector('.layer-4');
    const layer5 = document.querySelector('.layer-5');
    const layer6 = document.querySelector('.layer-6');
    const layer7 = document.querySelector('.layer-7');
    const layer8 = document.querySelector('.layer-8');


    setTimeout(function () {
      elems.forEach(function (elem, index) {
        elem.style.animation = "none";
      });
    }, 1500);



    document.body.addEventListener('mousemove', function (e) {
      if (!e.currentTarget.dataset.triggered) {
        elems.forEach(function (elem, index) {
          if (elem.getAttribute('style')) {
            elem.style.transition = "all .5s";
            elem.style.transform = "none";
          }
        });
      }
      e.currentTarget.dataset.triggered = true;

      let width = window.innerWidth / 2;
      let mouseMoved2 = ((width - e.pageX) / 50);
      let mouseMoved3 = ((width - e.pageX) / 40);
      let mouseMoved4 = ((width - e.pageX) / 30);
      let mouseMoved5 = ((width - e.pageX) / 20);
      let mouseMoved6 = ((width - e.pageX) / 10);
      let mouseMoved7 = ((width - e.pageX) / 5);

      layer3.style.transform = "translateX(" + mouseMoved2 + "px)";
      layer4.style.transform = "translateX(" + mouseMoved3 + "px)";
      layer5.style.transform = "translateX(" + mouseMoved4 + "px)";
      layer6.style.transform = "translateX(" + mouseMoved5 + "px)";
      layer7.style.transform = "translateX(" + mouseMoved6 + "px)";
      layer8.style.transform = "translateX(" + mouseMoved7 + "px)";
    });

    document.body.addEventListener('mouseleave', function (e) {
      elems.forEach(function (elem, index) {
        elem.style.transition = "all .5s";
        elem.style.transform = "none";
      });
    });

    document.body.addEventListener('mouseenter', function (e) {
      elems.forEach(function (elem, index) {
        setTimeout(function () {
          elem.style.transition = "none";
        }, 500);
      });
    });
  }

  let today = new Date();
  const monthname = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let monthno = today.getMonth();

  let month = monthname[monthno];



  return (
    <>
      {/* // background starts */}
      <div className="totalcontainer" onMouseEnter={parallaxAnimation}>
        <div className="laya-please layer-2">
        </div>
        <div className="container1">
          <div className="laya-please layer-3">
          </div>
          <div className="laya-please layer-4">
          </div>
          <div className="laya-please layer-5">
          </div>
          <div className="laya-please layer-6">
          </div>
        </div>
        <div className="container2">
          <div className="laya-please layer-7">
          </div>
          <div className="laya-please layer-8">
          </div>
        </div>
        <div className="suncontainer">
          <div className="sun"></div>
        </div>
      </div>
      {/* background over  */}

      <div className="calendar-container">

        <div className="searchin">

          <form className="d-flex" onSubmit={handlesubmit}>

            <div className="input">

              <div className="warningSearch">
                <input className="me-2 my-search" type="search" onChange={Onchange} value={props.city} placeholder="Enter Your City Name To Continue" aria-label="Search" />
                <button className="btn my-btn" type='submit'>Continue</button>
              </div>

              <p id="warning">Please Enter A Valid City</p>

            </div>

          </form>

        </div>
        <div>
          <header className='calenderTop calender-width'>
            <div className="day">{today.getDate()}</div>
            <div className="month">{month}</div>
          </header>

          <table className="calendar calender-width">

            <thead>
              <tr>

                <td className='dayname'>Mon</td>
                <td className='dayname'>Tue</td>
                <td className='dayname'>Wed</td>
                <td className='dayname'>Thu</td>
                <td className='dayname'>Fri</td>
                <td className='dayname'>Sat</td>
                <td className='dayname'>Sun</td>

              </tr>

            </thead>

            <tbody className='tablebody'>

              <tr>
                <td className="prev-month subdates">29</td>
                <td className="prev-month subdates">30</td>
                <td className="prev-month subdates">31</td>
                <td className='subdates'>1</td>
                <td className='subdates'>2</td>
                <td className='subdates'>3</td>
                <td className='subdates'>4</td>
              </tr>

              <tr>
                <td className='subdates'>5</td>
                <td className='subdates'>6</td>
                <td className='subdates'>7</td>
                <td className='subdates'>8</td>
                <td className='subdates'>9</td>
                <td className='subdates'>10</td>
                <td className='subdates'>11</td>
              </tr>

              <tr>
                <td className='subdates'>12</td>
                <td className='subdates'>13</td>
                <td className='subdates'>14</td>
                <td className='subdates'>15</td>
                <td className='subdates'>16</td>
                <td className='subdates'>17</td>
                <td className="current-day subdates">18</td>
              </tr>

              <tr>
                <td className='subdates'>19</td>
                <td className='subdates'>20</td>
                <td className='subdates'>21</td>
                <td className='subdates'>22</td>
                <td className='subdates'>23</td>
                <td className='subdates'>24</td>
                <td className='subdates'>25</td>
              </tr>

              <tr>
                <td className='subdates'>26</td>
                <td className='subdates'>27</td>
                <td className='subdates'>28</td>
                <td className='subdates'>29</td>
                <td className='subdates'>30</td>
                <td className='subdates'>31</td>
                <td className="next-month subdates">1</td>
              </tr>

            </tbody>

          </table>
        </div>

      </div>




    </>
  )

}

export default Hero