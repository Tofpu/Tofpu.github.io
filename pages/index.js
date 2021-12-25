import Head from 'next/head'
import Widget from './widget/Widget.tsx'

export default function Home() {
  return (
      <>
        <div className="flex flex-col h-screen justify-between">
          <div className="w-screen flex justify-center p-5">
            <div
                className="flex tracking-wider items-center justify-between w-screen px-2 sm:w-1/2 sm:px-16 text-primary border-2 border-primary rounded-full">
              <div><a href="#">Home</a></div>
              <div className="flex space-x-2">
                <div><a href="https://github.com/Tofpu">GitHub</a></div>
                <div><a href="https://www.spigotmc.org/members/tofpu.585786/">Spigot</a></div>
              </div>
            </div>
          </div>

          <div className="border-2 border-primary shadow-md w-screen"></div>

          <div className="py-16 px-16 w-screen flex justify-center">
            <div className="flex w-1/2 justify-center sm:justify-start">
              <div className="leading-5 space-y-3">
                <div>
                  <p className="text-4xl text-title-lighter font-semibold">HELLO! I'M <b
                      className="text-title tracking-widest font-bold hover:text-title-lighter">TOFPU</b></p>
                  <p className="text-xl text-primary font-semibold font-medium">I AM A <b
                      className="tracking-wider text-title-lighter hover:opacity-90">JAVA
                  </b>DEVELOPER</p>
                </div>
                <div>
                  <div className="text-lg text-primary">I've been writing plugins for <b
                      className="hover:opacity-90">Minecraft</b> for over two years.
                  </div>
                  <div className="w-60 sm:w-96 text-primary">
                    I like to <u>write code that is well-organized, clear, and technically sound</u>. I believe <u>writing
                    beautiful
                    code is one of the most beautiful of art forms.</u>
                  </div>
                </div>
                <div className="flex w-1/2 py-3 justify-center">
                  <button rel="#project"
                          className="border-2 border-primary hover:bg-title-light bg-title shadow rounded-md py-1 px-5">
                    <p className="text-secondary">Learn more</p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen flex justify-center">
            <div className="border-2 border-primary shadow-sm self-center w-1/2"></div>
          </div>

          <div rel="#project" className="w-screen flex flex-col p-5 space-y-2.5 items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div className="text-title text-3xl hover:text-title-lighter"><b>Projects</b></div>
              <div className="text-primary">
                I have brought many plugin ideas to life that others have found useful.
              </div>
            </div>

            <div className="space-y-2 flex flex-col items-center justify-center">
              <div
                  className="px-5 border-2 rounded-md ring-2 border-primary ring-title text-title flex flex-col items-center justify-center">
                <div className="flex px-5 flex-col justify-center items-center">
                  <div className="text-lg font-semibold hover:text-title-lighter">
                    <a href="https://www.spigotmc.org/resources/95918">SpeedBridge</a>
                  </div>
                  <div className="text-md">
                    Hop into an island, bridge from one island to another, and try to get the lowest score possible!
                  </div>
                </div>
                <div className="flex flex-col px-5 justify-center items-center">
                  <div className="text-lg font-semibold hover:text-title-lighter">
                    <a href="https://www.spigotmc.org/resources/97614">Response</a>
                  </div>
                  <div className="">
                    Allows you to create prefixes for your common answers with ease!
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="text-lg font-semibold hover:text-title-lighter">
                    <a href="https://www.spigotmc.org/resources/84331">LockedDimension</a>
                  </div>
                  <div className="">
                    You could disable, lock dimensions behind permissions nodes, and much more!
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <div className="text-lg font-semibold hover:text-title-lighter">
                    <a href="https://www.spigotmc.org/resources/84308">MobPreventer</a>
                  </div>
                  <div className="">
                    You'll be able to blacklist and whitelist mobs with per-world support!
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 w-screen flex justify-center">
            <div className="border-2 border-primary shadow-sm self-center w-1/2"></div>
          </div>

          <div className="flex flex-col p-5 items-center justify-center">
            <div className="text-title text-3xl hover:text-title-lighter"><b>Contact</b></div>
            <p className="text-title">You can get in touch with me on Discord at <b
                className="hover:text-title-lighter">Tofpu#3224</b>! I'm excited to work with you!</p>
          </div>

          <div className="h-10 flex items-center justify-center">
            <p className="text-title-lighter px-5">Site was made by Tofpu!</p>
          </div>

          <div id="themeButton"
               className="fixed bottom-1 right-1 select-none border-2 rounded-full bg-primary w-8 h-8 widget"
               onClick={() => Widget.onThemeSwitch()}>
            <div className="flex justify-center text-center">
              <p className="place-self-end text-center">🌓</p>
            </div>
          </div>
        </div>
      </>
  )
}
