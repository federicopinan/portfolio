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
        </SectionContainer>
    )
}

export default IntroSection
