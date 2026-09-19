'use client';

import { useRef, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';

/* ═══════════════════════════════════════════════════════════════
   Grain + vignette — one fixed texture pass over the whole page.
   ═══════════════════════════════════════════════════════════════ */
export function Grain() {
    return (
        <>
            <div className="grain-overlay" aria-hidden="true" />
            <div className="vignette" aria-hidden="true" />
        </>
    );
}

/* ═══════════════════════════════════════════════════════════════
   Aurora — slow counter-rotating colour fields.
   Transform + opacity only, so it composites on the GPU and costs
   nothing on the main thread.
   ═══════════════════════════════════════════════════════════════ */
export function Aurora({ className = '', intensity = 1, variant = 'sky' }) {
    const palettes = {
        sky: [
            'radial-gradient(circle at 30% 30%, rgba(14,165,233,0.22), transparent 60%)',
            'radial-gradient(circle at 70% 60%, rgba(20,184,166,0.14), transparent 58%)',
        ],
        violet: [
            'radial-gradient(circle at 35% 40%, rgba(139,92,246,0.16), transparent 60%)',
            'radial-gradient(circle at 65% 55%, rgba(14,165,233,0.16), transparent 58%)',
        ],
        teal: [
            'radial-gradient(circle at 40% 35%, rgba(20,184,166,0.18), transparent 60%)',
            'radial-gradient(circle at 60% 65%, rgba(56,189,248,0.13), transparent 58%)',
        ],
    };
    const [a, b] = palettes[variant] ?? palettes.sky;

    return (
        <div
            className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
            aria-hidden="true"
            style={{ opacity: intensity }}
        >
            {/* No filter: blur() here on purpose. A radial-gradient
                already falls off smoothly, so the blur was buying
                almost nothing visually while forcing the compositor
                to blur a layer ~1.6x the viewport in both axes —
                the single most expensive paint on the page, and
                worst exactly on the low-end devices that can least
                afford it. */}
            <div className="absolute -inset-[25%] animate-aurora-a" style={{ background: a }} />
            <div className="absolute -inset-[25%] animate-aurora-b" style={{ background: b }} />
        </div>
    );
}

/* ═══════════════════════════════════════════════════════════════
   NetworkField — canvas constellation of nodes and edges.

   Reads as a distributed system rather than generic "particles":
   nodes drift, nearby nodes link, and the pointer pulls its
   neighbourhood and lights those edges up.

   Guards: capped node count scaled to viewport, DPR clamped to 2,
   rAF paused when the section scrolls out of view, skipped wholly
   under reduced motion.
   ═══════════════════════════════════════════════════════════════ */
export function NetworkField({
    className = '',
    density = 0.00009,
    maxNodes = 90,
    linkDistance = 138,
    color = '56,189,248',
    accent = '45,212,191',
    interactive = true,
}) {
    const canvasRef = useRef(null);
    const reduced = useReducedMotion();

    useEffect(() => {
        if (reduced) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let dpr = 1;
        let nodes = [];
        let rafId = null;
        let running = true;
        const pointer = { x: -9999, y: -9999, active: false };

        const resize = () => {
            const rect = canvas.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const target = Math.min(maxNodes, Math.max(22, Math.floor(width * height * density)));
            nodes = Array.from({ length: target }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.24,
                vy: (Math.random() - 0.5) * 0.24,
                r: Math.random() * 1.6 + 0.9,
                // A few nodes pulse — they read as active services
                pulse: Math.random() < 0.18 ? Math.random() * Math.PI * 2 : null,
            }));
        };

        const draw = (time) => {
            if (!running) return;
            ctx.clearRect(0, 0, width, height);

            const linkSq = linkDistance * linkDistance;
            const pointerRadius = 150;
            const pointerSq = pointerRadius * pointerRadius;

            // Edges first so nodes sit on top
            for (let i = 0; i < nodes.length; i++) {
                const a = nodes[i];
                for (let j = i + 1; j < nodes.length; j++) {
                    const b = nodes[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const dSq = dx * dx + dy * dy;
                    if (dSq > linkSq) continue;

                    const strength = 1 - dSq / linkSq;

                    // Edges near the pointer light up in the accent hue
                    let lit = 0;
                    if (pointer.active) {
                        const mx = (a.x + b.x) / 2 - pointer.x;
                        const my = (a.y + b.y) / 2 - pointer.y;
                        const mSq = mx * mx + my * my;
                        if (mSq < pointerSq) lit = 1 - mSq / pointerSq;
                    }

                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y);
                    ctx.lineTo(b.x, b.y);
                    ctx.strokeStyle = lit > 0.02
                        ? `rgba(${accent},${(strength * 0.26 + lit * 0.42).toFixed(3)})`
                        : `rgba(${color},${(strength * 0.16).toFixed(3)})`;
                    ctx.lineWidth = lit > 0.02 ? 0.9 : 0.6;
                    ctx.stroke();
                }
            }

            // Nodes
            for (const n of nodes) {
                n.x += n.vx;
                n.y += n.vy;

                // Wrap rather than bounce — no visible edges to the field
                if (n.x < -20) n.x = width + 20;
                if (n.x > width + 20) n.x = -20;
                if (n.y < -20) n.y = height + 20;
                if (n.y > height + 20) n.y = -20;

                // Pointer attraction
                if (pointer.active && interactive) {
                    const dx = pointer.x - n.x;
                    const dy = pointer.y - n.y;
                    const dSq = dx * dx + dy * dy;
                    if (dSq < pointerSq && dSq > 1) {
                        const f = (1 - dSq / pointerSq) * 0.35;
                        const d = Math.sqrt(dSq);
                        n.x += (dx / d) * f;
                        n.y += (dy / d) * f;
                    }
                }

                let r = n.r;
                let alpha = 0.5;
                if (n.pulse !== null) {
                    const p = (Math.sin(time * 0.0016 + n.pulse) + 1) / 2;
                    r = n.r * (1 + p * 0.7);
                    alpha = 0.4 + p * 0.5;

                    ctx.beginPath();
                    ctx.arc(n.x, n.y, r * 3.2, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${accent},${(p * 0.07).toFixed(3)})`;
                    ctx.fill();
                }

                ctx.beginPath();
                ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${n.pulse !== null ? accent : color},${alpha})`;
                ctx.fill();
            }

            rafId = requestAnimationFrame(draw);
        };

        const onPointerMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            pointer.x = e.clientX - rect.left;
            pointer.y = e.clientY - rect.top;
            pointer.active = true;
        };
        const onPointerLeave = () => {
            pointer.active = false;
            pointer.x = -9999;
            pointer.y = -9999;
        };

        resize();
        rafId = requestAnimationFrame(draw);

        const ro = new ResizeObserver(resize);
        ro.observe(canvas);

        // Stop the loop whenever the field is off-screen
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !running) {
                    running = true;
                    rafId = requestAnimationFrame(draw);
                } else if (!entry.isIntersecting && running) {
                    running = false;
                    if (rafId) cancelAnimationFrame(rafId);
                }
            },
            { threshold: 0 }
        );
        io.observe(canvas);

        const onVisibility = () => {
            if (document.hidden) {
                running = false;
                if (rafId) cancelAnimationFrame(rafId);
            } else if (!running) {
                running = true;
                rafId = requestAnimationFrame(draw);
            }
        };
        document.addEventListener('visibilitychange', onVisibility);

        if (interactive) {
            window.addEventListener('pointermove', onPointerMove, { passive: true });
            window.addEventListener('pointerleave', onPointerLeave, { passive: true });
        }

        return () => {
            running = false;
            if (rafId) cancelAnimationFrame(rafId);
            ro.disconnect();
            io.disconnect();
            document.removeEventListener('visibilitychange', onVisibility);
            window.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('pointerleave', onPointerLeave);
        };
    }, [reduced, density, maxNodes, linkDistance, color, accent, interactive]);

    if (reduced) return null;

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
            aria-hidden="true"
        />
    );
}

