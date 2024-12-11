import React, { useState } from "react";

const encodeDecodeMapping = {
    D: "1", U: "2", N: "3", L: "4", O: "5", P: "6", T: "7", Y: "8", E: "9", R: "0",
    "1": "D", "2": "U", "3": "N", "4": "L", "5": "O", "6": "P", "7": "T", "8": "Y", "9": "E", "0": "R",
};

const transformText = (text) => {
    return text
        .split("")
        .map((char) => encodeDecodeMapping[char.toUpperCase()] || char)
        .join("");
};

const App = () => {
    const [input, setInput] = useState("");

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Top Section (styled header) */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-6 shadow">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-2xl md:text-4xl font-bold">Character Mapper</h1>
                    <p className="text-sm md:text-base mt-1">Encode and decode text instantly</p>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow container mx-auto px-4 py-8 flex flex-col items-center">
                <div className="bg-white rounded-lg shadow-md w-full max-w-2xl p-6">
          <textarea
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-base md:text-lg resize-none"
              rows="6"
              placeholder="Type your text here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
          ></textarea>
                    <div className="mt-6 bg-gray-50 p-4 rounded border border-gray-300">
                        <h2 className="text-base md:text-lg font-medium text-gray-800 mb-2">Mapped Output:</h2>
                        <p className="text-gray-700 text-sm md:text-base whitespace-pre-wrap break-words">
                            {transformText(input)}
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Section (styled footer) */}
            <div className="bg-gray-800 text-white py-4">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Developed by{" "}
                        <a
                            href="https://github.com/ThaminduSathruwan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-blue-400 hover:text-blue-300 transition"
                        >
                            Thamindu Sathruwan
                        </a>
                        . All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default App;
