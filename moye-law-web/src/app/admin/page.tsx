export default function AdminDashboard() {
    return (
        <div className="p-12">
            <h1 className="font-display text-5xl text-navy mb-8">System Administration.</h1>
            <p className="font-sans text-xl text-gray-600 mb-12">
                Welcome to the control plane.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Design System Card */}
                <div className="border-4 border-navy p-8 hover:shadow-[8px_8px_0px_0px_#C99D56] transition-shadow cursor-pointer bg-white group">
                    <h3 className="font-mono text-gold text-sm tracking-widest uppercase mb-4">MODULE_01</h3>
                    <h2 className="font-display text-3xl text-navy mb-4 group-hover:text-gold transition-colors">Design System</h2>
                    <p className="font-sans text-gray-500 mb-8">
                        The living documentation of the Moye Law V2 interface.
                    </p>
                    <a href="/admin/design" className="font-mono text-sm text-navy font-bold border-b-2 border-gold pb-1">ACCESS_LIBRARY &rarr;</a>
                </div>

                {/* Submissions Card */}
                <div className="border-4 border-navy p-8 hover:shadow-[8px_8px_0px_0px_#C99D56] transition-shadow cursor-pointer bg-white group">
                    <h3 className="font-mono text-gold text-sm tracking-widest uppercase mb-4">MODULE_02</h3>
                    <h2 className="font-display text-3xl text-navy mb-4 group-hover:text-gold transition-colors">Inquiry Data</h2>
                    <p className="font-sans text-gray-500 mb-8">
                        View and manage incoming client Contact Terminal payloads.
                    </p>
                    <span className="font-mono text-sm text-gray-400">COMING_SOON</span>
                </div>
            </div>
        </div>
    );
}
