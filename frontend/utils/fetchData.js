export default async function fetchData() {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/bin");
    const data = await res.json();
    const result = {
      numOfBins: data.length,
      bottle_count: 0,
      can_count: 0,
      paper_count: 0,
      plastic_count: 0,
      total:0,
    };
    for (const item of data) {
      result.bottle_count += item.bottle_count;
      result.can_count += item.can_count;
      result.paper_count += item.paper_count;
      result.plastic_count += item.plastic_count;
    }
    result.total = result.bottle_count + result.can_count + result.paper_count + result.plastic_count;
    return result;    
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}
