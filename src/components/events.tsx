import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, MapPinIcon, UsersIcon } from 'lucide-react'

// Sample data for events
const events = {
  upcoming: [
    { id: 1, title: "الحفل السنوي", date: "2024-12-15", location: "القاعة الكبرى", attendees: 200, image: "/placeholder.svg?height=200&width=300" },
    { id: 2, title: "نزهة الصيف", date: "2024-07-04", location: "الحديقة المركزية", attendees: 150, image: "/placeholder.svg?height=200&width=300" },
  ],
  past: [
    { id: 3, title: "ورشة العمل الشتوية", date: "2023-12-01", location: "مركز المجتمع", attendees: 75, image: "/placeholder.svg?height=200&width=300" },
    { id: 4, title: "تنظيف الربيع", date: "2024-04-22", location: "شاطئ المدينة", attendees: 100, image: "/placeholder.svg?height=200&width=300" },
  ],
  featured: [
    { id: 5, title: "ماراثون خيري", date: "2024-09-10", location: "وسط المدينة", attendees: 500, image: "/placeholder.svg?height=200&width=300" },
  ],
}

const EventCard = ({ event }: any) => (
  <Card key={event.id} className="mb-4 overflow-hidden">
    <div className="relative h-48 w-full">
      <Image
        src={event.image}
        alt={`صورة لـ ${event.title}`}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <CardHeader>
      <CardTitle>{event.title}</CardTitle>
      <CardDescription className="flex items-center gap-2">
        <CalendarIcon className="h-4 w-4" />
        {new Date(event.date).toLocaleDateString("ar-EG")}
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <MapPinIcon className="h-4 w-4" />
        {event.location}
      </div>
      <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
        <UsersIcon className="h-4 w-4" />
        {event.attendees} مشارك
      </div>
    </CardContent>
  </Card>
)

export default function ClubEventsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">أنشطة النادي</h2>
        <Tabs defaultValue="upcoming" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="upcoming"  className="data-[state=active]:bg-primary data-[state=active]:text-white focus-visible:text-white">القادمة</TabsTrigger>
            <TabsTrigger value="past" className="data-[state=active]:bg-primary data-[state=active]:text-white focus-visible:text-white">السابقة</TabsTrigger>
            <TabsTrigger value="featured" className="data-[state=active]:bg-primary data-[state=active]:text-white focus-visible:text-white">المميزة</TabsTrigger>
          </TabsList>
          <TabsContent value="upcoming">
            <h3 className="mb-4 text-xl font-semibold">الأحداث القادمة</h3>
            {events.upcoming.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </TabsContent>
          <TabsContent value="past">
            <h3 className="mb-4 text-xl font-semibold">الأحداث السابقة</h3>
            {events.past.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </TabsContent>
          <TabsContent value="featured">
            <h3 className="mb-4 text-xl font-semibold">الأحداث المميزة</h3>
            {events.featured.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
            <Badge className="mt-2">حدث خاص</Badge>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
