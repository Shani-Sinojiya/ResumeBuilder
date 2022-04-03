import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

const Resume = () => {
    const router = useRouter();

    return (
        <div>
            Enter
        </div>
    );
}


export const getServerSideProps:GetServerSideProps = async (ctx) => {

    return {
        props:{
            data:null
        }
    }
}

export default Resume;