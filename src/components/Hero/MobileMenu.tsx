import { Button } from "@/components/ui/button"
import { NAV_ITEMS } from "./hero-data"

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    return (
        <div
            className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-md transition-transform duration-300 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
                }`}
        >
            <div className="flex flex-col items-center justify-center h-full gap-8">
                {NAV_ITEMS.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        onClick={onClose}
                        className="text-white text-2xl font-semibold hover:text-orange-500 transition-colors"
                    >
                        {item.label}
                    </a>
                ))}
                <Button
                    variant="outline"
                    className="border-2 border-orange-500 bg-white text-orange-500 hover:bg-orange-500 hover:text-white font-semibold px-8 py-6 text-xl"
                    onClick={onClose}
                >
                    Contacto
                </Button>
            </div>
        </div>
    )
}