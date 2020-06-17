async function promise() {
  const fetcher = await fetch('data.json');
  const data = await fetcher.json();
  
  return {
    data
  }
}

promise().then(result => console.log(result));