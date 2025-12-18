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
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-orange-500 bg-linear-to-br from-orange-600 to-orange-700">
                    <span className="font-bold text-white text-xl">JK</span>
                </div>
                <span className="text-white font-medium text-base lg:text-lg max-w-50 lg:max-w-none">
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
                    className="border-2 border-orange-500 bg-transparent text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-6"
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