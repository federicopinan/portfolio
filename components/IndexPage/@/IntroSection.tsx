import {styled} from 'config/stitches.config'
import Name from './Name'
import SectionContainer from './SectionContainer'

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
                Argentina, driven by my passion for creating beautiful and
                engaging web experiences. I'm always striving to produce the
                highest quality code while designing intuitive interfaces.
            </Description>
        </SectionContainer>
    )
}

export default IntroSection
