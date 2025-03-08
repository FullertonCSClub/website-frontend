import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

/**
 * Main navigation component for the CS Club website
 * Provides navigation links to different sections of the site
 */
export function MainNav() {
  return (
    <NavigationMenu className="text-gray-200">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-gray-200 hover:text-white hover:bg-gray-800")}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-200 hover:text-white hover:bg-gray-800">Problems</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] bg-[#1e293b] border border-gray-700">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-600/50 to-blue-600 p-6 no-underline outline-none focus:shadow-md"
                    href="/problems"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium text-white">
                      Problem Solving
                    </div>
                    <p className="text-sm leading-tight text-white/90">
                      Challenge yourself with coding problems and improve your skills.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <Link href="/problems/easy" legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white">
                    <div className="text-sm font-medium leading-none">Easy Problems</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                      Start with beginner-friendly coding challenges.
                    </p>
                  </NavigationMenuLink>
                </Link>
              </li>
              <li>
                <Link href="/problems/medium" legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white">
                    <div className="text-sm font-medium leading-none">Medium Problems</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                      Intermediate challenges to test your problem-solving skills.
                    </p>
                  </NavigationMenuLink>
                </Link>
              </li>
              <li>
                <Link href="/problems/hard" legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white">
                    <div className="text-sm font-medium leading-none">Hard Problems</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                      Advanced problems for experienced programmers.
                    </p>
                  </NavigationMenuLink>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-gray-200 hover:text-white hover:bg-gray-800">Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-[#1e293b] border border-gray-700">
              <li>
                <Link href="/videos" legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white">
                    <div className="text-sm font-medium leading-none">Videos</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                      Watch tutorials and recordings from our workshops.
                    </p>
                  </NavigationMenuLink>
                </Link>
              </li>
              <li>
                <Link href="/gallery" legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white">
                    <div className="text-sm font-medium leading-none">Photo Gallery</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                      Browse photos from our club events and activities.
                    </p>
                  </NavigationMenuLink>
                </Link>
              </li>
              <li>
                <Link href="/forum" legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white">
                    <div className="text-sm font-medium leading-none">Forum</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                      Discuss programming topics with fellow club members.
                    </p>
                  </NavigationMenuLink>
                </Link>
              </li>
              <li>
                <Link href="/events" legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white">
                    <div className="text-sm font-medium leading-none">Events</div>
                    <p className="line-clamp-2 text-sm leading-snug text-gray-400">
                      Stay updated with upcoming club events and activities.
                    </p>
                  </NavigationMenuLink>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link href="/about" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-gray-200 hover:text-white hover:bg-gray-800")}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
