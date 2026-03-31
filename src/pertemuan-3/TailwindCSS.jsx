export default function TailwindCSS(){
    return (
        <div>
            <h1 class="border m-4">Belajar Tailwind CSS 4</h1>
            <button className="bg-blue-500 text-white
                                px-4 py-2 mx-4 rounded
                                shadow-lg">Click Me</button>
            <Spacing title="Card Title" content="Ini adalah contoh penggunaan padding dan margin di Tailwind."/>
            <FlexboxGrid/>
            <Typography/>
            <BorderRadius/>
            <BackgroundColors/>
            <ShadowEffects/>
            <AestheticTailwindPage/>
        </div>
    )
}

function FlexboxGrid(){
    return (
        <nav className="flex justify-between bg-gray-800 p-4 text-white">
            <h1 className="text-lg font-bold">MyWebsite</h1>
            <ul className="flex space-x-4">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <h1 className="text-lg font-bold">Logout</h1>
        </nav>
    )
}

function Spacing(props){
    return (
        <div className="bg-white shadow-lg p-6 m-4 rounded-lg">
            <h2 className="text-lg font-semibold">{props.title}</h2>
            <p className="mt-2 text-gray-600">{props.content}</p>
        </div>
    )
}

function Typography(){
    return (
        <div className="p-4">
            <h1 className="text-3xl font-extrabold text-blue-600">Tailwind Typography</h1>
            <p className="text-gray-600 text-lg mt-2">Belajar Tailwind sangat menyenangkan dan cepat!</p>
        </div>
    )
}

function BorderRadius(){
    return (
        <button className="border-2 border-blue-500 text-blue-500 ml-4 px-4 py-2 rounded-lg"> Klik Saya </button>
    )
}

function BackgroundColors(){
    return(
        <div className="bg-blue-500 text-white p-6 m-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">Tailwind Colors</h3>
            <p className="mt-2">Belajar Tailwind itu seru dan fleksibel!</p>
        </div>
    )
}

function ShadowEffects(){
    return (
        <div className="bg-amber-100 shadow-lg p-6 m-4 rounded-lg hover:shadow-2xl transition">
            <h3 className="text-xl font-semibold">Hover me!</h3>
            <p className="text-gray-600 mt-2">Lihat efek bayangan saat hover.</p>
        </div>
    )
}

function AestheticTailwindPage() {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-200">
            
            {/* 1. FLEXBOX GRID (Navbar dengan efek Glassmorphism) */}
            <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-white/70 backdrop-blur-md border-b border-slate-200">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-lg shadow-sm"></div>
                    <h1 className="text-xl font-black tracking-tighter text-slate-900">MyWebsite</h1>
                </div>
                <ul className="hidden md:flex space-x-8 font-medium text-slate-500">
                    <li><a href="#" className="hover:text-blue-600 transition-colors">Home</a></li>
                    <li><a href="#" className="hover:text-blue-600 transition-colors">About</a></li>
                    <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
                </ul>
                <button className="text-sm font-bold text-slate-500 hover:text-red-500 transition-colors">
                    Logout
                </button>
            </nav>

            {/* MAIN CONTENT WRAPPER */}
            <main className="max-w-6xl mx-auto px-6 py-16 md:py-24 space-y-16">
                
                {/* 2. TYPOGRAPHY & HEADER MAIN (Hero Section) */}
                <div className="text-center max-w-3xl mx-auto space-y-6">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm mb-4">
                        🚀 Tailwind CSS 4 Ready
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
                        Belajar <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400">Tailwind CSS</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
                        Belajar Tailwind sangat menyenangkan dan cepat! Buat desain menawan langsung dari HTML Anda tanpa pusing memikirkan nama class CSS.
                    </p>
                    
                    {/* BUTTONS (Menggabungkan Button awal dan Button BorderRadius) */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <button className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-1">
                            Click Me
                        </button>
                        <button className="w-full sm:w-auto px-8 py-3.5 bg-white border-2 border-slate-200 hover:border-blue-500 text-slate-600 hover:text-blue-600 font-semibold rounded-full shadow-sm transition-all hover:-translate-y-1">
                            Klik Saya
                        </button>
                    </div>
                </div>

                {/* 3. GRID CARDS (Menggabungkan Spacing, BackgroundColors, dan ShadowEffects) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                    
                    {/* Card 1: Spacing / General Card */}
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                        <div className="w-12 h-12 bg-indigo-50 text-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">Card Title</h2>
                        <p className="text-slate-500 leading-relaxed">
                            Ini adalah contoh penggunaan padding (p) dan margin (m) di Tailwind yang rapi dan terukur.
                        </p>
                    </div>

                    {/* Card 2: Background Colors */}
                    <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 rounded-3xl shadow-lg shadow-blue-500/20 text-white hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-2 transition-all duration-300">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Tailwind Colors</h3>
                        <p className="text-blue-100 leading-relaxed">
                            Belajar Tailwind itu seru dan fleksibel! Gunakan utility colors untuk membuat gradien yang memukau.
                        </p>
                    </div>

                    {/* Card 3: Shadow Effects */}
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-3xl shadow-sm border border-amber-100 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-amber-200/50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-orange-600 transition-colors">Hover me!</h3>
                        <p className="text-amber-700/80 leading-relaxed">
                            Lihat efek bayangan (shadow) dan transisi (transition) yang halus saat kartu ini di-hover.
                        </p>
                    </div>

                </div>
            </main>
        </div>
    );
}
