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
  console.log(image);
  return (
    <Link href="/course/1">
      <Card className="w-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white border-gray-200 cursor-pointer">
        <CardHeader className="p-0">
          <div className="relative">
            <Image
              src={image}
              alt="Course thumbnail"
              className="w-full h-48 object-cover"
              width={200}
              height={100}
            />
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 leading-tight">
              {title}
            </h3>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span> {duration}hours</span>
            </div>
            <div className="flex items-center space-x-1">
              <BookOpen className="h-4 w-4" />
              <span>{lessons} lessons</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
