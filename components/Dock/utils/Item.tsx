import {AnimatePresence, motion} from 'framer-motion'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {ReactNode, useState} from 'react'
import {styled} from '../../../config/stitches.config'

export interface Item {
    icon: ReactNode
    label: string
    href: string
}

const Tooltip = styled('div', {
    position: 'absolute',
    top: '-2.2em',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'rgba(30,30,30,0.95)',
    color: '#fff',
    padding: '0.35em 0.9em',
    borderRadius: '8px',
    fontSize: '0.95em',
    fontWeight: 500,
    whiteSpace: 'nowrap',
    pointerEvents: 'none',
    opacity: 0,
    zIndex: 100,
    transition: 'opacity 0.2s',
    boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
    '&[data-visible="true"]': {
        opacity: 1,
    },
})

const ActiveDot = styled('div', {
    position: 'absolute',
    bottom: '-0.35em',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '3px',
    height: '3px',
    borderRadius: '100%',
    background: '#A1A1A1',
})

export const StyledItem = styled('div', {
    display: 'grid',
    placeContent: 'center',
    transition: 'background 0.6s ease',

    '& svg': {
        width: '100%',
        height: '100%',
        transform: 'scale(0.55)',
        color: '$dockIcon',
    },
    '[data-theme="dark"] &': {
        '& svg': {
            color: '$darkDockIcon',
        },
    },
})

const MotionActiveDot = motion(ActiveDot)

const Item = ({icon, label, href}: Item) => {
    const [hover, setHover] = useState<boolean>(false)
    const {pathname} = useRouter()
    const active = pathname === href
    return (
        <Link
            href={href}
            style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            target={href.startsWith('http') ? '_blank' : undefined}>
            <Tooltip data-visible={hover}>{label}</Tooltip>
            <StyledItem>{icon}</StyledItem>
            <AnimatePresence initial mode='wait'>
                {active && (
                    <MotionActiveDot
                        initial={{opacity: 0, scale: 0.7}}
                        exit={{opacity: 0, scale: 0.7}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.3}}
                    />
                )}
            </AnimatePresence>
        </Link>
    )
}

export {Tooltip}

export default Item
