"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger onClick={() => setIsOpen(!isOpen)}>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent side="right">
          <Link href="/" onClick={handleLinkClick}>
            <Image
              src="/logo-basair.png"
              alt="logo-basair"
              width={85}
              height={85}
            />
          </Link>
          <nav className="flex flex-col gap-3 lg:gap-4 mt-6">
            <Link
              href="/#about-section"
              className="text-foreground/60 transition-colors hover:text-foreground"
              onClick={handleLinkClick}
            >
              من نحن
            </Link>
            <Link
              href="/#activities-section"
              className="text-foreground/60 transition-colors hover:text-foreground"
              onClick={handleLinkClick}
            >
              الأنشطة
            </Link>
            <Link
              href="https://drive.google.com/file/d/1TbSY44MyO6CBHdi32rDUyCEbJSBULFHP/view"
              className="text-foreground/60 transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
            >
              ملف النادي
            </Link>
            <Link
              href="/#contact-section"
              className="text-foreground/60 transition-colors hover:text-foreground"
              onClick={handleLinkClick}
            >
              تواصل معنا
            </Link>        
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
