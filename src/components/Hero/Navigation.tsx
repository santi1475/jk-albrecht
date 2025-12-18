// src/components/sections/Hero/Navigation.tsx
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NAV_ITEMS } from "./hero-data"

interface NavigationProps {
    isMenuOpen: boolean;
    onToggleMenu: () => void;
}

export function Navigation({ isMenuOpen, onToggleMenu }: NavigationProps) {
    return (
        <nav className="relative z-50 flex items-center justify-between px-6 py-6 lg:px-12">
            {/* Logo */}
            <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(38,29,12,1)] p-2">
                    <img
                        src="src/assets/Image/logo.png"
                        alt="JK & Albercht Logo"
                        className="h-full w-auto object-contain"
                    />
                </div>
                <span className="text-white font-bold text-sm lg:text-lg max-w-50 lg:max-w-none">
                    JK & Albercht Construcciones Generales
                </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
                {NAV_ITEMS.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="text-orange-100 hover:text-orange-400 transition-colors font-medium"
                    >
                        {item.label}
                    </a>
                ))}
                <Button
                    variant="outline"
                    className="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-5"
                >
                    Contacto
                </Button>
            </div>

            {/* Mobile Toggle Button */}
            <button
                onClick={onToggleMenu}
                className="md:hidden z-50 text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </nav>
    )
}