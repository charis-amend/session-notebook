// in the database Schema Joke file
// /db/models/joke.js 
import mongoose from "mongoose";
const { Schema } = mongoose;
const jokeSchema = new Schema({
    joke: { type: String, required: true },
});
const Joke = mongoose.models.Joke || mongoose.model("Joke", jokeSchema);
export default Joke;


// in Joke Component:
import useSWR from "swr";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Joke() {
    const router = useRouter();
    const { id } = router.query;
    const { data, isLoading } = useSWR(`/api/jokes/${id}`);
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


// API connection for JOKE (index.js):
import dbConnect from "../../../db/connect";
import Joke from "../../../db/models/Joke";
export default async function handler(request, response) {
    await dbConnect();
    if (request.method === "GET") {
        const jokes = await Joke.find();
        return response.status(200).json(jokes);
    }
    if (request.method === "POST") {
        try {
            console.log("request", request);
            const jokeData = request.body;
            await Joke.create(jokeData);
            return response.status(200).json({ status: "Joke created" });
        } catch (e) {
            console.error(e);
            return response.status(404).json({ error: e.message });
        }
    }
}


// in JokeForm Component: 
import useSWR from "swr";

export default function JokeForm() {
    const { mutate } = useSWR("/api/jokes");
    const onJokeSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const jokeData = Object.fromEntries(formData);
        console.log("jokeData", jokeData);
        const response = await fetch("/api/jokes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(jokeData),
        });
        if (response.ok) {
            mutate();
        }
    };
    return (
        <form onSubmit={onJokeSubmit}>
            <label htmlFor="joke-input">Enter a new joke</label>
            <input type="text" name="joke" id="joke-input" />
            <button>Submit</button>
        </form>
    );
}