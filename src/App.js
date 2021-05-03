import "./App.css";
export default function App() {
  const audioC = new Audio("/sounds/bvng.mp3");
  const audioD = new Audio("/sounds/crfo.mp3");
  const audioE = new Audio("/sounds/dtse.mp3");
  const audioF = new Audio("/sounds/edqt.mp3");
  const audioG = new Audio("/sounds/ldcc.mp3");
  const audioA = new Audio("/sounds/peoi.mp3");
  const audioB = new Audio("/sounds/tena.mp3");
  const audioSmallC = new Audio("/sounds/udgb.mp3");

  let onclick = (e) => {
    if (e.target.classList.contains("big-C")) audioC.play();
    if (e.target.classList.contains("chord-D")) audioD.play();
    if (e.target.classList.contains("chord-E")) audioE.play();
    if (e.target.classList.contains("chord-F")) audioF.play();
    if (e.target.classList.contains("chord-G")) audioG.play();
    if (e.target.classList.contains("chord-A")) audioA.play();
    if (e.target.classList.contains("chord-B")) audioB.play();
    if (e.target.classList.contains("small-C")) audioSmallC.play();
  };
  return (
    <>
      <div className="container">
        <div onClick={onclick} className="chord big-C">
          C
        </div>
        <div onClick={onclick} className="chord chord-D">
          D
        </div>
        <div onClick={onclick} className="chord chord-E">
          E
        </div>
        <div onClick={onclick} className="chord chord-F">
          F
        </div>
        <div onClick={onclick} className="chord chord-G">
          G
        </div>
        <div onClick={onclick} className="chord chord-A">
          A
        </div>
        <div onClick={onclick} className="chord chord-B">
          B
        </div>
        <div onClick={onclick} className="chord small-C">
          C
        </div>
      </div>
    </>
  );
}
