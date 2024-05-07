async function delayHelloWorld(text: string): Promise<string> {
  console.log('------------------------');
  console.log('function started, please wait for 3 seconds');
  console.log('------------------------');
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return text;
}

// Test
delayHelloWorld('Hello World').then((result) => console.log(result)); // "Hello World" chiqadi 3 soniyadan keyin
