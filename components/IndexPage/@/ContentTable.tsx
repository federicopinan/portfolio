import {styled} from 'config/stitches.config'
import SectionContainer from './SectionContainer'
import SectionTitle from './SectionTitle'

const Text = styled('p', {
    fontSize: '16px',
    fontWeight: '400',
    color: '$secondaryTextColor',
    '[data-theme="dark"] &': {
        color: '$darkSecondaryTextColor',
    },
    padding: 0,
    margin: 0,
})

const MailLink = styled('a', {
    all: 'unset',
    cursor: 'pointer',
    textDecoration: 'underline',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
        color: '$primaryTextColor',
    },
    '[data-theme="dark"] &': {
        '&:hover': {
            color: '$darkPrimaryTextColor',
        },
    },
})

const NowSection = () => {
    return (
        <SectionContainer name='currenly' css={{margin: '2em 0'}}>
            <SectionTitle>~/Currently</SectionTitle>
            <Text>
                I love learning new stuff, that's why most of the time I'm
                researching about security stuff, build exciting projects while
                trying to improve the quality of my works.
                <br />
                <br />
                Researching and solving complex problems is not just what I do —
                it's what drives me. I'm deeply passionate about continuous
                learning, and I know I've only begun to tap into my full
                potential.
                <br />
                <br />
                I'm currently working on a few projects, but I'm always open to
                new opportunities, feel free to contact me at{' '}
                <MailLink
                    href='mailto:federicopinan@gmail.com'
                    target={'_blank'}
                    rel='noreferrer'>
                    federicopinan@gmail.com
                </MailLink>
                .
            </Text>
        </SectionContainer>
    )
}

export default NowSection
