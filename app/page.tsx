import DemoSlider from './components/Slider/Slider';
import data from "./components/Slider/data.json"
import NewArrivals from "./components/NewArrivals/NewArrivals";
import WhyUs from './components/WhyUs/WhyUs';
export default function Home() {
  return (
    <main className="h-full"
    >
      <section className='w-full h-[80vh] bg-customBlack pb-5'>
        <div className="h-full">
          <ul className='h-full w-full'>
            <DemoSlider data={data["slider-data"]}/>
          </ul>
        </div>
      </section>
      <section >
        <NewArrivals data={data['new-arrivals']}/> 
      </section>
      <section>
      <WhyUs />
      </section>
    </main>
  );
}