/* ═══════════════════════════════════════════════════════════════
   GridPlane — a masked technical grid. Replaces the six near-
   identical inline dot-grids the old build repeated per section.
   ═══════════════════════════════════════════════════════════════ */
export function GridPlane({
    variant = 'grid',
    mask = 'radial-gradient(ellipse 70% 70% at 50% 50%, black 10%, transparent 75%)',
    className = '',
    opacity = 1,
}) {
    return (
        <div
            className={`absolute inset-0 pointer-events-none ${variant === 'dots' ? 'dot-plane' : 'grid-plane'} ${className}`}
            style={{
                maskImage: mask,
                WebkitMaskImage: mask,
                opacity,
            }}
            aria-hidden="true"
        />
    );
}

/* ═══════════════════════════════════════════════════════════════
   SectionGlow — a single positioned bloom.
   ═══════════════════════════════════════════════════════════════ */
export function SectionGlow({
    x = '50%',
    y = '50%',
    size = 600,
    color = 'rgba(14,165,233,0.10)',
    className = '',
}) {
    return (
        <div
            className={`absolute rounded-full pointer-events-none ${className}`}
            style={{
                left: x,
                top: y,
                width: size,
                height: size,
                transform: 'translate(-50%, -50%)',
                background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            }}
            aria-hidden="true"
        />
    );
}
