import { Weather } from "./components/weather/index.jsx"

function App() {


  return (
    <>
      <div className="bg-[rgb(17,151,104)] p-5 text-center font-Roboto font-bold text-white text-3xl underline border-none">Weather App</div>
      <div className=" border-none flex justify-center items-center m-[0 auto] border-2 h-[90vh] font-Roboto">
        <div className=" text-center m-[50px auto 0px] w-5/6 max-w-[700px] rounded-lg h-[470px] p-[20px 15px] bg-[rgb(17,151,104)]">
          <Weather />
        </div>
      </div>
    </>
  )
}

export default App
