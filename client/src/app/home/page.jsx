
import CardData from "../components/CardData";
import TaskTable from "../components/TaskTable";
import { Icons } from "../utils/Logos";

function HomePage() {
    
    return (
      <div className="flex w-full flex-col gap-4">
        <div className="flex w-full justify-between px-16">
          <CardData data={Icons[0]} />
          <CardData data={Icons[1]} />
          <CardData data={Icons[2]} />
          <CardData data={Icons[3]} />
        </div>
        <div className="px-16">
          <TaskTable/>
        </div>
      </div>
    );
}

export default HomePage