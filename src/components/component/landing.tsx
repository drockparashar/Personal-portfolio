
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Landing() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <CodeIcon className="h-6 w-6" />
          <span className="sr-only">Pranshu's Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Projects
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Skills
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section id="hero" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Pranshu Parashar</h1>
                  <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Web Developer</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    I'm a skilled web developer with a passion for creating beautiful and functional websites. I
                    specialize in front-end development, using the latest technologies to deliver exceptional user
                    experiences.
                  </p>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                alt="John Doe"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                width="550"
                height="550"
              />
            </div>
          </div>
        </section>
        <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Check out some of my best work and see what I can do for you.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Project 1"
                  className="aspect-[3/2] w-full overflow-hidden rounded-t-xl object-cover"
                  width="300"
                  height="200"
                />
                <CardContent className="space-y-2 p-4">
                  <h3 className="text-xl font-bold">Project 1</h3>
                  <p className="text-muted-foreground">A modern and responsive website for a local business.</p>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Project 2"
                  className="aspect-[3/2] w-full overflow-hidden rounded-t-xl object-cover"
                  width="300"
                  height="200"
                />
                <CardContent className="space-y-2 p-4">
                  <h3 className="text-xl font-bold">Project 2</h3>
                  <p className="text-muted-foreground">A custom web application for managing client data.</p>
                </CardContent>
              </Card>
              <Card>
                <img
                  src="/placeholder.svg"
                  alt="Project 3"
                  className="aspect-[3/2] w-full overflow-hidden rounded-t-xl object-cover"
                  width="300"
                  height="200"
                />
                <CardContent className="space-y-2 p-4">
                  <h3 className="text-xl font-bold">Project 3</h3>
                  <p className="text-muted-foreground">A sleek and user-friendly e-commerce website.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I have a diverse set of skills that allow me to deliver high-quality web solutions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 sm:grid-cols-3 lg:grid-cols-4 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-2">
                <HashIcon className="h-12 w-12" />
                <h3 className="text-xl font-bold">HTML</h3>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <CodepenIcon className="h-12 w-12" />
                <h3 className="text-xl font-bold">CSS</h3>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <CodepenIcon className="h-12 w-12" />
                <h3 className="text-xl font-bold">JavaScript</h3>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <CodepenIcon className="h-12 w-12" />
                <h3 className="text-xl font-bold">React</h3>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <WindIcon className="h-12 w-12" />
                <h3 className="text-xl font-bold">Tailwind CSS</h3>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <NetworkIcon className="h-12 w-12" />
                <h3 className="text-xl font-bold">Node.js</h3>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <GitGraphIcon className="h-12 w-12" />
                <h3 className="text-xl font-bold">Git</h3>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <FigmaIcon className="h-12 w-12" />
                <h3 className="text-xl font-bold">Figma</h3>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'd love to hear from you! Feel free to reach out with any questions or inquiries.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col gap-4">
                  <Input type="text" placeholder="Name" className="max-w-lg flex-1" />
                  <Input type="email" placeholder="Email" className="max-w-lg flex-1" />
                  <Textarea placeholder="Message" className="max-w-lg flex-1" />
                  <Button type="submit" className="self-end">
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 John Doe. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function CodeIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function CodepenIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  )
}


function FigmaIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  )
}


function GitGraphIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  )
}


function HashIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="9" y2="9" />
      <line x1="4" x2="20" y1="15" y2="15" />
      <line x1="10" x2="8" y1="3" y2="21" />
      <line x1="16" x2="14" y1="3" y2="21" />
    </svg>
  )
}


function NetworkIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  )
}


function WindIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  )
}
