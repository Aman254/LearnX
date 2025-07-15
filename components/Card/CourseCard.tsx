import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Clock, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  duration: number | string;
  lessons: number;
  image: string;
}

export default function Component({ title, duration, lessons, image }: Props) {
  return (
    <Link href="/course/1" className="group block">
      <Card className="w-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white border-0 shadow-sm group-hover:shadow-2xl">
        <CardHeader className="p-0 relative">
          <div className="relative overflow-hidden rounded-t-lg">
            <Image
              src={image || "/placeholder.svg"}
              alt="Course thumbnail"
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              width={400}
              height={208}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          <div className="space-y-3">
            <h3 className="font-bold text-xl text-gray-900 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors duration-200">
              {title}
            </h3>
          </div>
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center space-x-2 text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full text-sm font-medium">
              <Clock className="h-4 w-4 text-blue-500" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 bg-gray-50 px-3 py-1.5 rounded-full text-sm font-medium">
              <BookOpen className="h-4 w-4 text-green-500" />
              <span>{lessons} lessons</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
