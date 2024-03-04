import { Button } from "@/components/ui/button"
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import PsychologList from "./_components/PsychologList";

export default function Home() {
  return (
   <div>
      <Hero/>
      <CategorySearch/>
      <PsychologList/>
   </div>
  );
}
