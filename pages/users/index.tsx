import Layout from "../../components/Layout";

interface UserProps {
    dataUsers: Array<any>;
}

export default function User(props: dataUsers) {
    const { dataUsers } = props;

    console.log(dataUsers)
    return (
        <Layout pageTitle="Users Page">
            {dataUsers.map(user => {
                return (
                    <>
                        <p>{user.name}</p>
                        <p>{user.username}</p>
                    </>
                )
            })}
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const dataUsers = await res.json();

    return {
        props: {
            dataUsers,
        }
    }
}
