export default function examplePage() {
    return (
      <div className='container'>
        <title>Website</title>
        <link rel='icon' href='/favicon.ico' />
        
        <main>
          <div className='underline'>
            <h1 className='title'>Hello I am Sammy.  </h1>
          </div>
          <p className='description'>
            You've probably heard of me.
          </p>
          <img
            className='pic'
            src='https://i.imgur.com/gFWphm3.jpg'
            alt='bio'
          />

          <p className='description'>
            I am Samuel Alexander Harris. I am a Computer Science student at CU Boulder. I was born in America and have roots in Ecuador and England thanks to my father and mother. 
            Besides school, I enjoy powerlifting, gaming, and music. I currently bench 245 and squat 290, and I have been playing the guitar for 4 years now. 
            I hope to increase my understanding of computer science during my time at CU, and simutaneously increase my level of strenth in the gym and my skill with the guitar,
            as well as finding new hobbies and experiences to enjoy during my time at CU Boulder . 
          </p>

          <img
            className='pic'
            src='https://images.unsplash.com/photo-1607560105214-0aaa5f8fcba4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3VpdGFyJTIwZWxlY3RyaWN8ZW58MHx8MHx8fDA%3D'
            alt='guitar'
          />
          <p className = 'description'> 
          Guitar is a big part of my life. I primarily play electric, but have also spent lots of time playing classic and learning styles like fingerpicking or folk. My main inspiration
          for practicing and learning guitar are bands like Foo Fighters and Muse.
          </p>
          <img
            className='pic'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhzz25XqAfvX7tAAs1lTbXL55XxPAoJZzzFQ&usqp=CAU'
            alt='guitar'
          />
          <p className = 'description'>
            I place so much value on lifting because it changed who I am. Many people view weightlifting as a vain hobby or just a waste of time, but for me it is almost like
            a form of meditation. Lifting heavy weight is such a great way for me to channel my emotion and stress and output it in a healthy and productive way. It has also helped me to grow
            as a person, facing adversity and challenge with confidence and determination, and I believe everyone who is well-bodied and healthy should weightlift.
          </p>
          

          <a className='button' href='/'>
            <p> Back to Home Page</p>
          </a>
        </main>

        <style jsx>{`
          .container { 
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 60rem;
            margin: auto;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .underline {
            /* border-bottom: solid black; */
            margin-bottom: 1.5rem;
          }

          .description {
            line-height: 1.5;
            font-size: 2rem;
            
          }

          .pic {
            height: 450px;
            width: 450px;
          }

          .button {
            /* margin: .5rem; */
            flex-basis: 45%;
            padding: 0.5rem;
            text-align: left;
            color: #20243d;
            text-decoration: none;
            border: 1px solid #20243d;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          .button:hover,
          .button:focus,
          .button:active {
            color: #20243d;
            border-color: #20243d;
          }

          .button p {
            font-size: 1rem;
            font-weight: 600;
          }

          code {
            background: #20243d;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
}