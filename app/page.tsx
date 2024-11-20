import Image from "next/image";
import DemoSlider from './components/Slider/Slider';
import dataSlider from "./components/Slider/data.json"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className='w-full'>
      <div className="h-screen">
        <ul className='h-full w-full'>
          <DemoSlider data={dataSlider}/>
        </ul>
      </div>
    </section>
    </main>
  );
}
