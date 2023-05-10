import React from "react";
import { NavLink } from "react-router-dom";
import './Menu.css'

// NavLinky import e arvum react-router-dom gradaranic vory katarum e a tegi gorcoxutyuny ayn uni to hatkutyun vory nuyu hrefi gorcoxutyuna anum
// isActive parametr uni gorcoxutyun vory nsanakum e te tvyal pahin vori vra enq sexmum u karogh enq nranov tal erku clas 
// isActive i jamanak miyusy asxati erb isActive chi miyusy


// sxal dzev
// export default function Menu() {
//     return (
//         <div id="nav">
//             <ul id="ul">
//                 <NavLink to='/Home' className={({ isActive }) => (isActive ? 'Li1' : 'Li2')}><li>Home</li></NavLink>
//                 <NavLink to='/AboutPage' className={({ isActive }) => (isActive ? 'Li1' : 'Li2')}><li>About</li></NavLink>
//                 <NavLink to='/Contact' className={({ isActive }) => (isActive ? 'Li1' : 'Li2')}><li>Contact</li></NavLink>
//                 <NavLink to='/Corona' className={({ isActive }) => (isActive ? 'Li1' : 'Li2')}><li>Corona</li></NavLink>
//                 <NavLink to='/Register' className={({ isActive }) => (isActive ? 'Li1' : 'Li2')}><li>Register</li></NavLink>
//             </ul>
//         </div>
//     )
// }


// chist dzev
export default function Menu() {
    const menuName = [
        {
            id:1,
            to:'/Home',
            name:'Home'
        },
        {
            id:2,
            to:'/AboutPage',
            name:'About'
        },
        {
            id:3,
            to:'/ToDo',
            name:'ToDo'
        },
        {
            id:4,
            to:'/Jokes',
            name:'Jokes'
        },
        {
            id:5,
            to:'/Register',
            name:'Register'
        }
    ]
    return (
        <div id="nav">
            <ul id="ul">
                {menuName?.map((e) => (
                    <NavLink key={e.id} to={e.to} className={({isActive}) => (isActive?'Li1':'Li2')}><li>{e.name}</li></NavLink>
                ))}
            </ul>
        </div>
    )
}