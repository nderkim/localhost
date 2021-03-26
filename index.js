(async () => {
  const res = await fetch("http://localhost:3000/hello");
  const text = await res.text();
  console.log(text);
})();
