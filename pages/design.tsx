import { GetStaticProps } from 'next';
import data from '../public/data/design.json';
import { PageLayout } from '../src/components/PageLayout';

export default function Design({ posts }) {
    return (
        <PageLayout>
            <div>
                <h1>Design</h1>
                <p>Coming Soon</p>
            </div>
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
