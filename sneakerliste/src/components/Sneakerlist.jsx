import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://htejmndffmhylxrkdava.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0ZWptbmRmZm1oeWx4cmtkYXZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQwODQyNTcsImV4cCI6MjA0OTY2MDI1N30.KTraCyrRtWiBT09CNCgAsVd3xelLX8IbLdSejnDPYNE");

function Sneakerlist() {
  const [sneaker, setSneaker] = useState([]);

  useEffect(() => {
    getSneaker();
  }, []);

  async function getSneaker() {
    const { data } = await supabase.from("sneaker").select();
    setSneaker(data);
  }

  return (
    <ul>
      {sneaker.map((sneaker) => (
        <li key={sneaker.model}>{sneaker.model}</li>
      ))}
    </ul>
  );
}

export default Sneakerlist;