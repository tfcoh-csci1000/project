export default function examplePage() {
  return (
    <div className='container'>
      <title>Website</title>
      <link rel='icon' href='/favicon.ico' />

      <main>
        <div className='underline'>
          <h1 className='title'>Evan Feng's Page! </h1>
        </div>
        <img
          className='pic'
          src='https://i.postimg.cc/qR2VgDkd/spiderman.jpg' //change image 
          alt='Evans image'
        />

        <p className='description'>
         I'm Evan Feng, a Freshman at CU Boulder majoring in computer science. I am excited to explore software
         development and all that computer science has to offer. More specifically I am interested in implementing 
         Artifical Intelligence and Machine learning to solve problems that are otherwise very difficult or monotonous 
         for humans. I also want to develop myself professionally and create network of driven and passionate engineers
         looking to push the boundaries of computer science. I really like 
         snowboarding and lifting on my free time!
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
          font-size: 1.5rem;
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
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .button:hover,
        .button:focus,
        .button:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .button p {
          font-size: 1rem;
          font-weight: 600;
        }

        code {
          background: #fafafa;
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