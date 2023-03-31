import { client, dbPracticeCollection } from "./mongoConnect.js";

function addTwoNums(numOne, numTwo) {
  return numOne + numTwo;
}

const answer = addTwoNums(3, 5);
console.log(answer);

const addDatabase = async () => {
  const myDatabase = {
    name: "Liz",
    connectedADatabase: true,
    isHappyForHerself: true,
  };
  try {
    await client.connect();
    const addedDatabase = await dbPracticeCollection.insertOne(myDatabase);
    console.log(addedDatabase);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }
};

addDatabase();
