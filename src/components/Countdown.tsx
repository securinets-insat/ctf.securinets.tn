import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { CalendarIcon, Clock } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: Date;
  title?: string;
  subtitle?: string;
  className?: string;
}

const Countdown = ({
  targetDate,
  title = "Event Starts In",
  subtitle = "Get ready for the competition!",
  className = ""
}: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [prevTimeLeft, setPrevTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isExpired, setIsExpired] = useState(false);
  const [activeUnit, setActiveUnit] = useState<string | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDate.getTime();
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        const newTimeLeft = { days, hours, minutes, seconds };
        setPrevTimeLeft(timeLeft);
        setTimeLeft(newTimeLeft);
        setIsExpired(false);
      } else {
        setPrevTimeLeft(timeLeft);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsExpired(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  if (isExpired) {
    return (
      <Card className={`bg-gradient-to-br from-primary/10 via-background/80 to-accent/10 backdrop-blur-sm border-primary/20 ${className}`}>
        <CardContent className="p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <CalendarIcon className="h-5 w-5 text-primary" />
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
              Event Started
            </Badge>
          </div>
          <h3 className="text-xl font-semibold text-primary">The Competition is Live!</h3>
          <p className="text-sm text-muted-foreground mt-1">Good luck to all participants!</p>
        </CardContent>
      </Card>
    );
  }



  return (
    <Card className={`bg-gradient-to-br from-primary/5 via-background/90 to-accent/5 backdrop-blur-sm border-primary/20 shadow-lg ${className}`}>
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Clock className="h-5 w-5 text-primary animate-pulse" />
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
              Countdown
            </Badge>
          </div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {timeUnits.map((unit, index) => {
            const prevValue = index === 0 ? prevTimeLeft.days :
                             index === 1 ? prevTimeLeft.hours :
                             index === 2 ? prevTimeLeft.minutes :
                             prevTimeLeft.seconds;
            const hasChanged = unit.value !== prevValue;
            const isActive = activeUnit === unit.label;

            return (
              <TooltipProvider key={unit.label} delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      onClick={() => setActiveUnit(isActive ? null : unit.label)}
                      className={`group relative w-full rounded-xl border backdrop-blur-md shadow-lg overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
                        isActive
                          ? 'border-primary/40 bg-gradient-to-br from-primary/20 via-background/70 to-accent/20'
                          : 'border-primary/20 bg-gradient-to-br from-primary/10 via-background/60 to-accent/10 hover:from-primary/15 hover:to-accent/15'
                      }`}
                    >
                      {/* Glassy sheen */}
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute -top-1/2 left-0 right-0 h-1/2 bg-gradient-to-b from-white/15 to-transparent" />
                      </div>

                      {/* Content */}
                      <div className="relative p-3 grid place-items-center">
                        <div className={`text-2xl md:text-4xl font-bold font-mono tabular-nums transition-transform duration-300 ${hasChanged ? 'countdown-number' : ''} ${isActive ? 'scale-105' : ''}`}>
                          {unit.value.toString().padStart(2, '0')}
                        </div>
                        <div className="text-[10px] md:text-xs font-medium text-muted-foreground mt-2 uppercase tracking-wide">
                          {unit.label}
                        </div>


                      </div>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="px-3 py-2 text-xs">
                    {unit.label === 'Days' && <span>{timeLeft.days} full day{timeLeft.days === 1 ? '' : 's'} remaining</span>}
                    {unit.label === 'Hours' && <span>{timeLeft.hours} hour{timeLeft.hours === 1 ? '' : 's'} in the current day</span>}
                    {unit.label === 'Minutes' && <span>{timeLeft.minutes} minute{timeLeft.minutes === 1 ? '' : 's'} in the current hour</span>}
                    {unit.label === 'Seconds' && <span>{timeLeft.seconds} second{timeLeft.seconds === 1 ? '' : 's'} in the current minute</span>}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </div>


      </CardContent>
    </Card>
  );
};

export default Countdown;
