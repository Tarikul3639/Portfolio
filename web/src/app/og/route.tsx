import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#09090b', // Neutral dark background
                    padding: '60px',
                    fontFamily: 'sans-serif',
                }}
            >
                {/* Minimal Thin Border Frame */}
                <div
                    style={{
                        position: 'absolute',
                        inset: '40px',
                        border: '1px solid rgba(0, 200, 150, 0.2)', // Very subtle green border
                        borderRadius: '12px',
                    }}
                />

                {/* Content Wrapper */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}
                >
                    {/* Role Tag */}
                    <div
                        style={{
                            background: 'rgba(0, 200, 150, 0.1)',
                            color: '#00c896',
                            padding: '8px 20px',
                            borderRadius: '100px',
                            fontSize: '22px',
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                            marginBottom: '24px',
                        }}
                    >
                        Full Stack Developer
                    </div>

                    {/* Massive Bold Name */}
                    <h1
                        style={{
                            fontSize: '130px', // Extra large
                            fontWeight: 900, // Black weight
                            color: '#ffffff',
                            margin: 0,
                            padding: 0,
                            lineHeight: 1,
                            letterSpacing: '-0.05em',
                            display: 'flex',
                        }}
                    >
                        Tarikul Islam
                    </h1>

                    {/* Tech Stack - Simple Text dots */}
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginTop: '32px',
                            gap: '15px',
                            fontSize: '24px',
                            color: '#71717a',
                        }}
                    >
                        <span>React</span>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3f3f46' }} />
                        <span>Next.js</span>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3f3f46' }} />
                        <span>NestJS</span>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3f3f46' }} />
                        <span>TypeScript</span>
                    </div>
                </div>

                {/* Footer Bottom Label */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '70px',
                        fontSize: '18px',
                        color: '#3f3f46',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                    }}
                >
                    Portfolio 2026
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}