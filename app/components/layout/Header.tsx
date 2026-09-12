import Link from "next/link";
import { User, ArrowUpRight } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1440px] mx-auto px-margin-sm lg:px-margin flex items-center justify-between">
        <div className="flex items-center gap-space-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="Voltra Technical Sports Emblem" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1VwCjxn3mi1NAO3bIhv7ZtKmjCAJhSfvBx3WHRBqaTn4q4qpRH5PDioIswOEu433NDIhyNSfyhnv4hsPsCNcSFTXdn75YbgHdooyUDjh7PGHOZJSLuZDViPDGP5L_7RK-_MS02iynj-OUymlPEC_OFmfpKNhp9QSc8kjvMJNIvj5WYtg8sVMvJ-g-KHnEeJlrFGoPcwZnhohuFZkQKOEPHlaaBkTF1OywL2_6WNYJgWoUwLEZMSic4m1rbb" />
          <Link href="#" className="flex items-baseline font-headline-md text-headline-md tracking-tight text-on-surface uppercase select-none">
            <span>VOLTRA</span><span className="text-primary-container text-headline-lg leading-none">.</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-space-lg font-label-caps text-label-caps uppercase">
          <Link href="#" className="transition-colors text-on-surface font-bold underline decoration-primary-container decoration-2 underline-offset-8">HOME</Link>
          <Link href="#catalog" className="text-on-surface-variant hover:text-on-surface transition-colors">KOLEKSI JERSEY</Link>
          <Link href="#custom-flow" className="text-on-surface-variant hover:text-on-surface transition-colors">CUSTOM TIM</Link>
          <Link href="#tech-specs" className="text-on-surface-variant hover:text-on-surface transition-colors">TENTANG LABS</Link>
        </nav>
        <div className="flex items-center gap-space-md">
          <Link href="https://wa.me/6281234567890?text=Halo%20VOLTRA%2C%20saya%20mau%20konsultasi%20custom%20jersey%20squad" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-space-sm pl-space-md pr-space-xs py-space-xs bg-inverse-surface text-inverse-on-surface rounded-full font-label-caps text-label-caps uppercase tracking-wider hover:bg-on-surface transition-all group">
            <span className="group-hover:text-primary-container transition-colors">PESAN VIA WHATSAPP</span>
            <span className="w-7 h-7 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center">
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </Link>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <User className="text-on-primary w-4 h-4" />
          </div>
        </div>
      </div>
    </header>
  );
}
