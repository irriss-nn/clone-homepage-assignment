
import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

const Earth: React.FC = () => {
    // Reference to canvas element where the globe will be rendered
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        // Starting angle for the globe rotation
        let phi = 0;

        // Initialize the globe with configurations
        const globe = createGlobe(canvasRef.current!, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0.25,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 30000,
            mapBrightness: 6,
            baseColor: [1, 0.5, 3],
            markerColor: [0.1, 0.8, 1], // Customize marker color here
            glowColor: [1, 1, 2],
            opacity:1,
            offset: [0,0],
            markers: [ // Positions of markers on the globe (longitude and latitude)
                // Example: [10, 20] // 10 - longitude, 20 - latitude
            ],
            onRender: (state: Record<string, any>) => {
                // Called on every animation frame.
                // Rotate the globe slightly on each frame
                state.phi = phi;
                phi += 0.003;
            },
        });     

        // Clean up the globe instance when component is unmounted
        return () => {
            globe.destroy();
        };
    }, []); // 'use client': Runs once when the component is mounted

    return (
        <div className="App flex items-center justify-center z-[10]">
            <canvas
                ref={canvasRef}
                style={{ width: 600, height: 600, maxWidth: '100%', aspectRatio: '1' }}
            />
        </div>
    );
};

export default Earth;
