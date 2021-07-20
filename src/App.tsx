import { spawn, Thread, Worker } from "threads";
// @ts-ignore
import workerURL from "threads-plugin/dist/loader?name=gitWorker!./workers/add.ts";

async function runWorker() {
  const add = await spawn(new Worker(workerURL));
  const sum = await add(2, 3);

  console.log(`2 + 3 = ${sum}`);

  await Thread.terminate(add);
}

const App = () => {
  runWorker().catch(console.error);
  return <h1>Basic TypeScript App</h1>;
};

export default App;
