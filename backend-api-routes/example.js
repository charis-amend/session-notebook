// ---------------- example from class ----------------
// --- backend --- 
// in /api/jokes/index.js (data api request!)
import { jokes } from "lib/data";
export default function handler(request, response) {
    response.status(200).json(jokes);
}

// in -- /api/jokes/[id].js
import { jokes } from "lib/data";
export default function handler(request, response) {
    const { id } = request.query;
    const joke = jokes.find((joke) => joke.id === id);
    console.log("request method: ", request.method);
    if (!joke) {
        response.status(404).json({ status: "not found" });
        return;
    }
    response.status(200).json(joke);
}

// --- frontend ---
// in /component/joke/index.js file:
import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Joke() {
    const router = useRouter();
    const { id } = router.query;

    const { data, isLoading } = useSWR(id ? `/api/jokes/${id}` : null);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (!data) {
        return;
    }

    return (
        <>
            <small>ID: {id}</small>
            <h1>{data.joke} </h1>
            <Link href="/">Back to all</Link>
        </>
    );
}

