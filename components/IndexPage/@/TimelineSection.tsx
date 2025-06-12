import {styled} from 'config/stitches.config'
import SectionContainer from './SectionContainer'

const darkRed = '#b42850'

const TimelineList = styled('ul', {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'grid',
    gap: '2.2em',
    position: 'relative',
    '&::before': {
        content: '',
        position: 'absolute',
        left: '16px',
        top: 0,
        width: '2px',
        height: '100%',
        background: 'linear-gradient(180deg, #b42850 0%, #fff0 100%)',
        opacity: 0.5,
        zIndex: 0,
    },
})

const TimelineItem = styled('li', {
    position: 'relative',
    paddingLeft: '2.8em',
    minHeight: '2.5em',
})

const Dot = styled('span', {
    position: 'absolute',
    left: '8px',
    top: '0.2em',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    background: darkRed,
    boxShadow: '0 0 12px 2px #b4285055',
    border: '2px solid #fff',
    zIndex: 1,
})

const Date = styled('span', {
    fontSize: '13px',
    color: darkRed,
    fontWeight: 500,
    marginBottom: '0.2em',
    display: 'block',
})

const Title = styled('h4', {
    fontSize: '16px',
    fontWeight: 600,
    margin: 0,
    color: '#fff',
})

const Description = styled('p', {
    fontSize: '14px',
    color: '#444',
    margin: 0,
    '[data-theme="dark"] &': {color: '#ccc'},
})

const experiences = [
    {
        date: '2024 - Now',
        title: 'Mengo Consulting Group',
        description:
            'Working at Mengo Consulting Group, a cybersecurity consulting firm, participating in offensive and defensive security projects.',
    },
    {
        date: '2025',
        title: 'Security Blue Team (BTL1) Certification',
        description:
            'Achieved the Blue Team Level 1 certification from Security Blue Team, validating my knowledge in cyber defense and monitoring.',
    },
    {
        date: '2022 - 2024',
        title: 'Técnico Universitario Superior en Programación - UTN',
        description:
            'I completed a Higher University Technician in Programming at the National Technological University (UTN), specializing in software development and programming languages.',
    },
]

const TimelineSection = () => (
    <SectionContainer name='Timeline'>
        <h2
            style={{
                fontSize: '1.2em',
                color: '#fff',
                marginBottom: '1.2em',
            }}>
            Timeline
        </h2>
        <TimelineList>
            {experiences.map((exp, i) => (
                <TimelineItem key={i}>
                    <Dot />
                    <Date>{exp.date}</Date>
                    <Title>{exp.title}</Title>
                    <Description>{exp.description}</Description>
                </TimelineItem>
            ))}
        </TimelineList>
    </SectionContainer>
)

export default TimelineSection
