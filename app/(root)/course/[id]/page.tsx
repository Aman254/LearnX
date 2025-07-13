import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Play,
  BookOpen,
  Clock,
  Users,
  Star,
  Github,
  Download,
} from "lucide-react";

export default function Course() {
  return (
    <div className="flex-1 space-y-6 p-6">
      {/* Course Header */}

      {/* Course Preview Section */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Build a Netflix clone</CardTitle>
            <Button variant="ghost" size="sm">
              <Play className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-100 rounded-lg p-6 mb-4">
            <div className="flex items-center justify-center h-32">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-2"></div>
                <p className="text-sm text-gray-600">VIBE.AI DEMO</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Course Info Section */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">
                  21 Chapters
                </span>
              </div>
              <CardTitle className="text-2xl">
                Build And Deploy A Lovable Clone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                In this course, we&apos;re building an AI-powered app builder
                from start to finish. You&apos;ll learn how to generate
                full-stack applications from simple prompts using programmable
                AI agents powered by Inngest. We&apos;ll use models like OpenAI,
                Anthropic, and Grok to handle code generation, and execute
                everything inside secure cloud sandboxes with E2B and Docker.
                We&apos;ll also cover the agent architecture, background job
                orchestration, project dashboard, authentication and billing
                with Clerk, and a full Git workflow with AI-assisted PR reviews
                from CodeRabbit. Built with Next.js 15, React 19, Tailwind v4,
                and a fully modern AI-first toolchain.
              </CardDescription>

              <div className="flex items-center gap-6 mt-6 pt-6 border-t">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">8h 30m</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">2,847 students</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm text-gray-600">
                    4.9 (324 reviews)
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Start Learning Card */}
          <Card className="bg-slate-900 text-white">
            <CardHeader>
              <CardTitle className="text-xl">
                Ready to start building?
              </CardTitle>
              <CardDescription className="text-slate-300">
                Track your progress, watch with subtitles, change quality &
                speed, and more.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-white text-slate-900 hover:bg-gray-200 cursor-pointer">
                <Play className="w-4 h-4 mr-2" />
                Start watching
              </Button>
            </CardContent>
          </Card>

          {/* Download Source Code */}
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <Github className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                <p className="text-sm text-gray-600 mb-3">
                  Download source code
                </p>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Course Features */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What you&apos;ll learn</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-sm">
                  Build AI-powered applications from scratch
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-sm">Master Next.js 15 and React 19</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-sm">Implement secure cloud sandboxes</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-sm">Deploy with modern CI/CD workflows</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
