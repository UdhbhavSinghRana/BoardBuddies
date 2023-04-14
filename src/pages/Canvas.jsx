import React, { useState, useRef, useEffect } from "react";
import Word from './Word';
import Color from './Color';
function Canvas() { 
    const canvasRef = useRef(null);
    const [painting,setPainting] = useState(false);
    const [lineThickness, setLineThickness] = useState(10);
    const colorOptions = useRef('');
    const [color,setColor] = useState('black');
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
        ctx.lineWidth = lineThickness;
        ctx.lineCap = 'round';
        ctx.strokeStyle = color;
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
    function FullColor(){
        setLineThickness(10000);
    }
    function StartDraw(e) {
        setPainting(true);
        if(painting) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        let bound = canvas.getBoundingClientRect();
        ctx.lineWidth = lineThickness;
        ctx.lineCap = 'round';
        ctx.strokeStyle = color;

        ctx.lineTo(e.clientX-bound.left,e.clientY-bound.top);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX-bound.left,e.clientY-bound.top);
        console.log(e.clientX-bound.left,e.clientY-bound.top);
    }
    const clear = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    const handleColor = () => {
        colorOptions.current.className = 'absolute -top-32 bg-gray-600 w-32 h-32 left-0';
    }
    const changeColor = (e) => {
        setColor(e.target.value);
        colorOptions.current.className = 'absolute -top-32 hidden bg-gray-600 w-32 h-32 left-0';
    }
    const handleCross = () => {
        colorOptions.current.className = 'absolute -top-32 hidden bg-gray-600 w-32 h-32 left-0';
    }
    return (
        <div className='flex relative w-1/2  '>
            <canvas className='border-2 w-full bg-white' ref={canvasRef} onMouseDown={StartDraw} onMouseUp={over} onMouseMove={draw} ></canvas>

            <div className='absolute w-full -translate-y-full'>
                <Word />
            </div>

            <div className='absolute bottom-0 w-full h-full translate-y-full'>
                <div className='flex w-full h-1/5 py-2  '>
                    <div className='w-full p-2 bg-[#1E88E5] border-2 flex gap-2'>
                        <div>
                            <button onClick={FullColor}>
                                fullcolor
                            </button>
                        </div>
                        <div>
                            <button onClick={() => setLineThickness(10)}>
                                Pencil
                            </button>
                        </div>
                        <div>
                            <button onClick={clear}>
                                Clear
                            </button>
                        </div>
                        <div className=" relative">
                            <div className="absolute -top-32 hidden bg-gray-600 w-32 h-32 left-0" ref={colorOptions}>
                                <button className="absolute right-0 top-0" onClick={handleCross}>
                                    <h1 >X</h1>
                                </button>
                                <button onClick={changeColor} value={"Violet"}>
                                    Violet
                                </button>
                                <button onClick={changeColor} value={"Black"}>
                                    Black
                                </button>
                                <button onClick={changeColor} value={"Red"}>
                                    Red
                                </button>
                                <button onClick={changeColor} value={"Blue"}>
                                    Blue
                                </button>
                                <button onClick={changeColor} value={"White"}>
                                    White
                                </button>
                                <button onClick={changeColor} value={"Yellow"}>
                                    Yellow
                                </button>
                            </div>
                            <button className="" onClick={handleColor}>
                                Color
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Canvas;
