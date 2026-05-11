import { BouncingDVD } from "@/components/bouncing-dvd";
import { ThemeToggle } from "@/components/theme-toggle";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <BouncingDVD />

      <div className="relative z-20 max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-16">
          <div className="flex items-start justify-between mb-4">
            <h1 className="text-4xl font-bold tracking-tight">Hugh Henry</h1>
            <ThemeToggle />
          </div>
          <p className="text-lg text-muted-foreground mb-6">
            Developer. Dog lover. Tracksuit wearer.
          </p>
          <nav className="flex gap-4">
            <Link
              href="https://github.com/Mhudlark"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/hugh-henry-0ab6b31b5/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:hughcthenry@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span className="sr-only">Email</span>
            </Link>
          </nav>
        </header>

        {/* About Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The title says it all. I&apos;m a developer, I love dogs, and I
              wear tracksuits.
            </p>
            <p>
              As a developer I&apos;ve worked with a variety of languages and
              frameworks, but I&apos;m most experienced in web development,
              particularly with React and Node. My love of organisation extends
              into my work as I&apos;m a big fan of clean and well structured
              code.
            </p>
            <p>
              When I need a break I love to go outside for walks and to play
              sport. I&apos;m always keen for a kick of the footy, a hit of
              squash or a quick bouldering session.
            </p>
          </div>
        </section>

        {/* My Work Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">My Work</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
            <p>
              I&apos;ve worked on consulting projects with 15+ people on the
              team, and I&apos;ve also worked on smaller projects where I
              regularly interacted with clients directly.
            </p>
            <p>
              Please have a look at my{" "}
              <Link
                href="https://www.linkedin.com/in/hugh-henry-0ab6b31b5/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
              >
                LinkedIn
              </Link>{" "}
              if you&apos;d like to know more.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="space-y-8">
            {/* TimeFlies */}
            <article className="rounded-lg border border-border bg-card/50 backdrop-blur-sm overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src="/images/projects/time-flies-1.png"
                  alt="TimeFlies app screenshot"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">TimeFlies</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Jan 2023 - Present
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Plan events and meetings — create and share a plan</li>
                  <li>
                    Collect availability from participants and pick a time
                  </li>
                  <li>Built by hand (pre-AI)</li>
                </ul>
              </div>
            </article>

            {/* MLVET */}
            <article className="rounded-lg border border-border bg-card/50 backdrop-blur-sm overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src="/images/projects/mlvet/MLVET.png"
                  alt="MLVET Editor page"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">MLVET</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Desktop video editing tool</li>
                  <li>ML cloud and local transcription of video content</li>
                  <li>Edit the transcription to edit the output video</li>
                  <li>Live preview of output video</li>
                  <li>Export to MP4 and EDL file formats</li>
                </ul>
              </div>
            </article>

            {/* Lah */}
            <article className="rounded-lg border border-border bg-card/50 backdrop-blur-sm overflow-hidden">
              <div className="grid grid-cols-3 gap-1">
                <img
                  src="/images/projects/lah/screenshot1.png"
                  alt="Lah gameplay screenshot 1"
                  className="w-full h-full object-contain aspect-[9/16]"
                />
                <img
                  src="/images/projects/lah/screenshot2.png"
                  alt="Lah gameplay screenshot 2"
                  className="w-full h-full object-contain aspect-[9/16]"
                />
                <img
                  src="/images/projects/lah/screenshot3.png"
                  alt="Lah gameplay screenshot 3"
                  className="w-full h-full object-contain aspect-[9/16]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Lah</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Lah is a mobile game hosted on the Google Play Store. It is a
                  2D platformer/endless jumping game where players must climb
                  blocks to evade the lava rising from below. The game is
                  written in C# and was built using Unity.
                </p>
                <h4 className="font-medium text-sm mb-2">Challenges I faced</h4>
                <ul className="space-y-1 text-muted-foreground text-sm list-disc list-inside">
                  <li>Collision detection using raytracing</li>
                  <li>Music creation</li>
                  <li>UI and sprite design</li>
                  <li>Creating 3D look with 2D sprites</li>
                </ul>
              </div>
            </article>

            {/* My Game of Life */}
            <article className="rounded-lg border border-border bg-card/50 backdrop-blur-sm overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src="/images/projects/game-of-life-1.png"
                  alt="Game of Life simulation screenshot"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">My Game of Life</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Conway's Game of Life and several variations</li>
                  <li>Custom rule sets and evolving rules over time</li>
                  <li>
                    Explorations toward higher-dimensional / ML-driven rules
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Hugh Henry. Built with Next.js.
          </p>
        </footer>
      </div>
    </main>
  );
}
