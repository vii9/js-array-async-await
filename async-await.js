import fetch from "node-fetch";

const loadData = async () => {
  try {
    // const urlMain = `https://jsonplaceholder.typicode.com/users/1`;
    // const res = await fetch(urlMain);
    // const dataRes = await res.json();
    // return dataRes;

    const url1 = `https://jsonplaceholder.typicode.com/todos/5`;
    const url2 = `https://jsonplaceholder.typicode.com/users/3`;
    const url3 = `https://jsonplaceholder.typicode.com/posts/51`;

    const results = await Promise.all([
      fetch(url1),
      fetch(url2),
      fetch(url3)
    ]);

    return await Promise.all(
      results.map(res => res.json())
    );

    //return finalData;  

  } catch (error) {
    console.error(error);
  }
};


(async () => {
  const data = await loadData();
  console.log(data);
})();
