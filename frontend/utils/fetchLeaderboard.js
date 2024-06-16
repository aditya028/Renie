export default async function fetchLeaderboard() {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/lederboard");
      const data = await res.json();
      let result = [];
      for (let i = 0 ; i < data.length ; i++) {
        result.push({
          rank: i+1,
          name: "user_"+data[i].UserID,
          reward: data[i].Count+ " USD",
        });
      }
      return result  ;   
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  }
  