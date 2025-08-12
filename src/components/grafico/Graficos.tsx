import BarChart from "./BarChart"
import PiesChart from "./PiesChart"


function Graficos() {
  return (
    <>
    <div className="flex w-5xl items-center justify-center">
        <div className="flex w-full">
            <BarChart />
        </div>
        <div className="flex w-full">
            <PiesChart />
        </div>
        <div className="flex w-full">
            <PiesChart />
        </div>
    </div>
    </>
  )
}

export default Graficos