import React, { useEffect, useRef } from 'react';

const WorldMapBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const init = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;


      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;


      particles = [];

      // Grid settings (scaled by DPR so dots look the same size on all screens)
      const gap = 30 * dpr; 
      const radius = 1.5 * dpr;
      const cols = Math.floor(canvas.width / gap);
      const rows = Math.floor(canvas.height / gap);

      // Center the grid
      const startX = (canvas.width - (cols * gap)) / 2;
      const startY = (canvas.height - (rows * gap)) / 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          // Add half gap to offset
          const x = startX + i * gap + (gap / 2);
          const y = startY + j * gap + (gap / 2);
          
          particles.push({
            x: x,
            y: y,
            originX: x,
            originY: y,
            size: radius,
            color: 'rgba(99, 102, 241, 0.3)' 
          });
        }
      }
    };

    // Mouse state
    const mouse = { x: undefined, y: undefined };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      // Calculating mouse position in the raw physical pixels
      mouse.x = (event.clientX - rect.left) * dpr;
      mouse.y = (event.clientY - rect.top) * dpr;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const dpr = window.devicePixelRatio || 1;
      const interactionRadius = 200 * dpr; // Interaction size/radius

      particles.forEach(p => {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Edit: TO STOP THE TWITCHING
        const safeDistance = Math.max(distance, 80 * dpr); 
        
        let size = p.size;
        let color = p.color;

        if (distance < interactionRadius) {
          const force = (interactionRadius - safeDistance) / interactionRadius;
          
          const angle = Math.atan2(dy, dx);
          
          // Moving the dot towards mouse (Attraction)
          const moveX = Math.cos(angle) * force * (40 * dpr); 
          const moveY = Math.sin(angle) * force * (40 * dpr);
          
          // Movement made to be more smooth by editing x and y directly (Friction)
          p.x -= (p.x - (p.originX + moveX)) * 0.05;
          p.y -= (p.y - (p.originY + moveY)) * 0.05;

          size = p.size + (force * (3 * dpr)); 
          color = `rgba(129, 140, 248, ${0.3 + force})`; 
        } else {
          // Return to origin slowly
          p.x -= (p.x - p.originX) * 0.05;
          p.y -= (p.y - p.originY) * 0.05;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', init);
    // listen to 'window' for mouse move to track it even if it leaves the canvas area slightly
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default WorldMapBackground;