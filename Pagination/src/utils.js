const paginate = (data) => {
  const items_per_page = 12;
  let newData = [];
  for (let i = 0; i < Math.ceil(data.length / items_per_page); i++) {
    let temp = [];

    for (
      let j = i * items_per_page;
      j < Math.min((i + 1) * items_per_page, data.length);
      j++
    ) {
      temp.push(data[j]);
    }
    newData.push(temp);
  }

  return newData;
};

export default paginate;
