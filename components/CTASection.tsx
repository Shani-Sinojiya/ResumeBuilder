import { useRouter } from "next/router";

function CTASection() {
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-cyan-400 leading-loose text-base">
          Mesume Resume is a free and robust resume builder that’s built to make
          the mundane tasks of creating, updating and sharing your resume as
          easy as 1, 2, 3. With this app, you can create multiple resumes, share
          them with recruiters through a unique link and print as PDF, all for
          free, no advertisements, without losing the integrity and privacy of
          your data.
        </p>
      </div>
    </div>
  );
}

export default CTASection;
