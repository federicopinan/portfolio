import {styled} from 'config/stitches.config'

const FooterContainer = styled('footer', {
    width: '100%',
    textAlign: 'center',
    fontSize: '13px',
    color: '$secondaryTextColor',
    padding: '1.5em 0 1em 0',
    marginTop: '2em',
    borderTop: '1px solid $gray400',
    '[data-theme="dark"] &': {
        color: '$darkSecondaryTextColor',
        borderTop: '1px solid $darkGray400',
    },
})

const Footer = () => {
    return <FooterContainer></FooterContainer>
}

export default Footer
