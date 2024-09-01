import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent side="right">
          <Link href="/">
            <Image
              src="/logo-basair.png"
              alt="logo-basair"
              width={85}
              height={85}
            />
          </Link>
          <nav className="flex flex-col gap-3 lg:gap-4 mt-6">
            <Link
              href="/"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              الرئيسية
            </Link>
            <Link
              href="#about-section"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              من نحن
            </Link>
            <Link
              href="/activities"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              الأنشطة
            </Link>
            <Link
              href="https://drive.google.com/file/d/1TbSY44MyO6CBHdi32rDUyCEbJSBULFHP/view"
              className="text-foreground/60 transition-colors hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              ملف النادي
            </Link>
            <Link
              href="/contact"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              تواصل معنا
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}