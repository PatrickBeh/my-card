// import logo from './logo.svg';
import './App.css'
import Info from './components/Info'
import Content from './components/Content'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className='bg-bg h-full flex flex-col items-center justify-center p-10'>
      <Header />
      <div className='bg-bg-card py-10 px-32'>
        <div className='overflow-hidden rounded-xl bg-zinc-100 dark:bg-card transition '>
            <Info />
            <div className='px-9 py-10 flex flex-col justify-start gap-4'>
              <Content
                title={'About'}
                content={'I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.'}
              />
              <Content
                title={'Interests'}
                content={'Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.'}
              />
            </div>
            <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
