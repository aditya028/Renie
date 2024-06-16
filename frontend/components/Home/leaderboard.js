import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import fetchLeaderboard from "@/utils/fetchLeaderboard";

export default function Leaderboard() {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchRespData(){
      const res = await fetchLeaderboard();
      setData(res);
    }
    fetchRespData();
  },[])

    return (
        <Table>
          <TableCaption>Top Renie users</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Ranking</TableHead>
              <TableHead className="text-center">Name</TableHead>
              <TableHead className="text-center">Rewards</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.rank}>
                <TableCell className="text-center" >{item.rank}</TableCell>
                <TableCell className="text-center">{item.name}</TableCell>
                <TableCell className="text-center">{item.reward}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          
        </Table>
      )
}
