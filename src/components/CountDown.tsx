"use client"

import dynamic from "next/dynamic"

const endingDate = new Date("2026-07-25T00:00:00Z")
const countdownClass = "font-bold text-yellow-200 text-4xl"

const CountDown = dynamic(() => import("react-countdown"), {
  ssr: false,
  loading: () => <span className={countdownClass}>00:00:00</span>,
})

const CountDownComponent = () => {
  return <CountDown date={endingDate} className={countdownClass} />
}

export default CountDownComponent
