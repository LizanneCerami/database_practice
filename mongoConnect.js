import { MongoClient} from "mongodb";
import { MONGOURI } from "./credentials.js";

export const client = new MongoClient(MONGOURI)

const database = client.db('dbPractice');

export const dbPracticeCollection = database.collection("dbPractice")