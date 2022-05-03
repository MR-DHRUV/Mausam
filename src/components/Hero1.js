import React from 'react'
import { useHistory } from 'react-router-dom'
import './hero.css'



const Hero1 = (props) => {

    // states and props 
    const history = useHistory();

    const Onchange = async (event) => {
        await props.updater(event.target.value)
    }

    const handlesubmit = async (event) => {


        event.preventDefault();
        if (props.city) {
            const response = await props.location();
            console.log(response);

            if(response){
                history.push('/Now');
            }
            else{
            document.getElementById('warning').style.display = 'flex';

            }
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
    let todayHours = today.getHours();
    let greet;
  
    if(4<=todayHours && todayHours<=11){
      greet = 'Good Morning'
    }
  
    else if(11<todayHours && todayHours<=16){
      greet = 'Good Afternoon'
    }
    else{
      greet = 'Good Evening'
    }

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


            <div className="newContainer">
                <div className="searchin">
                    <form className="d-flex" onSubmit={handlesubmit}>
                        <div className="warningDiv">
                            <h3 className='h3 hello'>{`${greet} 😊`},</h3>
                            <div className="warningSearch">
                                <input className={window.innerWidth> 850 ? 'h3 me-2 my-search' : 'h5 me-2 my-search'} type="search" onChange={Onchange} value={props.city} placeholder="Enter Your City Name To Continue" aria-label="Search" />
                                <button className={window.innerWidth> 850 ? 'h3 btn btn-success' : 'h5 btn btn-success'} type='submit'>Continue</button>
                            </div>
                            <p id="warning">Please Enter A Valid City</p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}



export default Hero1