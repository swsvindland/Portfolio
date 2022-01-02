import { GetStaticProps } from 'next';
import Timeline from '../src/components/Timeline';
import data from '../public/data/coding.json';
import { PageLayout } from '../src/components/PageLayout';

export default function Work({ posts }) {
    return (
        <PageLayout>
            <Timeline posts={posts} />
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
