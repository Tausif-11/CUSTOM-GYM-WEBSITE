
import { Clock, User, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ScheduleItem {
  time: string;
  day: string;
  trainer: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
}

interface ScheduleTableProps {
  schedule: ScheduleItem[];
  title: string;
}

const ScheduleTable = ({ schedule, title }: ScheduleTableProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "text-accent bg-accent/10";
      case "Intermediate":
        return "text-primary bg-primary/10";
      case "Advanced":
        return "text-destructive bg-destructive/10";
      default:
        return "text-muted-foreground bg-muted/10";
    }
  };

  const groupedSchedule = schedule.reduce((acc, item) => {
    if (!acc[item.day]) {
      acc[item.day] = [];
    }
    acc[item.day].push(item);
    return acc;
  }, {} as Record<string, ScheduleItem[]>);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground">
            Choose the perfect time that fits your schedule
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:block">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-center">Weekly Schedule</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4 font-semibold">Day</th>
                      <th className="text-left p-4 font-semibold">Time</th>
                      <th className="text-left p-4 font-semibold">Trainer</th>
                      <th className="text-left p-4 font-semibold">Level</th>
                      <th className="text-left p-4 font-semibold">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {days.map((day) => {
                      const daySchedule = groupedSchedule[day] || [];
                      return daySchedule.map((item, index) => (
                        <tr key={`${day}-${index}`} className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                          <td className="p-4 font-medium">{index === 0 ? day : ""}</td>
                          <td className="p-4">
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-2 text-primary" />
                              {item.time}
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-2 text-primary" />
                              {item.trainer}
                            </div>
                          </td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(item.level)}`}>
                              {item.level}
                            </span>
                          </td>
                          <td className="p-4">
                            <div className="flex items-center">
                              <BarChart3 className="w-4 h-4 mr-2 text-primary" />
                              {item.duration}
                            </div>
                          </td>
                        </tr>
                      ));
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-4">
          {days.map((day) => {
            const daySchedule = groupedSchedule[day] || [];
            if (daySchedule.length === 0) return null;

            return (
              <Card key={day} className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-lg">{day}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {daySchedule.map((item, index) => (
                    <div key={index} className="bg-muted/20 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-primary" />
                          <span className="font-medium">{item.time}</span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(item.level)}`}>
                          {item.level}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2 text-primary" />
                          <span className="text-sm">{item.trainer}</span>
                        </div>
                        <div className="flex items-center">
                          <BarChart3 className="w-4 h-4 mr-2 text-primary" />
                          <span className="text-sm">{item.duration}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScheduleTable;
