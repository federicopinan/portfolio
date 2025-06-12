'use client'

import {createPortal} from 'react-dom'
import {useEffect, useState} from 'react'
import Dock from './utils/Dock'
import DockItem from './utils/DockItem'
import {MouseProvider} from './utils/MouseProvider'
import Item from './utils/Item'
import HomeIcon from 'public/svg/HomeIcon.svg'
import WritingsIcon from 'public/svg/WritingsIcon.svg'
import ProjectsIcon from 'public/svg/ProjectsIcon.svg'
import TwitterIcon from 'public/svg/TwitterIcon.svg'
import GithubIcon from 'public/svg/GithubIcon.svg'
import MailIcon from 'public/svg/MailIcon.svg'
import LinkedinIcon from 'public/svg/LinkedinIcon.svg'
import ThemeItem from './utils/ThemeItem'
import CVIcon from 'public/svg/CVIcon.svg'
const DockComponent = () => {
    const [domReady, setDomReady] = useState(false)

    useEffect(() => {
        setDomReady(true)
    }, [])

    if (!domReady) return <></>

    return createPortal(
        <MouseProvider>
            <Dock>
                <DockItem>
                    <Item icon={<HomeIcon />} label='Home' href='/' />
                </DockItem>
                <DockItem>
                    <Item
                        icon={<WritingsIcon />}
                        label='Writings'
                        href='/posts'
                    />
                </DockItem>
                <DockItem divider>
                    <Item
                        icon={<ProjectsIcon />}
                        label='Projects'
                        href='/projects'
                    />
                </DockItem>
                <DockItem>
                    <Item
                        icon={<TwitterIcon />}
                        label='Twitter'
                        href='https://x.com/revversed_txt'
                    />
                </DockItem>
                <DockItem>
                    <Item
                        icon={<GithubIcon />}
                        label='Github'
                        href='https://github.com/federicopinan'
                    />
                </DockItem>
                <DockItem divider>
                    <Item
                        icon={<LinkedinIcon />}
                        label='LinkedIn'
                        href='https://www.linkedin.com/in/federicopiñan/'
                    />
                </DockItem>
                <DockItem>
                    <Item
                        icon={<MailIcon />}
                        label='Mail'
                        href='mailto:federicopinan@gmail.com'
                    />
                </DockItem>
                <DockItem>
                    <Item
                        icon={<CVIcon />}
                        label='Download CV'
                        href={`https://drive.google.com/uc?export=download&id=1fyZ_WvSBV3r82Yp4-xO4BeKQbBMvFHhc`}
                    />
                </DockItem>
                <DockItem>
                    <ThemeItem />
                </DockItem>
            </Dock>
        </MouseProvider>,
        document.getElementById('dock-portal') as Element
    )
}

export default DockComponent
