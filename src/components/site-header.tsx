import Link from "next/link";
import { MainNav } from "@/components/main-nav";
import { Button } from "@/components/ui/button";

/**
 * Site header component for the CS Club website
 * Contains the logo, main navigation, and authentication buttons
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-[#0f172a]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0f172a]/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="hidden font-bold sm:inline-block text-white">
            Fullerton CS Club
          </span>
        </Link>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <MainNav />
          </div>
          <nav className="flex items-center space-x-2">
            <Button asChild variant="outline" size="sm" className="border-gray-700 text-gray-200 hover:bg-gray-800 hover:text-white">
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/register">Sign Up</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
