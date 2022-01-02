import { GetStaticProps } from 'next';
import Projects from '../src/components/Projects';
import data from '../public/data/projects.json';
import { PageLayout } from '../src/components/PageLayout';

export default function Coding({ posts }) {
    return (
        <PageLayout>
            <Projects posts={posts} />
        </PageLayout>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            posts: data.data,
        },
    };
};
