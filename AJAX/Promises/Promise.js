async function promise() {
  const fetcher = await fetch('data.json');
  const data = await fetcher.json();
  
  return {
    data
  }
}

// async function selalu menghasilkan promise
// jadi meskipiun disini return object data
// fungsi promise() akan menghasilkan promise yang body datanya adalah object data

// makanya fungsi tsb bisa punya .then / thenable, bukan object datanya yg punya method itu tapi memang fungsinya mereturn Promise

promise().then(result => console.log(result));