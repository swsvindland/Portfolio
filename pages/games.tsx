import { GetStaticProps } from 'next';
import data from '../public/data/games.json';
import Projects from '../src/components/Projects';
import { PageLayout } from '../src/components/PageLayout';

export default function Games({ posts }) {
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
