import React,{useState} from 'react'
import { SIDEBAR_BOTTOM_LINKS, SIDEBAR_LINKS } from '../../lib/consts/navigation'
import { Link, useLocation } from 'react-router-dom'
import classnames from 'classnames'
import { FaArrowAltCircleDown, FaArrowAltCircleUp } from "react-icons/fa";
import { BsList } from "react-icons/bs";



const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'
const childLinkClasses = 'ml-5'

export default function Sidebar(){
    const [expanded, setExpanded] = useState(false);
  return (
    <div className='bg-neutral-900 w-70 h-screen p-3 flex flex-col text-white'>
        <div className='flex items-center gap-2 px-1 py-5'>
            {expanded?<span className='text-2xl font-bold'>Admin Dashboard</span>:null}
            <button className='ml-2 text-4xl' onClick={()=>setExpanded(!expanded)}>
                {expanded ? 'x' : <BsList/>}
            </button>
        </div>
        <div className='flex-1 py-8 flex flex-col gap-0.5'>
            {SIDEBAR_LINKS.map((link) => (
                <SidebarLink key={link.key} item={link} expanded={expanded}/>
            ))}
        </div>
        <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
            {SIDEBAR_BOTTOM_LINKS.map((link) => (
                <SidebarLink key={link.key} item={link} expanded={expanded} />
            ))}
        </div>
    </div>
  )
}

function SidebarLink({item,expanded}){
    const {pathname} = useLocation();
    const [childrenExpanded, setChildrenExpanded] = useState(false);
    return (
        <div>
            <div className='flex justify-between flex row'>
                <Link to={item.path} className={classnames(pathname===item.path ? 'bg-neutral-7000 text-white': 'text-neutral-400', linkClasses)}>
                    <span className='text-2xl'>{item.icon}</span>
                    {expanded?
                    <div>   
                        {item.label} 
                    </div>:null}
                            
                </Link>
                {item.children?
                    <div className='flex justify-end items-center'>  
                        { expanded ? 
                            <div onClick={()=>setChildrenExpanded(!childrenExpanded)}>
                                <FaArrowAltCircleUp/>
                            </div> : 
                            <div onClick={()=>setChildrenExpanded(!childrenExpanded)}>
                                <FaArrowAltCircleDown/>
                            </div> }
                    </div> :null}
            </div>
            <div>
                {childrenExpanded?<div>
                {item.children.map((child) => (
                    <Link to={child.path} className={classnames(pathname===child.path ? 'bg-neutral-7000 text-white': 'text-neutral-400', linkClasses,childLinkClasses)}>
                        <span className='text-2xl'>{child.icon}</span>
                        {expanded ? <div>{child.label} </div> : null}
                    </Link>
                )
                )}</div>:null}
            </div>
            
        </div>
    )
}