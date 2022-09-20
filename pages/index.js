import { useState, useEffect } from 'react'

export default function Random() {
  const [randomData, setRandomData] = useState([])
  const [randomResult, setRandomResult] = useState([])

  try {
    document.getElementById("data").value = localStorage.getItem('data');
  } catch(e) {
    
  }
  const randomUser = () => {
    document.getElementById("result").innerHTML = null;
    const data = document.getElementById("data").value;
    setRandomData(data);
    const aaaa = []
    var randomLeft = data.split(/\n/);
      for (let i = 0; i < (data.split(/\n/).length)/2; i++) {
        const randoma = Math.floor((Math.random() * parseInt(randomLeft.length)) + 1)
        aaaa.push(randomLeft[randoma -1])
        randomLeft.splice(randoma -1,1)
        const randomb = Math.floor((Math.random() * parseInt(randomLeft.length)) + 1)
        aaaa.push(randomLeft[randomb -1])
        console.log(randomLeft)
        randomLeft.splice(randomb -1,1)
      }
      const bbbb = []
      for (let x = 0; x < (aaaa.length/2); x++) {
        bbbb.push({"a":aaaa[x+x],"b":aaaa[x+x+1]})
      }
      setRandomResult(bbbb)
      const dom = document.getElementById("result")
      for (let z = 0; z < (aaaa.length/2); z++) {
        const newNode = document.createElement("p");
        const a = typeof bbbb[z].a !== 'undefined' ? bbbb[z].a : ""
        const b = typeof bbbb[z].b !== 'undefined' ? " - "+ bbbb[z].b : ""
        const dt = z+1 + ") " + a + b
        const textNode = document.createTextNode(dt);
        newNode.appendChild(textNode);
        dom.insertBefore(newNode, dom.children[z]);
      }
  }
  const dataUpdate = () => {
    const data = document.getElementById("data").value;
    localStorage.setItem('data', data);
    var pairs = (data.split(/\n/)).length / 2
    document.getElementById("onChangePairs").innerHTML = Math.round(pairs);
  }
  return (
    <div className="bg-gradient-to-tr from-green-300 to-blue-500 min-h-screen overflow-y-hidden max-h-auto w-screen flex flex-col justify-center items-center overflow-x-hidden phone:overflow-x-hidden">
      <div className="backdrop-blur-sm bg-white/30 w-auto h-auto p-10 rounded-[10px] phone:p-2">
        <div className="">
          <a className="font-mono text-lg font-bold text-gray-700">Random Pair Generator</a>
        </div>
        <div className="bg-white w-[500px] phone:w-screen h-auto rounded-[10px]">
          <div className="bg-white w-[500px] phone:w-screen h-[50px] drop-shadow-lg">
            <div className="w-[50px] h-max p-2 float-left">
              <p className="font-mono text-gray-700 text-sm">Pairs</p>
              <p className="font-mono text-black text-lg font-bold leading-3" id="onChangePairs">0</p>
            </div>
            <button className="float-right w-[100px] h-[100%] bg-gray-200 font-bold text-gray-700 p-2 font-mono hover:bg-gray-300 duration-150" onClick={randomUser}>Random</button>
          </div>
          <textarea className="w-[500px] h-[200px] font-mono text-sm font-bold text-gray-700 p-2 outline-none" id="data" onChange={dataUpdate} />
        </div>
        <div>
          <a className="font-mono text-sm text-gray-700 font-bold">Result:</a>
        </div>
        <div className="font-mono text-xs text-gray-700" id="result"></div>
      </div>
    </div>
  )
}