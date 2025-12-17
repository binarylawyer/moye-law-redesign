import React from 'react';
import { Shield, Lock, Globe, Zap, Database, ChevronRight, Activity } from 'lucide-react';

const FeatureGrid: React.FC = () => {
    return (
        <div className="w-full bg-[#FAFAFA] border-b-4 border-navy py-12">
            <div className="container mx-auto px-6 max-w-7xl">

                {/* 
                    COMPLEX MONDRIAN GRID (12x12)
                    8-12 Uneven Boxes.
                    Avoiding continuous straight lines across the whole width.
                    Interlocking blocks.
                 */}
                <div className="bg-navy border-4 border-navy p-0 grid grid-cols-12 grid-rows-[repeat(12,minmax(50px,auto))] gap-1 shadow-[12px_12px_0px_0px_#0A2342] min-h-[800px]">

                    {/* 1. DOMINANT WHITE (Top Left) 
                         Pos: x:1-7, y:1-7
                         Large content area.
                     */}
                    <div className="col-start-1 col-end-8 row-start-1 row-end-7 bg-white p-8 md:p-12 relative flex flex-col justify-between group overflow-hidden">
                        <div className="relative z-10">
                            <Shield className="w-12 h-12 text-navy mb-6" />
                            <h3 className="font-display text-4xl md:text-5xl text-navy leading-none mb-4">
                                Global Asset<br />Fortification
                            </h3>
                            <p className="font-sans text-gray-500 max-w-sm">
                                Structuring wealth across borders with impenetrable legal architecture.
                            </p>
                        </div>
                        {/* Subtle grid pattern overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,35,66,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,35,66,0.03)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
                    </div>

                    {/* 2. GOLD WIDE (Top Right Center) 
                         Pos: x:8-13, y:1-4
                         Attention grabber.
                     */}
                    <div className="col-start-8 col-end-13 row-start-1 row-end-4 bg-gold p-6 flex items-center justify-center relative group hover:bg-[#b08845] transition-colors">
                        <div className="text-center text-navy">
                            <Lock className="w-8 h-8 mx-auto mb-2" />
                            <span className="font-mono text-xs font-bold uppercase tracking-widest">Digital_Vault_Access</span>
                        </div>
                    </div>

                    {/* 3. GREY TALL (Far Right Mid) 
                         Pos: x:12-13, y:4-9 (Skinny vertical strip) -> Actually let's make it wider x:10-13, y:4-8
                     */}
                    <div className="col-start-10 col-end-13 row-start-4 row-end-8 bg-gray-100 p-6 flex flex-col justify-between hover:bg-white transition-colors">
                        <Database className="w-6 h-6 text-gray-400" />
                        <div className="font-mono text-[10px] text-gray-500">
                             > ENCRYPTION: 256<br />
                             > BACKUP: AUTO<br />
                             > NODES: 12
                        </div>
                    </div>

                    {/* 4. RED ALERT (Middle center) 
                         Pos: x:8-10, y:4-7
                         The "Punctuation" in the composition.
                     */}
                    <div className="col-start-8 col-end-10 row-start-4 row-end-7 bg-[#8B0000] p-4 flex items-center justify-center text-white text-center hover:bg-red-900 transition-colors cursor-pointer">
                        <div>
                            <Activity className="w-8 h-8 mx-auto mb-2 text-gold animate-pulse" />
                            <span className="font-mono text-[10px] text-gold uppercase">CRITICAL</span>
                        </div>
                    </div>

                    {/* 5. NAVY BLOCK (Bottom Left Mid) 
                         Pos: x:1-6, y:7-11
                         Technical/Engineering area.
                     */}
                    <div className="col-start-1 col-end-6 row-start-7 row-end-11 bg-navy p-8 text-white relative flex flex-col justify-end group">
                        <Globe className="w-16 h-16 text-white/10 absolute top-4 right-4 group-hover:text-white/20 transition-colors" />
                        <h4 className="font-mono text-xl text-gold mb-2">> Network_Ops</h4>
                        <p className="font-sans text-sm text-gray-400">
                            Monitoring 50+ jurisdictions for regulatory changes in real-time.
                        </p>
                    </div>

                    {/* 6. WHITE HORIZONTAL (Bottom Right Mid)
                         Pos: x:6-13, y:8-11 -> Interlocks with Navy and Grey
                         Wait, Grey ended at row 8. Navy starts at 7.
                         Let's put this: x:6-13, y:8-11.
                         Leaving a gap at x:6-8, y:7-8? No, let's fill it.
                     */}
                    {/* 6a. Filler White (Small) x:6-10 y:7-8 */}
                    <div className="col-start-6 col-end-10 row-start-7 row-end-8 bg-white p-4 flex items-center justify-center border-l-4 border-navy">
                        <span className="font-serif italic text-navy text-sm">"Precision is our currency."</span>
                    </div>

                    {/* 6b. Main White Horizontal x:6-13 y:8-11 */}
                    <div className="col-start-6 col-end-13 row-start-8 row-end-11 bg-white p-8 flex items-center gap-6 group hover:bg-gray-50 transition-colors">
                        <div className="bg-gray-100 p-4 rounded-none border-2 border-navy">
                            <Zap className="w-6 h-6 text-gold" />
                        </div>
                        <div>
                            <h4 className="font-display text-2xl text-navy">Rapid Deployment</h4>
                            <p className="font-sans text-sm text-gray-500">Entities formed in 24 hours.</p>
                        </div>
                        <ChevronRight className="ml-auto w-6 h-6 text-navy/30 group-hover:text-navy transition-colors" />
                    </div>

                    {/* ROW 11-13 (Footer Area) */}

                    {/* 7. GREY SMALL (Bottom Left) 
                         x:1-3, y:11-13
                     */}
                    <div className="col-start-1 col-end-4 row-start-11 row-end-13 bg-gray-200 p-4 flex items-center justify-center">
                        <span className="font-mono text-xs text-gray-500">FIG_9.3</span>
                    </div>

                    {/* 8. WHITE WIDE (Bottom Center) 
                         x:3-11, y:11-13
                     */}
                    <div className="col-start-4 col-end-11 row-start-11 row-end-13 bg-white p-6 flex items-center justify-between">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 bg-navy"></div>
                            <div className="w-3 h-3 bg-gold"></div>
                            <div className="w-3 h-3 bg-[#8B0000]"></div>
                        </div>
                        <span className="font-mono text-xs text-navy/50 tracking-[0.2em] uppercase">Architecture of Truth</span>
                    </div>

                    {/* 9. GOLD SMALL (Bottom Right) 
                         x:11-13, y:11-13
                     */}
                    <div className="col-start-11 col-end-13 row-start-11 row-end-13 bg-navy flex items-center justify-center text-gold cursor-pointer hover:bg-gold hover:text-navy transition-colors">
                        <span className="font-mono text-sm font-bold">-></span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FeatureGrid;
