import { Button } from "@/components/ui/button"

export function HeroContent() {
    return (
        <div className="relative z-10 flex flex-1 items-start px-6 lg:px-32 pt-12 pb-12">
            <div className="max-w-3xl">
                <h1 className="text-5xl font-bold text-white leading-none lg:text-8xl mb-6 text-balance">
                    Construye
                    <br />
                    un futuro
                    <br />
                    con
                    <br />
                    nosotros
                </h1>
                <p className="text-white/90 text-lg lg:text-xl mb-8 max-w-xl">
                    Calidad, seguridad y experiencia en cada proyecto.
                </p>
                <div className="flex flex-wrap gap-4">
                    <Button
                        variant="outline"
                        className="border-2 border-white bg-white text-black hover:bg-white/90 font-semibold px-8 py-6 text-lg"
                    >
                        Proyectos
                    </Button>
                    <Button className="from-primary hover:from-primary-hover text-white font-semibold px-8 py-6 text-lg border-0">
                        Contacto
                    </Button>
                </div>
            </div>
        </div>
    )
}