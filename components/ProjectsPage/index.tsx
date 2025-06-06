import {MotionContainer} from 'components/Layout/Container'
import Head from 'next/head'
import {Project} from 'types/Project'
import PageTable from '../@/PageTable'
import PageTitle from '../@/PageTitle'

const variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
}

const ProjectsPage = ({projects}: {projects: Project[]}) => {
    return (
        <>
            <Head>
                <title>Projects | Federico Piñan</title>
            </Head>
            <MotionContainer
                variants={variants}
                initial='initial'
                animate='animate'
                exit={'initial'}
                transition={{duration: 0.3}}>
                <PageTitle>Projects</PageTitle>
                <PageTable data={projects} type='project' />
            </MotionContainer>
        </>
    )
}

export default ProjectsPage
