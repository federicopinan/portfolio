import {styled} from 'config/stitches.config'
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

const ContactButton = styled('a', {
    display: 'inline-block',
    background: '#2563eb',
    color: '#fff',
    fontWeight: 600,
    fontSize: '15px',
    border: 'none',
    borderRadius: '999px',
    padding: '0.5em 1.4em',
    cursor: 'pointer',
    boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
    transition: 'background 0.2s',
    textDecoration: 'none',
    '&:hover': {
        background: '#1d4ed8',
    },
})

const Availability = styled('span', {
    display: 'flex',
    alignItems: 'center',
    fontSize: '15px',
    color: '#444',
    fontWeight: 500,
    gap: '0.4em',
    '[data-theme="dark"] &': {
        color: '#e5e5e5',
    },
})

const Dot = styled('span', {
    display: 'inline-block',
    width: '0.7em',
    height: '0.7em',
    borderRadius: '50%',
    background: '#facc15', // amarillo
    marginRight: '0.2em',
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
                    Limited availability
                </Availability>
            </ContactRow>
        </SectionContainer>
    )
}

export default IntroSection
