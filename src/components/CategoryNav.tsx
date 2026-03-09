import { Link } from 'react-router-dom';

function CategoryNav() {
    const links = [
        { label: 'Sofas', to: '/categories/sofas' },
        { label: 'Beds', to: '/categories/beds' },
        { label: 'Dining', to: '/categories/dining' },
        { label: 'About Factory', to: '/about' },
        { label: 'Shipping & Returns', to: '/shipping-returns' },
        { label: 'Privacy', to: '/privacy' },
        { label: 'Contact', to: '/contact' }
    ];
    return (
        <nav className="border-b border-line bg-surface hidden md:block">
            <div className="w-[min(1240px,calc(100%-2rem))] mx-auto flex items-center gap-6 py-2 overflow-x-auto text-[0.85rem] text-muted">
                {links.map((link) => (
                    <Link key={link.label} to={link.to} className="whitespace-nowrap hover:text-brand transition-colors py-1">{link.label}</Link>
                ))}
            </div>
        </nav>
    );
}

export default CategoryNav;
