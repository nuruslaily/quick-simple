import allButton from "../assets/all-button.svg";

import { useState } from "react";

function Inbox() {
  const [clickedInbox, setClickedInbox] = useState(false);
  return (
    <>
      <div className="h-screen w-screen bg-gray-900 text-gray-200 flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 p-4">
          {/* <h1 className="text-lg font-bold">Quicks - Inbox</h1> */}
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col">
          {/* Search Bar */}
          <div className="p-2 bg-[#4F4F4F] flex items-center gap-2 rounded-md">
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.0804 18.9783H22.4434L31.0526 27.6047L28.4819 30.1754L19.8555 21.5662V20.2032L19.3896 19.7201C17.4228 21.4109 14.8694 22.4289 12.0916 22.4289C5.89781 22.4289 0.877197 17.4082 0.877197 11.2144C0.877197 5.02061 5.89781 0 12.0916 0C18.2854 0 23.3061 5.02061 23.3061 11.2144C23.3061 13.9922 22.2881 16.5456 20.5973 18.5124L21.0804 18.9783ZM4.32774 11.2145C4.32774 15.5104 7.79558 18.9783 12.0916 18.9783C16.3876 18.9783 19.8554 15.5104 19.8554 11.2145C19.8554 6.91846 16.3876 3.45062 12.0916 3.45062C7.79558 3.45062 4.32774 6.91846 4.32774 11.2145Z"
                fill="white"
              />
            </svg>

            <input
              type="text"
              className="w-full p-2 bg-[#4F4F4F] text-gray-200 rounded-md outline-none"
            />
          </div>

          {/* Empty Content */}
          <div className="flex-1 flex justify-center items-center relative">
            <p className="text-gray-500">No messages to display</p>
            <div className="absolute bottom-4 right-4">
              <button
                className="relative"
                onClick={() => {
                  const hiddenButtons =
                    document.querySelectorAll(".hidden-btn");
                  hiddenButtons.forEach((btn) => {
                    btn.classList.toggle("hidden");
                  });
                }}
              >
                <img src={allButton} alt="button" className="w-20 h-20" />
              </button>
              <div className="hidden-btn hidden absolute bottom-2 right-21 text-white rounded-md">
                <button
                  onClick={() => {
                    clickedInbox
                      ? setClickedInbox(true)
                      : setClickedInbox(false);
                  }}
                >
                  <center>Inbox</center>
                  {clickedInbox ? (
                    <svg
                      width="68"
                      height="68"
                      viewBox="0 0 68 68"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M68 34C68 52.7777 52.7777 68 34 68C15.2223 68 0 52.7777 0 34C0 15.2223 15.2223 0 34 0C52.7777 0 68 15.2223 68 34Z"
                        fill="#8785FF"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M39.0371 23.9261H22.6667C21.9741 23.9261 21.4075 24.4928 21.4075 25.1854V42.815L26.4445 37.778H39.0371C39.7297 37.778 40.2964 37.2113 40.2964 36.5187V25.1854C40.2964 24.4928 39.7297 23.9261 39.0371 23.9261ZM37.7779 26.4446V35.2594H25.3993L24.6564 36.0024L23.926 36.7327V26.4446H37.7779ZM42.8149 28.9632H45.3334C46.026 28.9632 46.5927 29.5299 46.5927 30.2225V49.1114L41.5556 44.0743H27.7038C27.0112 44.0743 26.4445 43.5077 26.4445 42.8151V40.2965H42.8149V28.9632Z"
                        fill="white"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="68"
                      height="68"
                      viewBox="0 0 68 68"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_2_188)">
                        <path
                          d="M64 30C64 46.5685 50.5685 60 34 60C17.4315 60 4 46.5685 4 30C4 13.4315 17.4315 0 34 0C50.5685 0 64 13.4315 64 30Z"
                          fill="#F2F2F2"
                        />
                      </g>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M38.4443 21.1107H23.9999C23.3888 21.1107 22.8888 21.6107 22.8888 22.2218V37.7774L27.3332 33.3329H38.4443C39.0555 33.3329 39.5555 32.8329 39.5555 32.2218V22.2218C39.5555 21.6107 39.0555 21.1107 38.4443 21.1107ZM37.3332 23.3329V31.1106H26.411L25.7555 31.7662L25.111 32.4106V23.3329H37.3332ZM41.7777 25.5552H43.9999C44.611 25.5552 45.111 26.0552 45.111 26.6663V43.333L40.6666 38.8885H28.4443C27.8332 38.8885 27.3332 38.3885 27.3332 37.7774V35.5552H41.7777V25.5552Z"
                        fill="#8885FF"
                      />
                      <defs>
                        <filter
                          id="filter0_d_2_188"
                          x="0"
                          y="0"
                          width="68"
                          height="68"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2_188"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2_188"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  )}
                </button>
              </div>
              <div className="hidden-btn hidden absolute bottom-2 right-40 text-white rounded-md">
                <button
                  onClick={() => {
                    clickedInbox
                      ? setClickedInbox(true)
                      : setClickedInbox(false);
                  }}
                >
                  <center>Task</center>
                  {clickedInbox ? (
                    <svg
                      width="76"
                      height="76"
                      viewBox="0 0 76 76"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_2_266)">
                        <path
                          d="M72 34C72 52.7777 56.7777 68 38 68C19.2223 68 4 52.7777 4 34C4 15.2223 19.2223 0 38 0C56.7777 0 72 15.2223 72 34Z"
                          fill="#F8B76B"
                        />
                      </g>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M28.1111 24.6663H48.1111C49.3334 24.6663 50.3334 25.6663 50.3334 26.8885V41.3329C50.3334 42.5551 49.3334 43.5551 48.1111 43.5551H28.1111C26.8889 43.5551 25.8889 42.5551 25.8889 41.3329V26.8885C25.8889 25.6663 26.8889 24.6663 28.1111 24.6663ZM28.1111 26.8885V41.3329H37V26.8885H28.1111ZM48.1111 41.3329H39.2222V26.8885H48.1111V41.3329ZM47 30.7774H40.3334V32.444H47V30.7774ZM40.3334 33.5551H47V35.2218H40.3334V33.5551ZM47 36.3329H40.3334V37.9996H47V36.3329Z"
                        fill="white"
                      />
                      <defs>
                        <filter
                          id="filter0_d_2_266"
                          x="0"
                          y="0"
                          width="76"
                          height="76"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2_266"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2_266"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  ) : (
                    <svg
                      width="68"
                      height="68"
                      viewBox="0 0 68 68"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_2_175)">
                        <path
                          d="M64 30C64 46.5685 50.5685 60 34 60C17.4315 60 4 46.5685 4 30C4 13.4315 17.4315 0 34 0C50.5685 0 64 13.4315 64 30Z"
                          fill="#F2F2F2"
                        />
                      </g>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M25.1111 21.6667H45.1111C46.3334 21.6667 47.3334 22.6667 47.3334 23.889V38.3334C47.3334 39.5556 46.3334 40.5556 45.1111 40.5556H25.1111C23.8889 40.5556 22.8889 39.5556 22.8889 38.3334V23.889C22.8889 22.6667 23.8889 21.6667 25.1111 21.6667ZM25.1111 23.889V38.3334H34V23.889H25.1111ZM45.1111 38.3334H36.2222V23.889H45.1111V38.3334ZM44 27.7779H37.3334V29.4445H44V27.7779ZM37.3334 30.5556H44V32.2223H37.3334V30.5556ZM44 33.3334H37.3334V35.0001H44V33.3334Z"
                        fill="#F8B76B"
                      />
                      <defs>
                        <filter
                          id="filter0_d_2_175"
                          x="0"
                          y="0"
                          width="68"
                          height="68"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_2_175"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_2_175"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Inbox;
