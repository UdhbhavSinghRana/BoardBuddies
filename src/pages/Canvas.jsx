import React, { useState, useRef, useEffect } from "react";
import Word from './Word';
import Color from './Color';
function Canvas() { 
    const canvasRef = useRef(null);
    const [painting,setPainting] = useState(false);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let bound = canvas.getBoundingClientRect();
        canvas.height = bound.bottom - bound.top;
        canvas.width = bound.right - bound.left;
    }, []);
    
    function draw(e){
        if(!painting) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let bound = canvas.getBoundingClientRect();
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';

        ctx.lineTo(e.clientX-bound.left,e.clientY-bound.top);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX-bound.left,e.clientY-bound.top);
        console.log(e.clientX-bound.left,e.clientY-bound.top);
    }
    function over(){
        setPainting(false);
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
    }
    return (
        <div className='flex relative w-1/2  '>
            <canvas className='border-2 w-full bg-white' ref={canvasRef} onMouseDown={() => setPainting(true)} onMouseUp={over} onMouseMove={draw} ></canvas>

            <div className='absolute w-full -translate-y-full'>
                <Word />
            </div>

            <div className='absolute bottom-0 w-full h-full translate-y-full'>
                <div className='flex w-full h-1/5 py-2  '>
                    <div className='w-full p-2 bg-[#1E88E5] border-2'>
                        ToolBox
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Canvas;
