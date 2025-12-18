"use client"

import { useState, useEffect } from "react"
import { CAROUSEL_IMAGES } from "./hero-data"

export function HeroBackground() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <div className="absolute inset-0 z-0">
                {CAROUSEL_IMAGES.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <img
                            src={image || "/placeholder.svg"}
                            alt={`Construcción ${index + 1}`}
                            className="h-full w-full object-cover"
                        />
                    </div>
                ))}
                {/* Gradientes */}
                <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-black/40" />
            </div>

            {/* Indicadores (Dots) */}
            <div className="absolute bottom-8 right-8 z-20 flex gap-2">
                {CAROUSEL_IMAGES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-2 rounded-full transition-all ${index === currentImageIndex
                                ? "w-8 bg-orange-500"
                                : "w-2 bg-white/50 hover:bg-white/70"
                            }`}
                        aria-label={`Ir a imagen ${index + 1}`}
                    />
                ))}
            </div>
        </>
    )
}