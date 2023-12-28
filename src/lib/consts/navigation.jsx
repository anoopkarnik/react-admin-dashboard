import {HiOutlineCash, HiOutlineCog, HiOutlineCube, HiOutlineQuestionMarkCircle, HiOutlineViewGrid} from 'react-icons/hi';
import { FaTasks } from "react-icons/fa";
import { BsRobot } from "react-icons/bs";


export const SIDEBAR_LINKS = [
    {
        'key': 'dashboard',
        'label': 'Dashboard',
        'path': '/',
        'icon': <HiOutlineViewGrid />,
        'children': [
            {
                'key': 'financial',
                'label': 'Financial',
                'path': '/dashboard/financial',
                'icon': <HiOutlineCash/>
            },
            {
                'key': 'tasks',
                'label': 'Tasks',
                'path': '/dashboard/tasks',
                'icon': <FaTasks/>
            }

        ]
    },
    {
        'key': 'notion',
        'label': 'Notion',
        'path': '/notion',
        'icon': <HiOutlineCube/>
    },
    {
        'key': 'chatgpt',
        'label': 'Chatgpt',
        'path': '/chatgpt',
        'icon': <BsRobot/>
    }
]

export const SIDEBAR_BOTTOM_LINKS = [
    {
        'key': 'settings',
        'label': 'Settings',
        'path': '/settings',
        'icon': <HiOutlineCog />
    },
    {
        'key': 'support',
        'label': 'Support',
        'path': '/support',
        'icon': <HiOutlineQuestionMarkCircle/>
    }
]