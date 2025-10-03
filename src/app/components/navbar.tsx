import { Link, NavigationMenuItem, NavigationMenuLink } from "@radix-ui/react-navigation-menu";

export function Navbar() {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link href="/docs">Documentation</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  )
}
