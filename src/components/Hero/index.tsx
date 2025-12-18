// src/components/sections/Hero/index.tsx
"use client"

import { useState } from "react"
import { HeroBackground } from "./HeroBackground"
import { Navigation } from "./Navigation"
import { MobileMenu } from "./MobileMenu"
import { HeroContent } from "./HeroContent"

export function HeroSection() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
    const closeMenu = () => setIsMenuOpen(false)

    return (
        <div className="relative min-h-screen w-full overflow-hidden flex flex-col">
            {/* 1. Fondo (Carrusel) */}
            <HeroBackground />

            {/* 2. Barra de Navegación */}
            <Navigation
                isMenuOpen={isMenuOpen}
                onToggleMenu={toggleMenu}
            />

            {/* 3. Menú Móvil (Overlay) */}
            <MobileMenu
                isOpen={isMenuOpen}
                onClose={closeMenu}
            />

            {/* 4. Texto principal y botones */}
            <HeroContent />
        </div>
    )
}