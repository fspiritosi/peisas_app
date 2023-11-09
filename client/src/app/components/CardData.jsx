import Link from "next/link";
import { TrendingDownIcon, TrendingUpIcon} from "lucide-react"

function CardData({data}) {
  return (
    <div className="bg-white bg-opacity-90 p-6 rounded-md md:flex md:justify-between gap-4 w-80">
      <div className="flex flex-col gap-4 items-center justify-between">
        <Link href={data.link}>
          <div className="w-8 h-8 cursor-pointer text-center">{data.icon}</div>
        </Link>
        <p className="text-xs">{data.name}</p>
      </div>
      <div className="flex flex-col gap-4 justify-between">
        <h4>$ 999</h4>
        <div className="flex gap-2 items-center">
          <TrendingUpIcon className="text-green-400 w-4 h-4" />
          <p className="text-xs">9,9%</p>
        </div>
      </div>
    </div>
  );
}

export default CardData