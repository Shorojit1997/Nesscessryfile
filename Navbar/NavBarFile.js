import React, { useState } from 'react';
import './NavBarFile.css'
import picture from '../pictures/icon.png'
import { AiOutlineCreditCard, AiOutlineGift, AiOutlineMenu, AiOutlineLogout, AiOutlineClose } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { NavLink } from 'react-router-dom'

const NavBarFile = () => {
    const [toogle, setToogle] = useState(false)
    return (
        <div className='nav_bar_main'>
            <div className='nav<bar_logo'>
                <div className='nav_bar_logo_text' src='#'>Logo</div>
            </div>
            <div className='c_nav_bar_left'>
                <ul className='c_nav_bar_left_first_ul'>
                    <li className='c_nav_bar_left_first_li'><NavLink style={{ color: 'white' }} activeStyle={{ color: 'yellow' }} exact to='/' >HOME</NavLink></li>
                    <li className='c_nav_bar_left_first_li'><NavLink style={{ color: 'white' }} activeStyle={{ color: 'yellow' }} to='/deposit' >DEPOSIT</NavLink></li>
                    <li className='c_nav_bar_left_first_li'><NavLink style={{ color: 'white' }} activeStyle={{ color: 'yellow' }} to="/withdraw">WITHDRAW</NavLink></li>
                    <li className='c_nav_bar_left_first_li'><NavLink style={{ color: 'white' }} activeStyle={{ color: 'yellow' }} to="/transfer">TRANSFER</NavLink></li>
                    <li className='c_nav_bar_left_first_li'>
                        <div>STATEMENT <RiArrowDropDownLine /></div>
                        <div className='c_first_dropdown'>
                            <div className='c_first_dropdown_item'><NavLink style={{ color: 'black' }} activeStyle={{ color: 'black' }} to="/statement/bets">Bets</NavLink></div>
                            <div className='c_first_dropdown_item'><NavLink style={{ color: 'black' }} activeStyle={{ color: 'black' }} to="/statement/deposit">Deposits</NavLink> </div>
                            <div className='c_first_dropdown_item'><NavLink style={{ color: 'black' }} activeStyle={{ color: 'black' }} to="/statement/withdraw">Withdraws</NavLink></div>
                            <div className='c_first_dropdown_item'><NavLink style={{ color: 'black' }} activeStyle={{ color: 'black' }} to="/statement/transfer">Transfer Account</NavLink></div>
                            <div className='c_first_dropdown_item'><NavLink style={{ color: 'black' }} activeStyle={{ color: 'black' }} to="/statement/notification">Notifications</NavLink> </div>
                        </div>
                    </li>
                    <li className='c_nav_bar_left_first_li'><NavLink style={{ color: 'white' }} activeStyle={{ color: 'yellow' }} to="/sponsor">SPONSOR</NavLink></li>
                </ul>
            </div>
            {/* copy html */}
            {
                toogle && (
                    <div onClick={()=>{setToogle(!toogle)}} className='nav_bar_left'>
                        <ul className='nav_bar_left_first_ul'>
                            <li className='nav_bar_left_first_li'><NavLink style={{ color: 'black' }} activeStyle={{ color: 'red' }} exact to='/' >HOME</NavLink></li>
                            <li className='nav_bar_left_first_li'><NavLink style={{ color: 'black' }} activeStyle={{ color: 'red' }} to='/deposit' >DEPOSIT</NavLink></li>
                            <li className='nav_bar_left_first_li'><NavLink style={{ color: 'black' }} activeStyle={{ color: 'red' }} to="/withdraw">WITHDRAW</NavLink></li>
                            <li className='nav_bar_left_first_li'><NavLink style={{ color: 'black' }} activeStyle={{ color: 'red' }} to="/transfer">TRANSFER</NavLink></li>
                            <li className='nav_bar_left_first_li'>
                                <div>STATEMENT <RiArrowDropDownLine /></div>
                                <div className='first_dropdown'>
                                    <div className='first_dropdown_item'><NavLink style={{ color: 'black' }} activeStyle={{ color: 'black' }} to="/statement/bets">Bets</NavLink></div>
                                    <div className='first_dropdown_item'><NavLink style={{ color: 'black' }} activeStyle={{ color: 'black' }} to="/statement/deposit">Deposits</NavLink> </div>
                                    <div className='first_dropdown_item'><NavLink style={{ color: 'black' }} activeStyle={{ color: 'black' }} to="/statement/withdraw">Withdraws</NavLink></div>
                                    <div className='first_dropdown_item'><NavLink style={{ color: 'black' }} activeStyle={{ color: 'black' }} to="/statement/transfer">Transfer Account</NavLink></div>
                                    <div className='first_dropdown_item'><NavLink style={{ color: 'black' }} activeStyle={{ color: 'black' }} to="/statement/notification">Notifications</NavLink> </div>
                                </div>
                            </li>
                            <li className='nav_bar_left_first_li'><NavLink style={{ color: 'black' }} activeStyle={{ color: 'red' }} to="/sponsor">SPONSOR</NavLink></li>
                        </ul>
                    </div>
                )
            }

            <div className='nav_bar_right'>
                <div className='nav_bar_right_first_ul'>
                    <div className='nav_bar_right_first_li'>$10000000.0</div>
                    <div className='nav_bar_right_first_li'><AiOutlineCreditCard /></div>
                    <div className='nav_bar_right_first_li'><AiOutlineGift /></div>
                    <div className='nav_bar_right_first_li'><IoMdNotificationsOutline /></div>
                </div>
            </div>
            <div className='nav_bar_profile'>
                <div className='nav_bar_profile_pic'><img src={picture} alt='navpicture'></img> </div>
                <div className='nav_bar_profile_dropdown'>
                    <button className='nav_bar_profile_dropdown_item'><CgProfile /> Profile</button>
                    <button className='nav_bar_profile_dropdown_item'><AiOutlineLogout /> Logout</button>
                </div>
            </div>
            <label onClick={() => { setToogle(!toogle) }} htmlFor='check' className='nav_bar_toogle'>
                {toogle ? <AiOutlineClose /> : <AiOutlineMenu />}
            </label>

        </div >
    );
};

export default NavBarFile;