import { useState, useCallback, useEffect} from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!$_?@&";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyTextToClipboard = () => {
    window.navigator.clipboard.writeText(password)
  }

  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="w-80 bg-red-700 rounded-xl flex flex-col gap-5 py-5">
          <h1 className=" text-center text-3xl font-semibold text-white">
            Password Generator
          </h1>
          <div className="flex flex-row justify-center">
            <input
              type="text"
              value={password}
              placeholder="Password"
              readOnly
              className="h-10 w-52 rounded-l-xl px-2"
            />
            <button onClick={copyTextToClipboard} className="bg-blue-500 text-white px-3 font-semibold rounded-r-xl active:bg-blue-600">
              Copy
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-row px-6 gap-2 items-center">
              <input
                type="range"
                min={8}
                max={16}
                value={length}
                onChange={(e) => {
                  setLength(e.target.value);
                }}
                className="w-28 cursor-pointer"></input>
              <label className="text-xl text-white font-semibold">
                Length : {length}
              </label>
            </div>
            <div className="flex flex-row px-6 gap-2 items-center">
              <input type="checkbox" defaultChecked={numberAllowed} onChange={() => setNumberAllowed((prev) => !prev)} />
              <label className="text-xl text-white font-semibold">
                Numbers
              </label>
            </div>
            <div className="flex flex-row px-6 gap-2 items-center">
              <input type="checkbox" defaultChecked={charAllowed} onChange={() => setCharAllowed((prev) => !prev)}/>
              <label className="text-xl text-white font-semibold">
                Characters
              </label>
            </div>
          </div>
          <button onClick={passwordGenerator} className="text-white bg-green-500 self-center px-10 py-2 font-semibold text-xl rounded-lg hover:bg-green-600">Generate</button>
        </div>
      </div>
    </>
  );
}

export default App;
