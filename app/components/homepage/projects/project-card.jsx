// @flow strict

import Image from 'next/image';
import Link from 'next/link';

function ProjectCard({ project }) {
  return (
    <Link
      href={project.code || '#'}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition-transform transform hover:scale-[1.03]"
    >
      <div className="relative rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] overflow-hidden shadow-lg">
        {/* Header Dots */}
        <div className="flex flex-row p-3">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-200"></div>
          </div>
        </div>

        {/* Project Title */}
        <p className="text-center text-[#16f2b3] text-lg font-semibold pb-2">
          {project.name}
        </p>

        {/* Project Image */}
        <div className="px-4 pb-4">
          <Image
            src={project.image}
            alt={project.name}
            width={800}
            height={500}
            className="rounded-md w-full h-[200px] object-cover"
          />
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
