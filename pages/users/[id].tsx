import { useRouter } from "next/router"
import Layout from "../../components/Layout";
export default function Detail() {
    const router = useRouter();
    const { id } = router.query;
    return (
        <>
            <Layout pageTitle="Detail">
                <p>User Detail Page {''} {id} {''}</p>
            </Layout>
        </>
    )
}
