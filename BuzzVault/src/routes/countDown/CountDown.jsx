"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function CountDown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-01-01T00:00:00").getTime()

    const interval = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Time Capsule Countdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-4 text-center">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">{timeLeft.days}</span>
            <span className="text-sm text-muted-foreground">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">{timeLeft.hours}</span>
            <span className="text-sm text-muted-foreground">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">{timeLeft.minutes}</span>
            <span className="text-sm text-muted-foreground">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl font-bold">{timeLeft.seconds}</span>
            <span className="text-sm text-muted-foreground">Seconds</span>
          </div>
        </div>
        <Separator className="my-4" />
        <p className="text-center text-sm text-muted-foreground">
          Until January 1, 2025
        </p>
      </CardContent>
    </Card>
  )
}