import { calculateTimeToEvent } from "@/utils/countdown-utils";
import { type Framework } from "@/utils/framework-utils";
import { useState, useEffect } from "react";
import { TimeUnit } from "./time-unit";

export const CountdowmTimer = ({currentFramework}: {currentFramework : Framework}) => {
    const [countdown, setCountdown] = useState(calculateTimeToEvent())

    useEffect(() => {
     const intervalId = setInterval(() => {
        setCountdown(calculateTimeToEvent())
     },1000)

     return () => clearInterval(intervalId)
    },[])

    return <div className="flex gap-[10px] text-center">
      <TimeUnit 
      label="DAYS"
      value={countdown.days}
      currentFramework={currentFramework}
      />
      <TimeUnit 
      label="HOURS"
      value={countdown.hours}
      currentFramework={currentFramework}
      />
      <TimeUnit 
      label="MINUTES"
      value={countdown.minutes}
      currentFramework={currentFramework}
      />
      <TimeUnit 
      label="SECONDS"
      value={countdown.seconds}
      currentFramework={currentFramework}
      />
    </div>
}