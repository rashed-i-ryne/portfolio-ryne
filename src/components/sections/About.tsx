// src/components/sections/About.tsx
import Image from "next/image";
import profileImage from "../../../public/formal.jpeg";
import { SectionHeader } from "../ui/SectionHeader";

export const About = () => {
  return (
    <section id="about" className="bg-surface px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeader title="ABOUT ME" />

        <div className="mt-12 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Profile Image */}
          <div className="relative mx-auto w-full max-w-md overflow-hidden border-2 border-primary/10 bg-background">
            <Image
              src={profileImage}
              alt="Rashedul Islam - Full-Stack Web Developer"
              width={768}
              height={1024}
              priority
              className="h-auto w-full object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* About Content */}
          <div className="max-w-2xl text-mainText text-lg leading-relaxed text-justify">
            <p>
              I’m a Full-Stack Web Developer and an Electrical & Electronic
              Engineering student at United International University. I enjoy
              building things, solving problems, and turning ideas into
              practical digital experiences.
            </p>

            <p className="mt-6">
              My work covers both frontend and backend development. I enjoy
              creating clean, responsive interfaces with React and Next.js,
              while also working with APIs, databases, authentication, and
              backend architecture using technologies like Node.js, Express, and
              MongoDB.
            </p>

            <p className="mt-6">
              What drives me most is curiosity. I like understanding why
              something works, breaking complicated problems into smaller
              pieces, and finding better ways to build reliable and maintainable
              applications.
            </p>

            <p className="mt-6">
              I’m continuously learning, experimenting, and working on
              real-world projects to become a better developer. My goal is to
              build products that are not only technically solid, but also
              simple, useful, and enjoyable to use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
