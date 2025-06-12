import {styled} from 'config/stitches.config'
import markdownToTxt from 'markdown-to-txt'
import Link from 'next/link'
import {Post} from 'types/Post'
import {Project} from 'types/Project'
import Box, {MotionBox} from './Box'

type Props =
    | {
          type: 'post'
          data: Post[]
      }
    | {
          type: 'project'
          data: Project[]
      }

const TitleText = styled('h3', {
    fontSize: '1.2rem',
    color: '$primaryTextColor',
    fontWeight: '600',
    '[data-theme="dark"] &': {
        color: '$darkPrimaryTextColor',
    },
    margin: 0,
    marginTop: '0.5em',
})

const DateText = styled('p', {
    position: 'relative',
    display: 'inline-block',
    fontSize: '1rem',
    color: '$secondaryTextColor',
    fontWeight: '500',
    marginTop: '0.5em',
    '&::before': {
        borderRadius: '5px',
        content: '',
        display: 'inline-block',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '$gray400',
        scale: '1.1',
        zIndex: -1,
        transition: 'all 0.3s ease',
    },
    '[data-theme="dark"] &': {
        color: '$darkSecondaryTextColor',
        '&::before': {
            backgroundColor: '$darkGray400',
        },
    },
})

const Description = styled('p', {
    fontSize: '14px',
    color: '$secondaryTextColor',
    fontWeight: '400',
    '[data-theme="dark"] &': {
        color: '$darkSecondaryTextColor',
    },
    marginTop: '0.3em',
})

export const TitleSection = ({
    id,
    date,
    title,
}: {
    id: number | undefined
    date: string
    title: string
}) => {
    return (
        <MotionBox layoutId={`${id}-title`}>
            <DateText>
                {new Date(date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
            </DateText>
            <TitleText>{title}</TitleText>
        </MotionBox>
    )
}

const PostLink = ({
    href,
    children,
    isExternal,
}: {
    href: string
    children: React.ReactNode
    isExternal?: boolean
}) => {
    if (isExternal) {
        return (
            <a
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                style={{textDecoration: 'none'}}>
                {children}
            </a>
        )
    }
    return <Link href={href}>{children}</Link>
}

const PageTable = ({data, type}: Props) => {
    return (
        <Box css={{display: 'grid', gap: '0.5em'}}>
            {data.map(item => {
                const linkProps =
                    type === 'post' && (item as Post).isExternal
                        ? {href: (item as Post).url || '', isExternal: true}
                        : {href: `/${type}s/${item.id}`}

                return (
                    <PostLink key={item.id} {...linkProps}>
                        <Box
                            css={{
                                position: 'relative',
                                marginBottom: '1em',
                                borderRadius: '10px',
                                '&:hover': {
                                    '&::before': {
                                        backgroundColor: '$hoverItem',
                                    },
                                },
                                '[data-theme="dark"] &': {
                                    '&:hover': {
                                        '&::before': {
                                            backgroundColor: '$darkHoverItem',
                                        },
                                    },
                                },
                                '&::before': {
                                    transition:
                                        'background-color 0.2s ease-in-out',
                                    content: '',
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'transparent',
                                    borderRadius: '6px',
                                    zIndex: -1,
                                },
                            }}>
                            <TitleText>{item.title}</TitleText>
                            <DateText>
                                {new Date(item.date).toLocaleDateString(
                                    'en-US',
                                    {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    }
                                )}
                                {(item as Post).isExternal && ' • Substack'}
                            </DateText>
                        </Box>
                    </PostLink>
                )
            })}
        </Box>
    )
}

export default PageTable
