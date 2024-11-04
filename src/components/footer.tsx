import Link from "next/link";
import SvgDivider from "./svg-divider";
import ContactUs from "./contact-us";

export default function Footer() {
  return (
    <section className="relative w-full bg-gradient-to-br from-primary to-black overflow-hidden">
      <SvgDivider position="top" />
      <footer className="text-muted-foreground pb-12 pt-32 md:pt-44 md:pb-12">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-white">
          <div className="grid gap-4">
            <h3 className="text-lg font-bold">لجنة الذكور</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="https://www.facebook.com/profile.php?id=61564990312686"
                className="flex items-center gap-2 hover:underline"
                prefetch={false}
              >
                <FacebookIcon className="w-5 h-5" />
                <span>فيسبوك</span>
              </Link>
              <Link
                href="https://whatsapp.com/channel/0029VaoJq9pJP2167dZn730K"
                className="flex items-center gap-2 hover:underline"
                prefetch={false}
              >
                <Whatsapp  />
                <span>واتساب</span>
              </Link>
              <Link
                href="https://www.instagram.com/basair.club/"
                className="flex items-center gap-2 hover:underline"
                prefetch={false}
              >
                <InstagramIcon className="w-5 h-5" />
                <span>إنستغرام</span>
              </Link>
            </div>
          </div>
          <div className="grid gap-4">
            <h3 className="text-lg font-bold">لجنة الإناث</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="https://www.facebook.com/profile.php?id=61565423158172"
                className="flex items-center gap-2 hover:underline"
                prefetch={false}
              >
                <FacebookIcon className="w-5 h-5" />
                <span>فيسبوك</span>
              </Link>
              <Link
                href="https://whatsapp.com/channel/0029Vamj2F18vd1IJDcDfh3c"
                className="flex items-center gap-2 hover:underline"
                prefetch={false}
              >
                <Whatsapp />
                <span>واتساب</span>
              </Link>
              <Link
                href="https://www.instagram.com/basairclub.inat/"
                className="flex items-center gap-2 hover:underline"
                prefetch={false}
              >
                <InstagramIcon className="w-5 h-5" />
                <span>إنستغرام</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="container max-w-7xl mt-8 flex items-center justify-between text-white">
          <p className="text-sm">&copy; 2024 نادي بصائر. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </section>
  );
}

function FacebookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}




function Whatsapp() {
  return (
<svg viewBox="0 0 24 24" width="22"
      height="22" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="#ffffff"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" fill="#ffffff"></path> </g></svg>  )
}