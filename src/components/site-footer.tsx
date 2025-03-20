import Link from "next/link";

/**
 * Site footer component for the CS Club website
 * Contains links to important pages and social media
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-gray-800 bg-[#0f172a]">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-white">Fullerton CS Club</h3>
            <p className="text-sm text-gray-400">
              A community of passionate programmers, developers, and tech enthusiasts.
            </p>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/problems" className="text-gray-400 hover:text-white">
                  Problem Solving
                </Link>
              </li>
              <li>
                <Link href="/videos" className="text-gray-400 hover:text-white">
                  Video Library
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link href="/forum" className="text-gray-400 hover:text-white">
                  Community Forum
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-white">About</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-white">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/join" className="text-gray-400 hover:text-white">
                  Join the Club
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href="https://github.com/FullertonCSClub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://discord.gg/example" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  Discord
                </a>
              </li>
              <li>
                <a href="https://instagram.com/fullertoncsclub" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/fullerton-college-computer-science-club/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fullerton Computer Science Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
