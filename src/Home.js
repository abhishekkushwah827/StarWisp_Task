import React from 'react';
import "./Home.css";
import addicon from "./Images/addicon.png";
import plusicon from "./Images/plusicon.png";
import { Link } from "react-router-dom";
import Homemonth from "./Homemonth";
import month_graph from "./Images/month_graph.png";
import month_graph2 from "./Images/month_graph2.png";
import Salegraph from './Salegraph';
import Homegraph2 from "./Homegraph2";
import Sidediv from "./Sidediv";
import boximg from "./Images/Side_div_box.png";
import boximg2 from "./Images/Side_div_box2.png";
import boximg3 from "./Images/Side_div_box3.png";

function Home() {
    return (
        <div className="home">
            <div className="home">



                <div className="search_div">
                    <input className="home_search" type="text" name="" placeholder="Search" />
                </div>

                <div className="home__sales_div">
                    <span id="sale_head">Sales Report September 2020</span>
                    <Salegraph />

                    <div className="home__sales_div_right">
                        <span>17 SEP</span>
                        <div className="right_try" id="hsales_r_first_div">
                            <span className="first">$1,204.33</span>
                            <span className="sec">Revenue</span>
                        </div>
                        <div className="right_try" id="sec_div">
                            <span className="first">33</span>
                            <span className="sec">Quotations</span>
                        </div>
                    </div>
                </div>

                <div className="home__notepad_div">
                    <span>Notepad</span>
                    <div>
                        <p>Title Lorem ipsum dolor sit am...</p>
                        <p>Title Lorem ipsum dolor sit am...</p>
                        <p>Title Lorem ipsum dolor sit am...</p>
                        <p>Title Lorem ipsum dolor sit am...</p>
                        <p>Title Lorem ipsum dolor sit am...</p>
                    </div>
                    <Link to="/notepad">
                        <div className="home__notepad_icon">
                            <img id="f" src={addicon} alt="" />
                            <img id="s" src={plusicon} alt="" />
                        </div>
                    </Link>
                </div>

                <div className="home__graph_div">
                    <Homegraph2 />
                </div>

                <div className="home__inbox_div">
                    <span id="first">Inbox</span>
                    <span id="second">23</span>
                </div>

                <div className="home__thism_div" >
                    <Homemonth
                        text="This Month"
                        text2="+7.8%"
                        imgsrc={month_graph}
                    />
                </div>

                <div className="home__lastm_div">
                    <Homemonth
                        text="last Month"
                        text2="+67.4%"
                        imgsrc={month_graph2}
                    />
                </div>

                <div className="home__rside_head">
                    <span id="notification">Notifications</span>
                    <span id="events">Events</span>
                </div>
                <div className="home__rside_div">

                    <Sidediv
                        head="Admin"
                        boximg={boximg}
                        para="Your faculty uploaded the syllabus."
                        time="3 minutes ago"
                    />
                    <Sidediv
                        head="Student"
                        boximg={boximg2}
                        para="Your faculty uploaded the syllabus."
                        time="3 minutes ago"
                    />
                    <Sidediv
                        head="Teacher"
                        boximg={boximg3}
                        para="Your faculty uploaded the syllabus."
                        time="3 minutes ago"
                    />
                    <Sidediv
                        head="Admin"
                        boximg={boximg}
                        para="Your faculty uploaded the syllabus."
                        time="3 minutes ago"
                    />
                    <Sidediv
                        head="Admin"
                        boximg={boximg2}
                        para="Your faculty uploaded the syllabus."
                        time="3 minutes ago"
                    />
                    <Sidediv
                        head="Admin"
                        boximg={boximg3}
                        para="Your faculty uploaded the syllabus."
                        time="3 minutes ago"
                    />
                     <Sidediv
                        head="Admin"
                        boximg={boximg3}
                        para="Your faculty uploaded the syllabus."
                        time="3 minutes ago"
                    />


                </div>
            </div>
        </div>
    )
}

export default Home;
