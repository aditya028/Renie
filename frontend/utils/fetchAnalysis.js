export default async function fetchAnalysis() {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/analysis");
      const data = await res.json();
      return data  ;   
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }
  