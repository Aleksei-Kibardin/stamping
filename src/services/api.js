const getRes = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const json = await response.json();
    return json;
  };
  console.log(getRes("https://static-maps.yandex.ru/v1?ll=30.358134,59.925083&spn=0.016457,0.00619&apikey=625b26d9-342a-4cd9-a91b-6af62e134a40"))