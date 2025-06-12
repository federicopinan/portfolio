import {styled, keyframes} from 'config/stitches.config'
import Name from './Name'
import SectionContainer from './SectionContainer'
import SectionTable from './SectionTable'
import {Post} from 'types/Post'
const Description = styled('p', {
    fontSize: '15px',
    fontWeight: '400',
    color: '$primaryTextColor',
    '[data-theme="dark"] &': {
        color: '$darkPrimaryTextColor',
    },
    lineHeight: '25.7px',
})

const CoolText = styled('span', {
    fontFamily: '"Newsreader", serif',
    fontWeight: '500',
})

const ContactRow = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '0.7em',
    marginTop: '1.2em',
})

const darkRed = '#b42850'

const ContactButton = styled('a', {
    display: 'inline-block',
    background: darkRed,
    color: '#fff',
    fontWeight: 600,
    fontSize: '13px',
    border: `2px solid ${darkRed}`,
    borderRadius: '999px',
    padding: '0.35em 1.1em',
    cursor: 'pointer',
    boxShadow: '0 1px 8px rgba(180,40,80,0.13)',
    transition: 'box-shadow 0.3s, filter 0.3s, background 0.2s',
    textDecoration: 'none',
    filter: 'brightness(0.93)',
    position: 'relative',
    '&:hover': {
        boxShadow: '0 0 16px 4px #b4285066',
        filter: 'brightness(1.05) drop-shadow(0 0 8px #b4285066)',
        background: darkRed,
    },
    animation: `${keyframes({
        '0%': {filter: 'brightness(0.93)'},
        '50%': {filter: 'brightness(1.08) drop-shadow(0 0 8px #b4285066)'},
        '100%': {filter: 'brightness(0.93)'},
    })} 3.2s infinite`,
})

const Availability = styled('span', {
    display: 'flex',
    alignItems: 'center',
    fontSize: '13px',
    color: '#444',
    fontWeight: 500,
    gap: '0.4em',
    '[data-theme="dark"] &': {
        color: '#e5e5e5',
    },
})

const DotAnim = keyframes({
    '0%': {boxShadow: '0 0 0 0 #b4285055', opacity: 1},
    '50%': {boxShadow: '0 0 0 8px #b4285022', opacity: 0.5},
    '100%': {boxShadow: '0 0 0 0 #b4285055', opacity: 1},
})

const Dot = styled('span', {
    display: 'inline-block',
    width: '0.7em',
    height: '0.7em',
    borderRadius: '50%',
    background: darkRed,
    marginRight: '0.2em',
    boxShadow: '0 0 0 0 #b4285055',
    animation: `${DotAnim} 1.2s infinite`,
})

const IntroSection = () => {
    return (
        <SectionContainer name='Intro'>
            <Name>Federico Piñan</Name>
            <Description>
                I'm a <CoolText>Cybersecurity Analyst</CoolText> based in
                Argentina, Passionate about everything IT-related, AI and
                cybersecurity Stuff. Every day, aiming to be 1% better — as an
                IT person.
            </Description>
            <ContactRow>
                <ContactButton
                    href='mailto:federicopinan@gmail.com'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Contact me
                </ContactButton>
                <Availability>
                    <Dot />
                    Open commissions
                </Availability>
            </ContactRow>
        </SectionContainer>
    )
}

export default IntroSection
