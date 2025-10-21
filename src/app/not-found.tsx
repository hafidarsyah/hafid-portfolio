"use client";

import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import Link from "next/link";

export default function NotFound() {
  return (
    <Empty className="min-h-screen">
      <EmptyHeader>
        <EmptyTitle>404 - Page Not Found</EmptyTitle>
        <EmptyDescription>
          The page you are looking for does not exist.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>
          <Link href="/">Go back home</Link>
        </Button>
      </EmptyContent>
    </Empty>
  );
}
